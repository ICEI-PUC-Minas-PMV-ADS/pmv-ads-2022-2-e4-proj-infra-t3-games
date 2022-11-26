import styled from 'styled-components';

export const StyledForm = styled.form`
    width: 775px;
    display: flex;
    flex-direction: column;
    justify-self: center;
    gap: 35px;
    margin-bottom: 35px;
    @media (max-width: 775px) {
        width: 100%;
    }
`;
