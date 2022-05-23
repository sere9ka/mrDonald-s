import React from "react";
import { BlockButtons, ButtonPrimary } from "../system-component/button-component";
import { OrderItem } from "./order-item";
import {OrderBlock, OrderTitle, OrderComponent, OrderList, EmptyList, Total, TextTotal, CountTotal, PriceTotal} from "../styles/orderStyle"
import { totalPriceItems } from "../functions/totalPriceItems";
import { formatCurrency } from "../functions/formatCurrency";

export const Order = ({orders, setOrders}) => {
    const total = orders.reduce((result, order) => 
        totalPriceItems(order) + result, 0)
    const totalCount = orders.reduce((result, order) => 
    order.count + result, 0)
    return (
        <OrderBlock>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderComponent>
                {orders.length ? 
                    <OrderList>
                        {orders.map(order =>
                            <OrderItem order={order} key={order.name + order.id}/>
                        )}
                    </OrderList> :
                    <EmptyList>Вы еще ничего не выбрали</EmptyList>  
                }
            </OrderComponent>
            <Total>
                <TextTotal>Итого</TextTotal>
                <div>
                    <CountTotal>{totalCount}</CountTotal>
                    <PriceTotal>{formatCurrency(total)}</PriceTotal>
                </div>
            </Total>
            <BlockButtons>
                <ButtonPrimary>Оформить</ButtonPrimary>
            </BlockButtons>
        </OrderBlock>
    )
}
