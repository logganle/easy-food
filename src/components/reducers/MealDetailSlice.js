import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const MealDetailSlice = createSlice({
    name: 'MealDetail',
    initialState: {
        meal: {},
        ingredients: [],
    },
    reducers: {
        updateMealDetail: (state, action) => {
            const mealDetail = action.payload;
            const ingredients = [], qties = [];
            for (const [key, value] of Object.entries(mealDetail)) {
                if (key.startsWith("strIngredient") && value !== null && value !== '') {
                    ingredients.push(value);
                } else if (key.startsWith("strMeasure") && value !== null && value !== '') {
                    qties.push(value);
                }
            }
            const pairs = [];
            for (let i = 0; i < Math.min(ingredients.length, qties.length); i++) {
                pairs.push({ingredient: ingredients[i], qty: qties[i]});
            }

            state.ingredients = pairs;
            state.meal = mealDetail;
        }
    }
});

export const {updateMealDetail} = MealDetailSlice.actions;
const BASEURL = "https://www.themealdb.com/api/json/v1/1/lookup.php";
export const fetchDetailMeal = (idMeal) => {
    return async (dispatch) => {
        const params = {
            i: idMeal
        }
        const data = await axios.get(BASEURL, {params});
        const mealDetail = data.data.meals.length > 0 ? data.data.meals[0] : {};
        dispatch(updateMealDetail(mealDetail));
    }
}
export const selectVideoInstruction = state => {
    const meal = state.mealDetail.meal;
    if (!meal.hasOwnProperty("strYoutube")) return "";
    const rawVideoLink = meal["strYoutube"];
    const equalSignIndex = rawVideoLink.indexOf('=');
    const videoQueryParameter = rawVideoLink.substring(equalSignIndex + 1);
    return "https://www.youtube.com/embed/" + videoQueryParameter;
}

export const selectMealDetail = (state) => state.mealDetail.meal;
export const selectIngredients = (state) => state.mealDetail.ingredients;

export default MealDetailSlice.reducer;
