import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Topping = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  margin-bottom: 5px;
`;

const Layout = styled.div`
  margin-bottom: 20px;
`;

const Name = styled.div`
  text-transform: capitalize;
`;

const Size = styled.h3`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 300;
`;

const ToppingsUnorderedList = styled.ul`
  margin: 0;
`;

const Item = ({
  size,
  toppings,
}) => (
  <Layout>
    <Size>
      <Name>{size.name}</Name>
      <div>${size.price}</div>
    </Size>
    <ToppingsUnorderedList>
      {toppings.map((topping) => (
        <li key={topping.name}>
          <Topping>
            <Name>{topping.name}</Name>
            <div>${topping.price}</div>
          </Topping>
        </li>
      ))}
    </ToppingsUnorderedList>
  </Layout>
);

Item.defaultProps = {
  topping: [],
};

Item.propTypes = {
  size: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    percentage: PropTypes.number,
  }).isRequired,
  toppings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired).isRequired,
};

export default Item;