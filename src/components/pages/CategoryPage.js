import React, {useEffect} from 'react';
import CategoryListSection from "../info_section/CategoryListSection";
import {useDispatch} from "react-redux";
import {fetchAllFoodCategories} from "../reducers/CategorySlice";

const CategoryPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllFoodCategories());
    }, []);
    return (
        <div>
            <CategoryListSection/>
        </div>
    );
};

export default CategoryPage;
