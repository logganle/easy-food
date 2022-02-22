import React from 'react';
import {Card, CardBody, CardImage, CardLink, CardTitle} from "./InfoCardStyle";

const MealCard = ({strMeal, strMealThumb}) => {
    return (
        <Card>
            <CardLink>
                <CardImage src = {strMealThumb}/>
                <CardBody>
                    <CardTitle>{strMeal}</CardTitle>
                </CardBody>
            </CardLink>
        </Card>
    );
};

export default MealCard;
