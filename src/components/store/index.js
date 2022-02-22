import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from '../reducers/CategorySlice';
import mealListReducer from '../reducers/MealListSlice'

export default configureStore({
    reducer: {
        categories: categoryReducer,
        meals: mealListReducer
    }
});
