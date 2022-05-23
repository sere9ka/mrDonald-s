import React from "react";
import styled from "styled-components";
import { Overlay, Modal, ModalBanner, ModalBody, ModalInfoItem, ModalTitle, Price, BlockButtons, ButtonPrimary } from "../styles/modalStyle";

export const ModalItem = ({ openItem, setOpenItem }) => {
    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null)
        }
    }
    if (!openItem) {
        return null
    } else
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
                        <ButtonPrimary>Добавить</ButtonPrimary>
                    </BlockButtons>
                </ModalBody>
            </Modal>
        </Overlay>
    )
}