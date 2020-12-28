import React from 'react';
import PropTypes from 'prop-types';
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
import styled, { css } from 'styled-components';

const Layout = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.05);
  cursor: pointer;

  ${({ selected }) => selected && css` 
        background-color: #1a98e1;
  `}

  /* ${(props) => {
    if (props.selected) {
      return css` 
        border-color: #1a98e1;
      `;
    };
  }} */
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

  ${({ selected }) => selected && css` 
        color: white;
  `}
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

class Topping extends React.Component {
  render () {
    const {name, selected, onToppingSelected} = this.props;
    const image = TOPPING_IMAGE[name];

    return (
      <Layout 
        onClick={onToppingSelected} 
        selected={selected}>
        <Image src={image} />
        <Name selected={selected}>{name}</Name>
      </Layout>)
  }
}

Topping.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Topping;