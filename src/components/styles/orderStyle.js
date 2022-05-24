import styled from "styled-components";
import Trash from "../../images/Trash.svg"

const OrderBlock = styled.aside`
    position: fixed;
    top: 80px;
    left: 0;
    background: #fff;
    padding: 23px 14px 23px 20px;
    width: 380px;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 3px 4px 5px rgba(0,0,0,.25);
`
const OrderTitle = styled.h2`
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 68px;
    text-align: center;
`
const OrderComponent = styled.div`
    flex-grow: 1;
`
const EmptyList = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
`
const OrderList = styled.ul`
    
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
    flex-wrap: wrap;
    align-items: center;
    margin-top: 27px;
    cursor: pointer;
`
const ItemTopping = styled.p`
    width: 100%;
    font-size: 14px;
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

export {OrderBlock, OrderTitle, EmptyList, OrderComponent, OrderList, Total, TextTotal, CountTotal, PriceTotal, Item, ItemTopping, ItemName, ItemCount, ItemPrice, ItemDelete}