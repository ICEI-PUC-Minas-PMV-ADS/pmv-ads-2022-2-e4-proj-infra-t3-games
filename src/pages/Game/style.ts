import styled from 'styled-components';

export const GameWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`;

export const GameName = styled.h1`
    font-family: 'Lexend Deca';
    font-size: 52px;
    color: white;
    margin-bottom: 20px;
`;

export const GameImage = styled.img`
    max-width: 100%;
    margin-bottom: 40px;
`;

export const Description = styled.p`
    max-width: 600px;
    font-weight: 400;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 60px;
`;
