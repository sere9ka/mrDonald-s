import React, { useContext } from "react";
import { Overlay, TotalPriceItem, Modal, ModalBanner, ModalBody, ModalInfoItem, ModalTitle, Price } from "../styles/modalStyle";
import { BlockButtons, ButtonPrimary } from "../system-component/button-component";
import { CountItem } from "./count-item";
import { useCount } from "../Hooks/useCount";
import { formatCurrency } from "../functions/formatCurrency"
import { totalPriceItems } from "../functions/totalPriceItems";
import { Toppings } from "./topping";
import { useToppings } from "../Hooks/useToppings";
import { useChoices } from "../Hooks/useChoices";
import { Choice } from "./choice";
import { Context } from "../functions/context";
import { ContextItem } from "../functions/context-item";

export const ModalItem = () => {
    const {
        orders: {orders, setOrders}, 
        openItem: {openItem, setOpenItem}, 
    } = useContext(Context)

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem)
    const choices = useChoices(openItem)
    let isEdit = openItem.index > -1;

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null)
        }
    }
    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    }
    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null)
        // isEdit = false
    }
    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null)
    }
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <ModalBanner img={openItem.img} />
                <ModalBody>
                    <ModalInfoItem>
                        <ModalTitle>{openItem.name}</ModalTitle>
                        <Price>{formatCurrency(openItem.price)}</Price>
                    </ModalInfoItem>
                    
                    <ContextItem.Provider value={{
                        counter,
                        toppings,
                        choices,
                        openItem
                    }}>
                        <CountItem />
                        {openItem.toppings && <Toppings />}
                        {openItem.choices && <Choice/>}
                    </ContextItem.Provider>
                    
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <BlockButtons>
                        <ButtonPrimary 
                            onClick={isEdit ? editOrder : addToOrder}
                            disabled={order.choices && !order.choice}
                        >
                            {isEdit ? 'Редактировать' : 'Добавить'}
                        </ButtonPrimary>
                    </BlockButtons>
                </ModalBody>
            </Modal>
        </Overlay>
    )
}