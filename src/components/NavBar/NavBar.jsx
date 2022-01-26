import React from 'react';
import CartWidget from '../Iconos/CartWidget';
import HamburgerIcon from '../Iconos/Hamburger';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const navItems = [{ label: "Matcha", link: "/category/matcha" }, { label: "Sets", link: "/category/sets" }, { label: "Meditación", link: "/category/meditacion" }, { label: "Contacto", link: "/" }]

    return (
        <header className="fixed z-50 top-0 inset-x-0 w-full flex flex-row bg-white px-8 font-palosecomedium">
            <div className="my-auto md:hidden">
                <HamburgerIcon />
            </div>
            <Link id="logo" to="/" className="mx-auto w-16  md:w-24">
                <img src="logo.png" className="w-full object-contain" alt="logo" />
            </Link>
            <div className="hidden md:flex flex-row mx-auto pl-16 pr-8">
                {navItems.map((item, index) => (
                    <NavItem text={item.label} key={`child-${index}`} link={item.link}/>
                ))}
            </div>
            <Link to="/cart" className="my-auto cursor-pointer">
                <CartWidget />
            </Link>


        </header>
    )
}

export default NavBar;