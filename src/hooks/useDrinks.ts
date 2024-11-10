import { useState } from "react";
import { Drink } from "../types";

export const useDrinks = () => {
    const [error, setError] = useState("");
    const [drinks, setDrinks] = useState<Drink[]>([]);

    const fetchDrinks = async (searchText: string) => {
        if (searchText.length === 0)
            return;

        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
            );

            const data = await response.json();
            if (!data.drinks || data.drinks.length === 0) {
                setError("Sorry, no drinks found. Try again.");
                return;
            }

            setDrinks(data.drinks);
        } catch (error) {
            setError("Unexpected error on drinking search, try again later.");
        }
    };

    const clear = () => {
        setDrinks([]);
        setError("");
    };

    return { fetchDrinks, drinks, error, clear };
};