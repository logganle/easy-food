import React, {useEffect} from 'react';
import MealDetailContent from "../MealDetailContent";
import {fetchDetailMeal} from "../reducers/MealDetailSlice";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

const MealDetailPage = () => {
    const parameters = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailMeal(parameters.id));
    }, []);
    return (
        <MealDetailContent/>
    );
};

export default MealDetailPage;
