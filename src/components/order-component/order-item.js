import React from "react";
import {Item, ItemName, ItemCount, ItemPrice, ItemDelete} from "../styles/orderStyle"

export const OrderItem = ({order}) => {
    return (
        <Item>
            <ItemName>{order.name}</ItemName>
            <ItemCount>1</ItemCount>
            <ItemPrice>{order.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</ItemPrice>
            <ItemDelete />
        </Item>
    )
}