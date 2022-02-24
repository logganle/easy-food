import React from 'react';
import {MealDetailContentContainer} from "./MealDetailContentStyle";

import VideoInstruction from "./VideoInstruction";
import IngredientInstruction from "./IngredientInstruction";

const MealDetailContent = () => {

    return (
        <MealDetailContentContainer>
            <VideoInstruction/>
            <IngredientInstruction/>
        </MealDetailContentContainer>
    );
};

export default MealDetailContent;
