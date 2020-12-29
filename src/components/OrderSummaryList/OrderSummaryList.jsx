import React from 'react';
import Section from '../Section';
import Item from './Components';
import styled from 'styled-components';

const Total = styled.div`
 text-align: right;
 font-size: 18px;
 font-weight: 300;
`;

const priceSummary = (size, toppings) => {
  const summary = toppings.reduce(((total, topping) => (
    total + topping.price
  )), size.price);

  return summary;
};

class OrderSummaryList extends React.Component {

  
  render() {
    const { selectedSize, selectedTopping } = this.props;
  
  return (
    <Section title="Order Summary">
      <Item 
        size={selectedSize}
        toppings={selectedTopping}
      />
      <hr />
      <Total>
        {`Total: $${priceSummary(selectedSize, selectedTopping).toFixed(2)}`}
      </Total>
    </Section>
  )}
}

// const OrderSummaryList = ({
//   selectedSize
// }) => (
//   <Section
//     title="Order summary"
//   >
//     <Item 
//       size={selectedSize}
//       toppings={[{
//         name: 'bacon',
//         price: 0.99,
//       }, {
//         name: 'chill',
//         price: 0.88,
//       }]}
//     />
//   </Section>
// );

export default OrderSummaryList;