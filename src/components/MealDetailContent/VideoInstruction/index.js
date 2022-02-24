import React from 'react';
import {Video, VideoWrapperBackground} from "./VideoInstructionStyle";
import {useSelector} from "react-redux";
import {selectVideoInstruction} from "../../reducers/MealDetailSlice";

const VideoInstruction = () => {
    const videoInstruction = useSelector(selectVideoInstruction);
    return (
        <>
            <VideoWrapperBackground>
                <Video src={videoInstruction}></Video>
            </VideoWrapperBackground>
        </>
    );
};

export default VideoInstruction;
