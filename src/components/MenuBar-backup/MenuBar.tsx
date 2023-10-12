
import React, { useState } from 'react';

const MenuBar = () => {
    const [menuItems, setMenuItems] = useState([
        // Your existing menu items here
        {
          priority: 1,
          placement: 'menu',
          type: 'text',
          content: 'Home',
        },
        {
          priority: 2,
          placement: 'menu',
          type: 'text',
          content: 'About',
        },
        {
          priority: 3,
          placement: 'menu',
          type: 'text',
          content: 'Blog',
        },
        {
          priority: 4,
          placement: 'menu',
          type: 'text',
          content: 'Contact Us',
        },
      ]);

    const menuBarItems = menuItems
        .filter((item) => item.placement === 'menu')
        .sort((a, b) => a.priority - b.priority);

    const hamburgerItems = menuItems
        .filter((item) => item.placement === 'hamburger')
        .sort((a, b) => a.priority - b.priority);

    return (
        <div>
            <nav className="navbar"> 
                <div className="nav-container">
                    <a className="nav-logo" href="/">
                        Logo{/* Add your logo here */}
                    </a>
                    <ul className="nav-menu">
                        {menuBarItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                {item.type === 'text' && <span className="nav-links">{item.content}</span>}
                                {item.type === 'icon' && <span className="nav-links">{item.content}</span>}
                                {item.type === 'link' && <a className="nav-links" href={item.content}>{item.content}</a>}
                            </li>
                        ))}
                    </ul>
                    <div className="nav-icon">
                        <span className="icon">☰</span>
                    </div>
                </div>
            </nav>
            <div className="hamburger-menu">
                <button>Hamburger Menu</button>
                <ul>
                    {hamburgerItems.map((item: any, index) => (
                        <li key={index}>
                            {item.type === 'text' && <span>{item.content}</span>}
                            {item.type === 'icon' && <span role="img">{item.content}</span>}
                            {item.type === 'link' && <a href={item.content}>{item.content}</a>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuBar;

