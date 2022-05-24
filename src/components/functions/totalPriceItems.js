export const totalPriceItems = order => {
    const countTopping = order.topping.filter(item => item.checked).length;

    const priceTopping = (order.price * 0.1) * countTopping;

    return (order.price + priceTopping) * order.count;
}