import React from "react";
import { AddWrapper, AddLabel, AddCheckbox } from "../styles/addStyle"

export const Choice = ({ openItem, choice, checkChoice }) => {
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