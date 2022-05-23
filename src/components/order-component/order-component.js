import React from "react";
import styled from "styled-components";
import { BlockButtons, ButtonPrimary } from "../system-component/button-component";
import { OrderItem } from "./order-item";
import {OrderBlock, OrderTitle, OrderList, Total, TextTotal, CountTotal, PriceTotal} from "../styles/orderStyle"

export const Order = () => {
    return (
        <OrderBlock>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderList>
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </OrderList>
            <Total>
                <TextTotal>Итого</TextTotal>
                <div>
                    <CountTotal>5</CountTotal>
                    <PriceTotal>850P</PriceTotal>
                </div>
            </Total>
            <BlockButtons>
                <ButtonPrimary>Оформить</ButtonPrimary>
            </BlockButtons>
        </OrderBlock>
    )
}
