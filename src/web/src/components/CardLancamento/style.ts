import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 154px;
`;

export const GameImage = styled.img`
    width: 100%;
    height: 211px;
    margin-bottom: 6px;
    border-radius: 5px;
`;

export const GameTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
