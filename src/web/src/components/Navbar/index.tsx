import React from 'react';
import { Nav, Ul } from './style';
interface Props {
    children: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
    return (
        <Nav>
            <Ul>{children}</Ul>
        </Nav>
    );
};

export default Navbar;
