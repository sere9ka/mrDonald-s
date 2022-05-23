import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const CountInput = styled.input`
    margin-left: 10px;
    margin-right: 10px;
    width: 50px;
    font-size: 20px;
    text-align: center;
`;
const ButtonCount = styled.button`
    background: transparent;
    width: 20px;
    height: 20px;
`

export const CountItem = ({count, setCount, onChange }) => {
    return (
        <CountWrapper>
            <h3>Количество</h3>
            <div>
                <ButtonCount disabled={count <= 1} onClick={() => {setCount(count - 1)}}>-</ButtonCount>
                <CountInput type='number' min='1' max='99' value={count < 1 ? 1 : count >= 99 ? count = 99 : count} onChange={onChange}/>
                <ButtonCount disabled={count >= 99} onClick={() => {setCount(count + 1)}}>+</ButtonCount>
            </div>
        </CountWrapper>
        
    )
}