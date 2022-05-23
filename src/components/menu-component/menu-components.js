import React from "react";
import styled from "styled-components";
import dbMenu from "../../fake/DBMenu";
import { ListItems } from "./listItem-components";
import { Banner } from "./banner"

const MenuStyled = styled.main`
    backgtound-color: #ccc;
    margin-top: 80px;
`;
const SectionStyled = styled.section`
    padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner />
        <SectionStyled>
            <h2>Бургеры</h2>
            <ListItems itemsList={dbMenu.burger} setOpenItem={setOpenItem}/>
        </SectionStyled>
        <SectionStyled>
            <h2>Закуски / Напитки</h2>
            <ListItems itemsList={dbMenu.other} setOpenItem={setOpenItem}/>
        </SectionStyled>
    </MenuStyled>
)