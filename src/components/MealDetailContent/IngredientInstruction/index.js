import React from 'react';
import {
    IngredientCard,
    IngredientCardImage, IngredientCardName, IngredientCardQuantity,
    IngredientInstructionContainer,
    IngredientInstructionWrapper
} from "./IngredientInstructionStyle";
import {useSelector} from "react-redux";
import {selectIngredients} from "../../reducers/MealDetailSlice";

const IngredientInstruction = () => {
    const ingredientWithQtyList = useSelector(selectIngredients);

    return (
        <>
            <IngredientInstructionContainer>
                <IngredientInstructionWrapper>{
                    ingredientWithQtyList.map(({ingredient, qty}, index) => {
                        return <IngredientCard key={index}>
                            <IngredientCardImage
                                src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}/>
                            <IngredientCardName>{ingredient}</IngredientCardName>
                            <IngredientCardQuantity>{qty}</IngredientCardQuantity>
                        </IngredientCard>
                    })
                }

                </IngredientInstructionWrapper>
            </IngredientInstructionContainer>
        </>
    );
};

export default IngredientInstruction;
