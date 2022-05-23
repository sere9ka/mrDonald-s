import styled from "styled-components";
import Trash from "../../images/Trash.svg"

const OrderBlock = styled.aside`
    position: fixed;
    top: 80px;
    left: 0;
    background: #fff;
    padding: 23px 14px 23px 20px;
    max-width: 380px;
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const OrderTitle = styled.h2`
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 68px;
    text-align: center;
`
const OrderList = styled.ul`
    flex-grow: 1;
`;
const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 63px;
`;
const TextTotal = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    
`;
const CountTotal = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`;
const PriceTotal = styled.strong`
    margin-rigth: 20px;
    margin-left: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 27px;
`
const ItemName = styled.h3`
    max-width: 50%;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`;
const ItemCount = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`;
const ItemPrice = styled.strong`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
`;
const ItemDelete = styled.button`
    height: 24px;
    width: 24px;
    background: url(${Trash}) no-repeat center / cover;
`;

export {OrderBlock, OrderTitle, OrderList, Total, TextTotal, CountTotal, PriceTotal, Item, ItemName, ItemCount, ItemPrice, ItemDelete}