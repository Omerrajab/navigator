import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import "./NavBar.css";
import { AboutIcon, BlogIcon, CodeIcon, ContactIcon, HamburgetMenuClose, HamburgetMenuOpen, HomeIcon } from "../Icons";
interface INavItem {
    title: string,
    route: string,
    icon: any,
    displayOrder: number
}
function NavBar() {
    const [click, setClick] = useState(false);
    const navItems: INavItem[] = [{
        title: 'Home',
        route: '/',
        icon: <HomeIcon />,
        displayOrder: 1
    },
    {
        title: 'About',
        route: '/',
        icon: <AboutIcon />,
        displayOrder: 2
    },
    {
        title: 'Blog',
        route: '/',
        icon: <BlogIcon />,
        displayOrder: 3
    },
    {
        title: 'Contact Us',
        route: '/',
        icon: <AboutIcon />,
        displayOrder: 4
    },
    {
        title: 'Home',
        route: '/',
        icon: <HomeIcon />,
        displayOrder: 1
    },
    {
        title: 'About',
        route: '/',
        icon: <AboutIcon />,
        displayOrder: 2
    },
    {
        title: 'Blog',
        route: '/',
        icon: <BlogIcon />,
        displayOrder: 3
    },
    {
        title: 'Contact Us',
        route: '/',
        icon: <AboutIcon />,
        displayOrder: 4
    }]
    const handleClick = () => setClick(!click);
    const navItem = (item: INavItem) => {
        return (<li className="nav-item">
            <NavLink

                to={item.route}
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
            >
                <span className="icon">
                    {item.icon}
                </span>
                <span> {item.title}</span>
            </NavLink>
        </li>)
    }
    return (
        <>

            <nav className="navbar">
                <div className="nav-container">

                    <NavLink to="/" className="nav-logo">

                        <span className="icon">
                            <CodeIcon />
                        </span><span>Ideas</span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {
                            navItems.map(link => navItem(link))
                        }
                        <li className="nav-item">
                            <NavLink

                                to="/"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                <span className="icon">
                                    <HomeIcon />
                                </span>
                                <span> Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/about"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                <span className="icon">
                                    <AboutIcon />
                                </span>
                                <span> About</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/blog"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                <span className="icon">
                                    <BlogIcon />
                                </span>
                                <span> Blog</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink

                                to="/contact"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >

                                <span className="icon">
                                    <HomeIcon />
                                </span>
                                <span>Contact Us</span>

                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuOpen />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
