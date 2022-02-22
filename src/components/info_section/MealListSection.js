import React from 'react';
import {useSelector} from "react-redux";
import {selectMeals} from "../reducers/MealListSlice";
import MealCard from "./InfoCard/MealCard";
import {InfoContainer} from "./InfoSectionStyle";

const MealListSection = () => {
    const meals = useSelector(selectMeals);

    return (
        <>
            <InfoContainer>
                {
                    meals.map((meal) => <MealCard key={meal.idMeal} {...meal}/>)
                }
            </InfoContainer>
        </>
    );
};

export default MealListSection;
