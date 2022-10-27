import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 75px;
    padding: 0 20px;
    color: #d9d9d9;
    font-size: 30px;
    font-family: 'Lexend Deca';
    text-align: center;
    background: rgba(217, 217, 217, 0.29);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    ::placeholder {
        color: #d9d9d9;
    }
`;

export default StyledInput;
