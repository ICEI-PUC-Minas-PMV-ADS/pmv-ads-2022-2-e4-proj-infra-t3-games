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

export const ResgateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82px;
    height: 18px;
    padding: 14px 28px;
    font-size: 14px;
    background: linear-gradient(
        90deg,
        #bd0059 8.77%,
        rgba(255, 13, 211, 0.542483) 50.51%,
        rgba(123, 0, 179, 0) 100%
    );
    border-radius: 4px;
    color: white;
    mix-blend-mode: normal;
    border: none;
    cursor: pointer;

    :hover {
        filter: brightness(0.9);
    }

    :active {
        transform: scale(0.98);
    }
`;
