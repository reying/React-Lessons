
export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = number => number.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});