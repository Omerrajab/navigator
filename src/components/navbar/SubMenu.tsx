import React, { useState } from 'react';
import "./NavBar.css";
import { INavItem } from './NavBar';

interface IsubMenu {
    items: INavItem[],
    position: string
}
export default function SubMenu({ items, position }: IsubMenu) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className={`sub-menu ${position}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <ul className="sub-menu-list">
                {items.map((item, index) => (
                    <li key={index} className='nav-item sub-item'>
                        <span className='nav-link'> {item.title}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
}