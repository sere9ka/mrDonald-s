import React from "react";
import { AddWrapper, AddLabel, AddCheckbox } from "../styles/addStyle"

export const Toppings = ({ toppings, checkToppings }) => {
    return (
        <>
            <h2>Дополнительно</h2>
            <AddWrapper>
                {toppings.map((item, i) => (
                    <AddLabel key={i}>
                        <AddCheckbox 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => {checkToppings(i)}}
                            />
                        {item.name}
                    </AddLabel>
                ))}
            </AddWrapper>
        </>
    )
}