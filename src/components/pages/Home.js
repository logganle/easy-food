import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import MealListSection from "../info_section/MealListSection";
import {filterMeals} from "../reducers/MealListSlice";

const Home = () => {
    const dispatch = useDispatch();

    //implement based on timezone
    useEffect(() => {
        const filters = {
            c: 'Breakfast'
        }
        dispatch(filterMeals(filters));
    }, []);

    return (
        <div>
            <MealListSection/>
        </div>
    );
};

export default Home;
