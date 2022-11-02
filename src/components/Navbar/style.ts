import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    padding: 0 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.32);
    margin-bottom: 55px;
`;

export const Ul = styled.ul`
    margin: 0 auto;
    max-width: 1150px;
    height: 120px;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    padding: 16px 37px;
    border: 1px solid #8257e6;
    border-radius: 4px;
    text-align: center;
`;
