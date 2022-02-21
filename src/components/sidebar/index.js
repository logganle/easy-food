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
                        <SidebarLink to="categories" onClick={toggle}>Categories</SidebarLink>
                        <SidebarLink to="countries" onClick={toggle}>Countries</SidebarLink>
                        <SidebarLink to="favorites" onClick={toggle}>Your favorites</SidebarLink>
                    </SidebarMenu>
                </SideBarWrapper>
            </SideBarContainer>
        </>
    );
};

export default SideBar;
