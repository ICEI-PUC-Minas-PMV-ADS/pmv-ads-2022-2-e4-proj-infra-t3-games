import styled from 'styled-components';

export const CardWrapper = styled.div`
    flex: 0 1 506px;
    height: 220px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    color: white;
    gap: 26px;
    border-radius: 5px;

    :hover {
        background: #000000;
    }
`;

export const GameImage = styled.img`
    width: 140px;
    height: 190px;
`;

export const GameInfoGroup = styled.div``;

export const GameTitle = styled.strong`
    display: block;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
`;

export const GameDescription = styled.span`
    max-width: 286px;
    display: block;
    font-size: 18px;
`;
