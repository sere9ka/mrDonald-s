import React from "react";
import LogoImg from "../../images/logo.svg"
import LoginImg from "../../images/sign.svg"
import { Figure, User, LogOut, NavBarStyled, Logo, ImgLogo, H1, Button, ImgLogin } from "../styles/navBarStyle";

export const NavBar = ({ authentication, logIn, logOut }) => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={LogoImg} alt="logo" />
            <H1>MrDonald's</H1>
        </Logo>
        {authentication ? 
            <User>
                <Figure>
                    <ImgLogin src={LoginImg} alt={authentication.displayName}  />
                    <figcaption>{authentication.displayName}</figcaption>
                </Figure>
                <LogOut onClick={logOut} title="Выйти">X</LogOut>
            </User>
        : 
            <Button onClick={logIn}>
                <ImgLogin src={LoginImg} alt="signin"  />
                <span>войти</span>
            </Button>
        }
    </NavBarStyled>
);
    
