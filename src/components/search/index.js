import React, {useState} from 'react';
import {SearchForm, SearchInput} from "./SearchBarStyle";
import {useDispatch} from "react-redux";
import {
    fetchAllFoodCategories,
    filterCategoriesByKeyWord
} from "../reducers/CategorySlice";
import {SearchMealByName, filterMealBasedOnTime} from "../reducers/MealListSlice";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newSearch = e.target.value;
        setSearchValue(newSearch);
        if (window.location.pathname.startsWith('/categories')) {
            if (newSearch === '')
                dispatch(fetchAllFoodCategories());
            else
                dispatch(filterCategoriesByKeyWord(newSearch));
        } else {
            if (newSearch === '')
                dispatch(filterMealBasedOnTime());
            else {
                dispatch(SearchMealByName(newSearch));
            }
        }
    }
    return (
        <>
            <SearchForm>
                <SearchInput value={searchValue} onChange={handleChange}
                             placeholder={`Search your meals`}/>
            </SearchForm>
        </>
    );
};

export default Search;
