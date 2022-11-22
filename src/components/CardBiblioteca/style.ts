import styled from 'styled-components';

export const CardWrapper = styled.div`
    max-width: 190px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const CardImage = styled.img`
    width: 190px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
`;

export const CardTitle = styled.p`
    color: #ffffff;
    font-weight: 600;
    font-family: 'Inter';
    font-size: 18px;
    overflow: hidden;
    text-align: center;
`;
