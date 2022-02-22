import React from 'react';
import {SideBarWrapper, IconWrapper, CloseIcon, SidebarLink, SideBarContainer, SidebarMenu} from "./SideBarStyle";

const SideBar = ({isOpen, toggle}) => {
    return (
        <>
            <SideBarContainer isOpen={isOpen} onClick={toggle}>
                <IconWrapper>
                    <CloseIcon/>
                </IconWrapper>
                <SideBarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/home" onClick={toggle}>Home</SidebarLink>
                        <SidebarLink to="/categories" onClick={toggle}>Categories</SidebarLink>
                        <SidebarLink to="/countries" onClick={toggle}>Countries</SidebarLink>
                    </SidebarMenu>
                </SideBarWrapper>
            </SideBarContainer>
        </>
    );
};

export default SideBar;
