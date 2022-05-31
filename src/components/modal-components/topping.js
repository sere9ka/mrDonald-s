import React, { useContext } from "react";
import { AddWrapper, AddLabel, AddCheckbox } from "../styles/addStyle"
import { ContextItem } from "../functions/context-item";

export const Toppings = () => {
    const { toppings: { toppings, checkToppings }} = useContext(ContextItem)
    
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