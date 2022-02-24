import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from '../reducers/CategorySlice';
import mealListReducer from '../reducers/MealListSlice'
import mealDetailReducer from '../reducers/MealDetailSlice';

export default configureStore({
    reducer: {
        categories: categoryReducer,
        meals: mealListReducer,
        mealDetail: mealDetailReducer
    }
});
