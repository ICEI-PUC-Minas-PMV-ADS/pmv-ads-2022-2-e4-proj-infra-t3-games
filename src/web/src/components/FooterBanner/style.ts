import styled from 'styled-components';
import banner from '../../assets/img/footer-banner.png';

export const FooterGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 200px;
    background: url(${banner});
    background-size: cover;
    align-items: center;
    justify-items: center;
    padding: 0 20px;
    gap: 20px;
`;

export const FooterInfo = styled.div`
    grid-column: 1/2;
`;

export const FooterText = styled.p`
    max-width: 332px;
    color: #ffffff;
    font-size: 18px;
    font-family: 'Inter';
    line-height: 24px;
    margin-bottom: 16px;
`;

export const FooterButton = styled.button`
    width: 152px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 16px;
    font-family: 'Inter';
    font-weight: 500;
    text-transform: uppercase;
    background: #ffffff;
    border-radius: 4px;
    cursor: pointer;

    :hover {
        filter: brightness(0.9);
    }

    :active {
        transform: scale(0.98);
    }
`;

export const FooterImage = styled.img`
    grid-column: 2/3;
    max-width: 100%;
    height: 172px;
    display: block;
    object-fit: cover;
`;
