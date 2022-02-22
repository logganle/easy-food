import React from 'react';
import {InfoContainer} from "./InfoSectionStyle";
import CategoryCard from "./InfoCard/CategoryCard";
import {useSelector} from "react-redux";
import {selectCategories} from "../reducers/CategorySlice";
const CategoryListSection = () => {
    const categories = useSelector(selectCategories);

    return (
        <InfoContainer>
            {categories.map((card) => <CategoryCard key={card.idCategory} {...card}/>)}
        </InfoContainer>
    );
};

export default CategoryListSection;
