import React from "react";
import styled from "styled-components";
import { ListItems } from "./listItem-components";
import { Banner } from "./banner"
import { useFetch } from "../Hooks/useFetch";
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
export const Menu = () => {
    // const { openItem: { setOpenItem } } = useContext(Context)
    const res = useFetch();
    const dbMenu = res.response;
    return (
        <MenuStyled>
            <Banner />
            { dbMenu ? 
                <> 
                    <SectionStyled>
                        <h2>Бургеры</h2>
                        <ListItems itemsList={dbMenu.burger}/>
                    </SectionStyled>
                    <SectionStyled>
                        <h2>Закуски / Напитки</h2>
                        <ListItems itemsList={dbMenu.other}/>
                    </SectionStyled>
                </>
                : res.error ?
                <div>Ошибка при загрузке</div>
                :
                <PreloaderWrap>
                    <Preloader customText="Загрузка..."/>
                </PreloaderWrap>
            }
        </MenuStyled>
    )
}