import styled from "styled-components";

export const NavBarStyled = styled.header`
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
export const Logo = styled.div`
    display: flex;
    align-items: center;
`;
export const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;
export const ImgLogo = styled.img`
    width: 50px;
`;
export const Button = styled.button`
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
export const ImgLogin = styled.img`
    
`;