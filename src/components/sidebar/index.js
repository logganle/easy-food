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
                        <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                        <SidebarLink to="/categories" onClick={toggle}>Categories</SidebarLink>
                        {/*<SidebarLink to="/search" onClick={toggle}>Search</SidebarLink>*/}
                    </SidebarMenu>
                </SideBarWrapper>
            </SideBarContainer>
        </>
    );
};

export default SideBar;
