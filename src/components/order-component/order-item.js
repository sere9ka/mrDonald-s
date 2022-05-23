import React from "react";
import styled from "styled-components";
import {Item, ItemName, ItemCount, ItemPrice, ItemDelete} from "../styles/orderStyle"

export const OrderItem = () => {
    return (
        <Item>
            <ItemName>JS Burger</ItemName>
            <ItemCount>1</ItemCount>
            <ItemPrice>350₽</ItemPrice>
            <ItemDelete />
        </Item>
    )
}