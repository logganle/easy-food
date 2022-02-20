import React from 'react';
import {Nav, NavMenu, NavItem, NavLink, NavBarContainer} from "./NavBarStyle";

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
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
