import { useEffect, useState } from "react";
import { Drink } from "../types";

export const useDrinks = () => {
    const [error, setError] = useState("");
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [searchCompleted, setSearchCompleted] = useState<boolean>(false);

    const fetchDrinks = async (searchText: string) => {
        if (searchText.length === 0)
            return;

        setLoad(true);
        setSearchCompleted(false);
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
            );

            const data = await response.json();
            if (!data.drinks || data.drinks.length === 0) {
                setSearchCompleted(true);
                return;
            }

            setDrinks(data.drinks);
            setSearchCompleted(true);
        } catch (error) {
            setError("OOH NOO! Unexpected error on drinking search, try again later.");
            setSearchCompleted(true);
        } finally {
            setLoad(false);
            
        }
    };

    const clear = () => {
        setDrinks([]);
        setError("");
    };

    return { fetchDrinks, drinks, error, clear, load, searchCompleted, setSearchCompleted };
};