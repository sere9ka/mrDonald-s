import { useState } from "react";

const getToppings = (toppings) => {
    if (toppings !== undefined) {
        return toppings.map(item => ({
            name: item,
            checked: false
        }))
    } else {
        return []
    }
}

export const useToppings = (openItem) => {
    const [toppings, setToppings] = useState(getToppings(openItem.toppings))

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            const newItem = item
            if (index === i) {
                newItem.checked = !newItem.checked
            }
            return newItem
        }))
    }

    return {toppings, checkToppings}
}