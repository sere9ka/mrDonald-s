import React from "react";
import styled from "styled-components";

const ToppingWrapper = styled.div`
    max-width: 500px;
    margin: 20px auto;
    column-count: 2;
    column-gap: 5px;
`
const ToppingLabel = styled.label`
    cursor: pointer;
    display: block;
`
const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin: 5px;
`
export const Toppings = ({ toppings, checkToppings }) => {
    return (
        <>
            <h2>Добавки</h2>
            <ToppingWrapper>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => {checkToppings(i)}}
                            />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrapper>
        </>
    )
}