import styled from 'styled-components';

const StyledButton = styled.button`
    width: 340px;
    height: 64px;
    font-family: 'Lexend Deca';
    font-size: 30px;
    color: #c2c2c2;
    background: #7800b3;
    border-radius: 20px;
    border: 1px solid #000000;
    cursor: pointer;
    align-self: center;

    :hover {
        filter: brightness(0.9);
    }

    :active {
        transform: scale(0.98);
    }
`;

export default StyledButton;
