import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 20;
`
const Modal = styled.div`
    position: relative;
    background-color: #fff;
    width: 600px;
    height: 600px;
`
const ModalBanner = styled.div`
    width: 100%;
    height: 200px; 
    background: ${({img}) => `url(${img})`} no-repeat center / cover;
`
const ModalBody = styled.div`
    padding: 20px 53px 43px 37px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ModalInfoItem = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ModalTitle = styled.h2`
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 53px;
`
const Price = styled.strong`
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 53px;
`
const BlockButtons = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonPrimary = styled.button`
    padding: 20px 75px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
    background: #299B01;
    border: 0;
    outline: none;
    cursor: pointer;
`

export { Overlay, Modal, ModalBanner, ModalBody, ModalInfoItem, ModalTitle, Price, BlockButtons, ButtonPrimary }