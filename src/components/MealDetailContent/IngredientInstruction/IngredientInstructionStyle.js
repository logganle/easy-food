import styled from "styled-components";

export const IngredientInstructionContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  width: 100%;
`
export const IngredientInstructionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;;
  justify-content: center;
  //justify-content: space-around;
`
export const IngredientCard = styled.div`
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 300px;
  max-width: 180px;
  margin: 20px 40px 0px 0px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
  }
`

export const IngredientCardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  background: #c7ecee;
`
export const IngredientCardName = styled.h2`
  margin: 2px 0 0 0;
  text-align: center;
`
export const IngredientCardQuantity = styled.p`
  padding: 0;
  
`
