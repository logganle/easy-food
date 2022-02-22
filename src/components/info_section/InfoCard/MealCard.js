import React from 'react';
import {Card, CardBody, CardImage, CardLink, CardSubtitle, CardTitle} from "./InfoCardStyle";

const MealCard = () => {
    return (
        <Card>
            <CardLink>
                <CardImage src = "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg"/>
                <CardBody>
                    <CardSubtitle>Serves 5 | prep Time 20 Mins</CardSubtitle>
                    <CardTitle>Beef and Mustard Pie</CardTitle>
                </CardBody>
            </CardLink>
        </Card>
    );
};

export default MealCard;
