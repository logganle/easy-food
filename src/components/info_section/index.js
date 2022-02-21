import React from 'react';
import InfoSectionItem from "../info_section_item";

const InfoSection = ({infoSectionList}) => {
    return (
        <>
            {
                infoSectionList.map((infoSection) => {
                        return <InfoSectionItem key={infoSection.id} {...infoSection}/>
                    }
                )
            }
        </>
    );
};

export default InfoSection;
