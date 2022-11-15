import React from 'react';
import { Nav, Ul, StyledLink } from './style';

type NavbarItems = {
    name: string;
    link: string;
    onClick?: () => void
};

interface Props {
    items: Array<NavbarItems>;
}

const Navbar = ({ items, ...props }: Props) => {
    return (
        <Nav>
            <Ul>
                {items.map((item) => (
                    <li key={item.name} onClick={item.onClick}>
                        <StyledLink to={item.link}>{item.name}</StyledLink>
                    </li>
                ))}
            </Ul>
        </Nav>
    );
};

export default Navbar;
