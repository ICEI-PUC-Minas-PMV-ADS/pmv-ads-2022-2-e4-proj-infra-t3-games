import { StyledLi, StyledLink } from './style';

interface INavbarLink {
    children: React.ReactNode;
    to: string;
    onClick?: () => void;
}

const NavbarLink = ({ children, to, onClick }: INavbarLink) => {
    return (
        <StyledLi>
            <StyledLink onClick={onClick} to={to}>
                {children}
            </StyledLink>
        </StyledLi>
    );
};

export default NavbarLink;
