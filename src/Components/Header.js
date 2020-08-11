import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10p;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid
        ${(props) => (props.current ? "#3498db" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`;

const Logo = styled.div`
    color: #e50914;
    perspective: 1000px;
    perspective-origin: 50% 0;
    font-size: 3em;
    display: inline-flex;
`;

const LogoLetter = styled.span`
    font-family: impact;
    display: block;
    padding-top: 6px;
    &:nth-child(1) {
        margin-left: 10px;
        transform-origin: 33.33333% 200%;
        font-size: 1.035em;
        transform: scale(65.9, 1) rotatey(89.5deg);
    }
    &:nth-child(2) {
        transform-origin: 25% 200%;
        font-size: 0.96em;
        transform: scale(75.9, 1) rotatey(89.5deg);
    }
    &:nth-child(3) {
        transform-origin: 0% 200%;
        font-size: 0.915em;
        transform: scale(85.9, 1) rotatey(89.5deg);
    }
    &:nth-child(4) {
        transform-origin: 50%Infinity 200%;
        font-size: 0.85em;
        transform: scale(1, 1) translatey(0%);
    }
    &:nth-child(5) {
        transform-origin: 100% 200%;
        font-size: 0.915em;
        transform: scale(85.9, 1) rotatey(-89.5deg);
    }
    &:nth-child(6) {
        transform-origin: 75% 200%;
        font-size: 0.96em;
        transform: scale(75.9, 1) rotatey(-89.5deg);
    }
    &:nth-child(7) {
        margin-right: 10px;
        transform-origin: 66.66667% 200%;
        font-size: 1.035em;
        transform: scale(65.9, 1) rotatey(-89.5deg);
    }
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Link to="/">
                <Logo>
                    <LogoLetter>J</LogoLetter>
                    <LogoLetter>A</LogoLetter>
                    <LogoLetter>E</LogoLetter>
                    <LogoLetter>F</LogoLetter>
                    <LogoLetter>L</LogoLetter>
                    <LogoLetter>I</LogoLetter>
                    <LogoLetter>X</LogoLetter>
                </Logo>
            </Link>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));
