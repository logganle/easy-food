import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const MealListSlice = createSlice({
    name: 'MealSlice',
    initialState: {
        value: []
    },
    reducers: {
        updateMealListSlice: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {updateMealListSlice, filterMeal} = MealListSlice.actions;

const BASEURL = 'https://www.themealdb.com/api/json/v1/1/filter.php';

export const filterMealsBySpecificCategory = (filters) => {
    return async (dispatch) => {
        const params = {
            ...filters
        }
        const data = await axios.get(BASEURL, {params});
        const meals = data.data.meals;
        dispatch(updateMealListSlice(meals));
    }
}

export const SearchMealByName= (keyWord) => {
    return async (dispatch) => {
        const params = {
            s: keyWord
        }
        const data = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php", {params});
        const meals = data.data.meals;
        dispatch(updateMealListSlice(meals));
    }
}

export const filterMealBasedOnTime = () => {
    return async (dispatch) => {
        const params = {
            c: 'Breakfast'
        }
        const data = await axios.get(BASEURL, {params});
        const meals = data.data.meals;
        dispatch(updateMealListSlice(meals));
    }
}
export const selectMeals = (state) => state.meals.value;

export default MealListSlice.reducer;
