import React from 'react';
import {Card, CardBody, CardImage, CardLink, CardTitle} from "./InfoCardStyle";

const MealCard = ({strMeal, strMealThumb, idMeal}) => {
    return (
        <Card>
            <CardLink to={`/meals/${idMeal}`}>
                <CardImage src = {strMealThumb}/>
                <CardBody>
                    <CardTitle>{strMeal}</CardTitle>
                </CardBody>
            </CardLink>
        </Card>
    );
};

export default MealCard;
