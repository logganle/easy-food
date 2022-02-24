import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import MealListSection from "../info_section/MealListSection";
import {filterMeals} from "../reducers/MealListSlice";
import {useParams} from "react-router-dom";

const Home = () => {
    const parameters = useParams();
    const dispatch = useDispatch();

    //implement based on timezone
    useEffect(() => {
        if (parameters.c === undefined) {
            const filters = {
                c: 'Breakfast'
            }
            dispatch(filterMeals(filters));
        } else {
            dispatch(filterMeals({c: parameters.c}))
        }

    }, []);

    return (
        <div>
            <MealListSection/>
        </div>
    );
};

export default Home;
