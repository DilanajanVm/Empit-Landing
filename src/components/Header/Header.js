import React from "react";
import './Header.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button, NavbarText,
} from 'reactstrap';
import logo from '../../assets/img/logos/logo.png';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className='headerBar container'>
                <Navbar className='row'>
                    <NavbarBrand className='brand-logo' href="/"><img src={logo} alt=""/></NavbarBrand>
                    <div className='brand-links-wrapper'>
                        <NavItem className='brand-link'><Link to={'/'}>Home</Link></NavItem>

                        <NavItem className='brand-link'><Link to={'/'}>About us</Link></NavItem>

                        <NavItem className='brand-link'><Link to={'/'}>Portfolio</Link></NavItem>

                        <NavItem className='brand-link'><Link to={'/'}>Services</Link></NavItem>

                        <NavItem className='brand-link-btn'><Link to={'/'}>Let’s Talk</Link></NavItem>
                    </div>
                </Navbar>
            </div>

        );
    }
}

export default Header;