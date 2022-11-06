import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 506px;
    height: 164px;
    padding: 10px 12px;
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
    width: 104px;
    height: 130px;
`;

export const GameInfoGroup = styled.div``;

export const GameTitle = styled.strong`
    display: block;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const GameDescription = styled.span`
    max-width: 286px;
    display: block;
    font-size: 14px;
`;
