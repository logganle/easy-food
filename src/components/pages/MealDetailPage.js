import React, {useEffect} from 'react';
import MealDetailContent from "../MealDetailContent";
import {fetchDetailMeal} from "../reducers/MealDetailSlice";
import {useDispatch} from "react-redux";


const MealDetailPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailMeal(52772));
    }, []);
    return (
        <MealDetailContent/>
    );
};

export default MealDetailPage;
