import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const CategorySlice = createSlice({
    name: 'categories',
    initialState: {
        value: []
    },
    reducers: {
        updateCategories: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {updateCategories, filterCategories} = CategorySlice.actions;

export const fetchAllFoodCategories = () => {
    return async (dispatch) => {
        const data = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php", {});
        const categories = data.data.categories;
        dispatch(updateCategories(categories));
    }
}
export const filterCategoriesByKeyWord = (keyWordFilter) => {
    return async (dispatch) => {
        const data = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php", {});
        const categories = data.data.categories;
        const filteredCategories = categories.filter((category) => category.strCategory.toLowerCase().includes(keyWordFilter.toLowerCase()));
        dispatch(updateCategories(filteredCategories));
    }
}
export const selectCategories = state => state.categories.value;

export default CategorySlice.reducer;
