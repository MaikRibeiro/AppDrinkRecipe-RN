import { useEffect, useState } from "react";
import { Drink } from "../types";

export const  useDrinksById = (drinkId: string) => {
    const [drink, setDrink] = useState<Drink>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState("");

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch (
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
                );

                const data = await response.json();
                setDrink(data.drinks[0]);
            } catch(error) {
                setError("OOPS! Error to fetch drink details, try again later.")
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { drink, loading, error };
};