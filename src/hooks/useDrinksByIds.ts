import { useState } from "react";
import { Drink } from "../types";

const  useDrinksById = () => {
    const [drink, setDrink] = useState<Drink>();
    const fetchData = async (drinkId: string) => {
        try {

            const response = await fetch (
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?=${drinkId}`
            );


            const data = await response.json();
        } catch(error) {}
    };
};