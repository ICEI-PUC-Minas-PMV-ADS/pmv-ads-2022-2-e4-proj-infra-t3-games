import styled from 'styled-components';

import cod from '../../assets/img/cod.jpg';

export const Background = styled.div`
    background-image: url(${cod});
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
