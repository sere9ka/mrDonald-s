import React, { useContext } from "react";
import styled from "styled-components";
import { Overlay } from "../styles/modalStyle";
import { Total } from "../styles/orderStyle";
import { OrderTitle, PriceTotal } from "../styles/orderStyle";
import {  BlockButtons, ButtonPrimary  } from "../system-component/button-component";
import { projection } from "../functions/projection";
import { totalPriceItems } from "../functions/totalPriceItems";
import { formatCurrency } from "../functions/formatCurrency";
import { Context } from "../functions/context";

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;
const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name)],
    choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = ( dataBase, orders, authentication ) => {
    const newOrder = orders.map(projection(rulesData))
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        orders: newOrder,
    })
}

export const OrderConfirm = () => {
    const {
        firebaseDatabase,
        orders: {orders, setOrders}, 
        auth: { authentication },
        orderConfirm: { setOpenOrderConfirm }
    } = useContext(Context)

    const dataBase = firebaseDatabase()
    const total = orders.reduce((result, order) => 
        totalPriceItems(order) + result, 0)

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <PriceTotal>{formatCurrency(total)}</PriceTotal>
                </Total>
                <BlockButtons>
                    <ButtonPrimary onClick={() => {
                        sendOrder(dataBase, orders, authentication)
                        setOrders([])
                        setOpenOrderConfirm(false)
                    }}>
                        Подтвердить заказ
                    </ButtonPrimary>
                </BlockButtons>
            </Modal>
        </Overlay>
    )
}