import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 20px;
`;

export const StyledInput = styled.input`
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

    :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 60px #565258 inset;
        -webkit-text-fill-color: #d9d9d9 !important;
    }
`;

export const ErrorMessage = styled.span`
    text-align: center;
    color: #d00c23;
    font-family: 'Inter';
    font-size: 18px;
`;
