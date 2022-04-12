import React from "react";
import LogoImg from "../../images/logo.svg"
import LoginImg from "../../images/sign.svg"
import { NavBarStyled, Logo, ImgLogo, H1, Button, ImgLogin } from "../styles/navBarStyle";

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
    
