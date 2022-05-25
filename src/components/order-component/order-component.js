import React from "react";
import { BlockButtons, ButtonPrimary } from "../system-component/button-component";
import { OrderItem } from "./order-item";
import {OrderBlock, OrderTitle, OrderComponent, OrderList, EmptyList, Total, TextTotal, CountTotal, PriceTotal} from "../styles/orderStyle"
import { totalPriceItems } from "../functions/totalPriceItems";
import { formatCurrency } from "../functions/formatCurrency";

export const Order = ({orders, setOrders, setOpenItem, authentication, logIn, logOut }) => {
    const deleteItem = (index) => {
        const newOrders = orders.filter((item, i) => i !== index);
        setOrders(newOrders)
    }
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
                        {orders.map((order, index) =>
                            <OrderItem 
                                order={order} 
                                key={index + order.name}
                                deleteItem={deleteItem}
                                index={index}
                                setOpenItem={setOpenItem}
                            />
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
                <ButtonPrimary onClick={() => {authentication ? console.log('click') : logIn()}}>Оформить</ButtonPrimary>
            </BlockButtons>
        </OrderBlock>
    )
}
