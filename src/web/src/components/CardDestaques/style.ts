import styled from 'styled-components';

export const CardWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
`;

export const CardImage = styled.img`
    opacity: 0.5;
    border-radius: 5px;
`;

export const CardInfo = styled.div`
    padding: 10px 20px;
    position: absolute;
    color: #ffffff;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const CardTitle = styled.strong`
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const CardText = styled.span`
    display: block;
    line-height: 21px;
    font-size: 18px;
`;
