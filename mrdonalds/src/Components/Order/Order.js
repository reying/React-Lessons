import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondoryFunction';

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 0 40px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 50px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders }) => {

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map(order => <OrderListItem order={order}/>)}
        </OrderList> :
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  )
};