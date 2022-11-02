import React from 'react';
import { Nav, Ul, StyledLink } from './style';

type NavbarItems = {
    name: string;
    link: string;
};

interface Props {
    items: Array<NavbarItems>;
}

const Navbar = ({ items, ...props }: Props) => {
    return (
        <Nav>
            <Ul>
                {items.map((item) => (
                    <li key={item.name}>
                        <StyledLink to={item.link}>{item.name}</StyledLink>
                    </li>
                ))}
            </Ul>
        </Nav>
    );
};

export default Navbar;
