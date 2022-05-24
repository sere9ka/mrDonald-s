import React, { useRef } from "react";
import {Item, ItemTopping, ItemName, ItemCount, ItemPrice, ItemDelete} from "../styles/orderStyle"
import { totalPriceItems } from "../functions/totalPriceItems";
import { formatCurrency } from "../functions/formatCurrency"

export const OrderItem = ({order, deleteItem, index, setOpenItem}) => {

    const refDeleteButton = useRef(null)
    const toppings = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ')
    const countItem = order.count
    return (
        <Item onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index, countItem})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <ItemDelete ref={refDeleteButton} onClick={() => {deleteItem(index)}} />
            {toppings && <ItemTopping>Дополнительно: {toppings}</ItemTopping>}
        </Item>
    )
}