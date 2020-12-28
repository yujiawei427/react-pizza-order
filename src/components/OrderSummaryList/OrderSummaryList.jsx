import React from 'react';
import Section from '../Section';
import Item from './Components';

class OrderSummaryList extends React.Component {
  render() {
    const { selectedSize, selectedTopping } = this.props;
  
  return (
    <Section title="Order Summary">
      <Item 
        size={selectedSize}
        toppings={selectedTopping}
      />
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