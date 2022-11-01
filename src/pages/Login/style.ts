import styled from 'styled-components';

export const CadastroWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #211b23;
    padding: 45px 0;
`;

export const Form = styled.form`
    width: 775px;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 35px;
    margin-bottom: 35px;
    @media (max-width: 775px) {
        max-width: 100%;
    }
`;
