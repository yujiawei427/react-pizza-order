import React from 'react';
import PropTypes from 'prop-types';
import pizza from './assets/pizza.svg';
import styled from 'styled-components';

const Pizza = styled.img`
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  margin-right: 10px;
`;

const Layout = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;


const Name = styled.div`
  font-size: 16px;
  color: rgba(0,0,0,0.7);
`;

const Size = ({
  percentage,
  name,
}) => {
  const size = 60 * percentage;

  return (
  <Layout>
    <Pizza size={size} src={pizza} alt={name}/>
    <Name>{name}</Name>
  </Layout>);
};

Size.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Size;

