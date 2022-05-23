import React from "react";
import {Item, ItemName, ItemCount, ItemPrice, ItemDelete} from "../styles/orderStyle"
import { totalPriceItems } from "../functions/totalPriceItems";
import { formatCurrency } from "../functions/formatCurrency"

export const OrderItem = ({order}) => {
    return (
        <Item>
            <ItemName>{order.name}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <ItemDelete />
        </Item>
    )
}