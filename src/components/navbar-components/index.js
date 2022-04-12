import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo.svg"
import LoginImg from "../../images/sign.svg"

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;
const ImgLogo = styled.img`
    width: 50px;
`;
const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    color: white;
    border: none;
    font-size: 16px;
    line-height: 19px;
    margin-top: 3px;
    cursor: pointer;
`;
const ImgLogin = styled.img`
    
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={LogoImg} alt="logo" />
            <H1>MrDonald's</H1>
        </Logo>
        <Button>
            <ImgLogin src={LoginImg} alt="signin"  />
            <span>войти</span>
        </Button>
    </NavBarStyled>
);
    
