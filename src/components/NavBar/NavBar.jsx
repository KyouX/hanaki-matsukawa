import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
    const navItems = ["Hanaki", "Nuestra historia", "Productos", "Contacto"]

    return (
        <header className="fixed top-0 inset-x-0 w-full flex flex-row bg-white px-8">
            <a id="logo" href="index.html" className="inline-block w-24">
                <img src="logo.png" className="w-full object-contain" alt="logo"/>
            </a>
            <div className="flex flex-row mx-auto pl-16 pr-8 font-semibold">
                {navItems.map((item,index) => (
                    <NavItem text={item} key={`child-${index}`} />
                ))}
            </div>
        </header>
    )
}

/*
const objeto = {
    llave1: valor1,
    llave2: valor2
}

// const llave1 = objeto.llave1;

const { llave1 } = objeto


*/
export default NavBar;