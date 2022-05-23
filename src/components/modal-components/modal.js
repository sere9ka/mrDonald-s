import React from "react";
import { Overlay, Modal, ModalBanner, ModalBody, ModalInfoItem, ModalTitle, Price } from "../styles/modalStyle";
import { BlockButtons, ButtonPrimary } from "../system-component/button-component";

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null)
        }
    }
    const order = {
        ...openItem
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
                        <Price>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Price>
                    </ModalInfoItem>
                    <BlockButtons>
                        <ButtonPrimary onClick={addToOrder}>Добавить</ButtonPrimary>
                    </BlockButtons>
                </ModalBody>
            </Modal>
        </Overlay>
    )
}