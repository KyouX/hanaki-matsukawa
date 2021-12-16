import React from 'react';

import { Link } from 'react-router-dom';

const NavItem = ({ text, link }) => {
    return <Link className="flex hover:bg-verdeclaro" to={link}><div className="mx-auto my-6 md:my-auto md:mx-8">{text}</div></Link>
}

export default NavItem;