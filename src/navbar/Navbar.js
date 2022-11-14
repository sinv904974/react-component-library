import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import MyComponents from './MyComponents';

const Navbar = () => {
    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/about",
            text: "About",
        },
    ];

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(prevState => !prevState );
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className='navbar'>
            <button onClick={handleToggle} >
                {open ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </button>
            <div className={`menuNav ${open ? "showMenu" : ""}` }>
                <ul>
                    {links.map(link => {
                        return (
                            <li key={link.id}>
                                <NavLink
                                    to={link.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) => (isActive ? 'active-link' : 'none')}
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <MyComponents closeMenu={closeMenu} />
            </div>
        </nav>
    );
}

export default Navbar;