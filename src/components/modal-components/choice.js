import React, { useContext } from "react";
import { AddWrapper, AddLabel, AddCheckbox } from "../styles/addStyle"
import { ContextItem } from "../functions/context-item";

export const Choice = () => {
    const {openItem, choices: { choice, checkChoice } } = useContext(ContextItem)
    return (
        <>
            <h2>Выберите: </h2>
            <AddWrapper>
                {openItem.choices.map((item, i) => (
                    <AddLabel key={i}>
                        <AddCheckbox 
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={checkChoice}
                            />
                        {item}
                    </AddLabel>
                ))}
            </AddWrapper>
        </>
    )
}