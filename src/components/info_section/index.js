import React from 'react';
import {InfoContainer} from "./InfoSectionStyle";
import CategoryCard from "./InfoCard/CategoryCard";

const InfoSection = ({cardList}) => {
    return (
        <InfoContainer>
            {cardList.map((card) => <CategoryCard key={card.idCategory} {...card}/>)}
        </InfoContainer>
    );
};

export default InfoSection;
