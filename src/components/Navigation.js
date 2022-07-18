import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import menu from '../assets/menu.svg';
import { Fade, Zoom } from 'react-reveal';


export const Header = () => {
    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);
    const togNav = () => {
        (navigation ? setNavigation(!navigation) : setNavigation(navigation))
    }

    const MenuItem = ({ to, firstLetter, linkEnd }) => {
        return (
            <NavItem>
                <NavLink tag='link' onClick={togNav} className='nav-link' to={to}>
                    <span>{firstLetter}</span>
                    <span>{linkEnd}</span>
                </NavLink>
            </NavItem>
        )
    }

    return (
        <Navbar className='navbar navbar-expand-lg p-1 d-flex justify-content-between sticky-top text-light myNav' style={{ zIndex: '5' }}>
            {/* Menu */}
            <Zoom>
                <NavbarToggler onClick={openNav} className='align-self-center justify-content-end px-0'>
                    <img src={menu} alt='menu' className='text-success' />
                </NavbarToggler>
            </Zoom>

            {/* Navigation */}
            <Collapse isOpen={navigation} navbar className='justify-content-end'>
                <Nav navbar className='ml-auto text-center text-light '>
                    <Fade  >
                        <MenuItem
                            to='/'
                            firstLetter='H'
                            linkEnd='ome'
                        />
                    </Fade>
                    <Fade delay={300}>
                        <MenuItem
                            to='/about'
                            firstLetter='A'
                            linkEnd='bout'
                        />
                    </Fade>
                    <Fade delay={600}>
                        <MenuItem
                            to='/projects'
                            firstLetter='P'
                            linkEnd='rojects'
                        />
                    </Fade>
                    <Fade delay={900}>
                        <MenuItem
                            to='/contact'
                            firstLetter='C'
                            linkEnd='ontact'
                        />
                    </Fade>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;