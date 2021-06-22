import React, { useState } from 'react';
import "./style.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const TopNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">WeLuvDevs</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/Benbrii/weluvdev-test">Le Github du test</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://welovedevs.com/app/fr/developer/benoit-developpeur-web-mobile-react-js">Mon profil</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://welovedevs.com/app/fr/">Là c'est vous</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default TopNavBar;
