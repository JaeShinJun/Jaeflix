import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 20px;
`;

const DotLoader = styled.div`
    height: 25vw;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: rotateDots;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @keyframes rotateDots {
        0% {
            transform: none;
        }
        50% {
            transform: rotate(0.5turn);
        }
        100% {
            transform: rotate(0.5turn);
        }
    }
`;

const Dot = styled.span`
    width: 10px;
    height: 10px;
    margin: 10px 10px;
    background-color: #48d1cc;
    border-radius: 50%;
    display: inline-block;
`;

export default () => (
    <Container>
        <DotLoader role="loader" aria-label="Loading">
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
        </DotLoader>
    </Container>
);
