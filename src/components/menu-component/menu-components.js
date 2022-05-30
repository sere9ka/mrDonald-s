import React from "react";
import styled from "styled-components";
import { ListItems } from "./listItem-components";
import { Banner } from "./banner"
import { Preloader } from "../system-component/preloader";

const MenuStyled = styled.main`
    margin-left: 380px;
    background-color: #ccc;
    margin-top: 80px;
    heigth: 100%;
`;
const SectionStyled = styled.section`
    padding: 30px;
`;
const PreloaderWrap = styled.div`
    position: relative;
    width: 100%;
    heigth: 100%;

`

export const Menu = ({ setOpenItem, dbMenu }) => {

    return (
        <MenuStyled>
            <Banner />
            { dbMenu ? 
                <> 
                        <SectionStyled>
                            <h2>Бургеры</h2>
                            <ListItems itemsList={dbMenu.burger} setOpenItem={setOpenItem}/>
                        </SectionStyled>
                        <SectionStyled>
                            <h2>Закуски / Напитки</h2>
                            <ListItems itemsList={dbMenu.other} setOpenItem={setOpenItem}/>
                        </SectionStyled>
                    
                </>
                :
                <PreloaderWrap>
                    <Preloader customText="Загрузка..."/>
                </PreloaderWrap>
            }
        </MenuStyled>
    )
}