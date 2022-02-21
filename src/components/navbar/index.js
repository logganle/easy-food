import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavMenu, NavItem, NavLink, NavBarContainer, MobileIcon} from "./NavBarStyle";
import Search from "../search";

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <Search/>
                <NavBarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='/'>Categories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>Countries</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>Your favorites</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default NavBar;
