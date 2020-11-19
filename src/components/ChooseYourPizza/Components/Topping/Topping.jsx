import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import anchovy from './assets/anchovy.svg';
import bacon from './assets/bacon.svg';
import basil from './assets/basil.svg';
import chili from './assets/chili.svg';
import mozzarella from './assets/mozzarella.svg';
import mushroom from './assets/mushroom.svg';
import olive from './assets/olive.svg';
import onion from './assets/onion.svg';
import pepper from './assets/pepper.svg';
import pepperoni from './assets/pepperoni.svg';
import sweetcorn from './assets/sweetcorn.svg';
import tomato from './assets/tomato.svg';

const Layout = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.05);
  cursor: pointer;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  background-color: #e6e6e6;
  box-sizing: content-box;
`;

const Name = styled.div`
  padding-left: 15px;
  font-weight: 250;
  text-transform: capitalize;
`;

const TOPPING_IMAGE = {
  anchovy,
  bacon,
  basil,
  chili,
  mozzarella,
  mushroom,
  olive,
  onion,
  pepper,
  pepperoni,
  sweetcorn,
  tomato
};

const Topping = (
  {
    name,
  }) => {
    const image = TOPPING_IMAGE[name];
    return (
      <Layout>
        <Image src={image} />
        <Name>{name}</Name>
      </Layout>);
  };

Topping.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Topping;