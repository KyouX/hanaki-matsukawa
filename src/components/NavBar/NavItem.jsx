import React from 'react';

const NavItem = ({ text }) => {
    return <a className="flex hover:bg-verdeclaro" href="#"><div className="my-auto mx-8">{text}</div></a>
}

export default NavItem;