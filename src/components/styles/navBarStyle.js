import styled from "styled-components";

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
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
`;
const ImgLogin = styled.img`
    
`;
const User = styled.div`
    display: flex;
    align-items: center;
`
const LogOut = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`
const Figure = styled.figure`
    text-align: center;
    margin: 0 20px;
    cursor: pointer;
`

export { ImgLogin, Button, ImgLogo, H1, Logo, NavBarStyled, Figure, User, LogOut }