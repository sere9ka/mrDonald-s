import React from "react";
import styled from "styled-components";
import dbMenu from "../../fake/DBMenu";
import { ListItems } from "./listItem-components";
import BannerImg from "../../images/banner.png"

const MenuStyled =styled.main`
    backgtound-color: #ccc;
    margin-top: 80px;
`;
const SectionStyled = styled.section`
    padding: 30px;
`;
const MenuBannerStyled = styled.div`
    min-height: 210px;
    width: 100%;
    background: url(${BannerImg}) no-repeat center / cover;
`;

export const Menu = () => (
    <MenuStyled>
        <MenuBannerStyled />
        <SectionStyled>
            <h2>Бургеры</h2>
            <ListItems itemsList={dbMenu.burger}/>
        </SectionStyled>
        <SectionStyled>
            <h2>Закуски / Напитки</h2>
            <ListItems itemsList={dbMenu.other}/>
        </SectionStyled>
    </MenuStyled>
)