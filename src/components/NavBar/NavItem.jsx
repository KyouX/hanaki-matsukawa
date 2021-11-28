import React from 'react';

const NavItem = ({ text }) => {
    return <a className="flex hover:bg-verdeclaro" href="#"><div className="mx-auto my-6 md:my-auto md:mx-8">{text}</div></a>
}

export default NavItem;