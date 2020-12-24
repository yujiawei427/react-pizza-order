import React from 'react';
import Section from '../Section';
import Item from './Components';

const OrderSummaryList = () => (
  <Section title="Order Summary">
    <Item 
      size={{
        name: 'Large (13")',
        price: 9.99
      }}
      toppings={[{
        name: 'bacon',
        price: 0.99,
      }, {
        name: 'chill',
        price: 0.88,
      }]}
      />

  </Section>

);

export default OrderSummaryList;