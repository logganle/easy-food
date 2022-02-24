import React from 'react';
import {
    Card,
    CardBody,
    CardImage,
    CardLink,
    CardTitle
} from "./InfoCardStyle";

const CategoryCard = ({strCategory, strCategoryThumb}) => {
    return (
        <Card>
            <CardLink to={`/${strCategory}`}>
                <CardImage src={strCategoryThumb}/>
                <CardBody>
                    <CardTitle>{strCategory}</CardTitle>
                    {/*<CardDescription>{strCategoryDescription}</CardDescription>*/}
                </CardBody>
            </CardLink>
        </Card>
    );
};

export default CategoryCard;
