import React from 'react';
import './Header.css'; // Import your CSS file
interface ILinks {
    title: string,
    path: string,
    icon?: string,
    displayOrder?: number
}
interface NavLinkProps {
    path: string;
    title: string;
}

const Header = () => {
    const links: ILinks[] = [{
        title: 'Home',
        path: ''
    },
    {
        title: 'Contact Us',
        path: ''
    },
    {
        title: 'About Us',
        path: ''
    }]
    const navLink: React.FC<NavLinkProps> = ({ path, title }) => {
        return <li className="nav-item" key={path + title}>
            <a href={path} className="nav-link">
                {title}
            </a>
        </li>
    }

    return (
        <nav className="header">
            <ul className="nav-list">
                {
                    links.map(link => navLink(link))
                }
            </ul>
        </nav>
    );
};

export default Header;
