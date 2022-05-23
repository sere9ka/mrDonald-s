import React from "react";
import { BlockButtons, ButtonPrimary } from "../system-component/button-component";
import { OrderItem } from "./order-item";
import {OrderBlock, OrderTitle, OrderComponent, OrderList, EmptyList, Total, TextTotal, CountTotal, PriceTotal} from "../styles/orderStyle"

export const Order = ({orders, setOrders}) => {
    let total = 0
    orders.forEach(order => {
        total += +order.price
    });
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
                    <CountTotal>{orders.length}</CountTotal>
                    <PriceTotal>{total.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</PriceTotal>
                </div>
            </Total>
            <BlockButtons>
                <ButtonPrimary>Оформить</ButtonPrimary>
            </BlockButtons>
        </OrderBlock>
    )
}
