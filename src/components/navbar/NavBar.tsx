import React, { useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen, Logo } from "../Icons";
import { FaHome, FaInfo, FaPhone, FaFile, FaCaretDown } from 'react-icons/fa';
import SubMenu from "./SubMenu";

// structure of a navigation item
export interface INavItem {
    priority: number,
    placement?: string,
    type?: string
    content?: any,
    title?: string,
    route: string,
    icon?: React.ReactElement
    subMenuItems?: INavItem[] // Optional sub-menu items
}

function NavBar() {
    // State to manage the click state of the mobile menu
    const [click, setClick] = useState(false);

    // State to store the navigation menu items
    const [menuItems, setMenuItems] = useState<INavItem[]>([
        //  existing menu items here
        {
            priority: 1,
            placement: 'menu',
            type: 'text',
            content: 'Home',
            // title: 'Home',
            route: '/',
            icon: <FaHome />
        },
        {
            priority: 2,
            placement: 'menu',
            type: 'text',
            content: 'About',
            title: 'About',
            route: '/about',
            icon: <FaInfo />
        },
        {
            priority: 3,
            placement: 'hamburger',
            type: 'text',
            content: 'Blog',
            title: 'Blog',
            route: '/blog',
            icon: <FaFile />
        },
        {
            priority: 4,
            placement: 'menu',
            type: 'text',
            content: 'Contact us',
            title: 'Contact us',
            route: '/contact',
            icon: <FaPhone />

        },
        {
            priority: 5,
            placement: 'hamburger',
            type: 'text',
            content: 'Resources',
            title: 'Resources',
            route: '/resources',

        },
        {
            priority: 6,
            placement: 'menu',
            type: 'text',
            content: 'About',
            title: 'Meet our team',
            route: '/meet',
            subMenuItems: [
                {
                    title: "Tester 1",
                    priority: 1,
                    route: ''
                },
                {
                    title: "Tester 2",
                    priority: 2,
                    route: ''
                }
            ]
        },
        {
            priority: 7,
            placement: 'menu',
            type: 'text',
            content: 'About',
            title: 'Software Solutions1',
            route: '/meeti',
        },
        {
            priority: 8,
            placement: 'menu',
            type: 'text',
            content: 'About',
            title: 'Software Solutions2',
            route: '/meetix',
            icon: <FaInfo />
        },
        {
            priority: 7,
            placement: 'menu',
            type: 'hyperlink',
            content: 'About',
            title: 'Google.com',
            route: 'https://google.com/',
            icon: <FaInfo />
        }
    ]);

    // State to determine if the screen is in a mobile view
    const [isMobile, setIsMobile] = useState(false);

    // State to store menu items for the top bar
    const [menuBarItems, setMenuBarItems] = useState<INavItem[]>([]);

    // State to store menu items for the hamburger menu
    const [hamburgerItems, setHamburgerItems] = useState<INavItem[]>([]);

    // Function to handle the click event of the mobile menu
    const handleClick = () => setClick(!click);

    // State to manage the open/closed state of the side menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the side menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to render a navigation item
    const navItem = (item: INavItem, index: number) => {
        return (
            <li className="nav-item" key={index}>
                {item.type === 'text' && (
                    <NavLink
                        to={item.route}
                        className="nav-links"
                        onClick={handleClick}
                    >
                        <span className="icon">
                            {item.icon}
                        </span>
                        <span> {item.title}</span>
                        {item.subMenuItems && <FaCaretDown />}
                    </NavLink>)
                }
                {item.type === 'hyperlink' && (
                    <a className="nav-links hyperlink" href={item.route}>{item.title}</a>
                )}
                {item.subMenuItems && (
                    <SubMenu items={item.subMenuItems} position="below" />
                )}
            </li>
        );
    }

    // Use the useEffect hook to respond to window size changes
    useEffect(() => {
        const sortedMenuItems: INavItem[] = [...menuItems];
        sortedMenuItems.sort((a, b) => a.priority - b.priority);

        const checkScreenWidth = () => {
            const screenWidth = window.innerWidth;
            const itemToShowOnTopMenu = Math.floor((screenWidth - 200) / 150);

            if (menuItems.length > itemToShowOnTopMenu && !isMobile) {
                setMenuBarItems(sortedMenuItems.slice(0, itemToShowOnTopMenu + 1));
                setHamburgerItems(sortedMenuItems.slice(itemToShowOnTopMenu + 1));
            }
            setIsMobile(screenWidth < 960);
        };

        // Initial check
        checkScreenWidth();

        // Listen for window resize events
        window.addEventListener('resize', checkScreenWidth);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <span className="icon">
                            <NavLink to="/" >
                                <Logo />
                            </NavLink>
                        </span>
                    </div>

                    <ul className={`d-none ${click ? "nav-menu active" : "nav-menu"}`} id="topmenu">
                        {isMobile ? (
                            // Render all menu items in mobile view
                            menuItems.map((item, index) => navItem(item, index))
                        ) : (
                            // Render menu bar items for larger screens
                            <>
                                {menuBarItems.map((item, index) => navItem(item, index))}
                                <li className="nav-item d-none m-l-2">
                                    <div className="hamburger-menu">
                                        <div className="hamburger-icon" onClick={toggleMenu}>
                                            {isMenuOpen ? (
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
                                </li>
                            </>
                        )}
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
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

                    <div className={`side-menu ${isMenuOpen && !isMobile ? 'open' : ''}`}>
                        <div className="side-menu-content">
                            <ul className="nav-menu">
                                {hamburgerItems.map((item, index) => navItem(item, index))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
