import React from "react";
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

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
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
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    {openItem.choices && <Choice {...choices} openItem={openItem}/>}
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