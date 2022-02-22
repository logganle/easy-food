import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavMenu, NavItem, NavLink, NavBarContainer, MobileIcon} from "./NavBarStyle";

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                {/*<Search/>*/}
                <NavBarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/categories'>Categories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/search'>Search</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default NavBar;
