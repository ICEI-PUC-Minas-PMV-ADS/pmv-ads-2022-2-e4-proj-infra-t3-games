import styled from 'styled-components';

interface IBackground {
    readonly image: string;
}

export const Background = styled.div<IBackground>`
    background-image: url(${({ image }) => image});
    height: 1160px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    opacity: 0.6;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
