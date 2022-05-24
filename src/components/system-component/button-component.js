import styled from "styled-components";

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
    &:disabled {
        color: #bbb;
        background-color: #ccc;
        border-color: #aaa;
    }
`

export { BlockButtons, ButtonPrimary }