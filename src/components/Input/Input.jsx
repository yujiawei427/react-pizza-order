import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Layout = styled.div`
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: rgba(0,0,0,0.6);
  margin-bottom: 10px;
  display: block;
`;

const StyledInput = styled.input`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 18px;
  outline: none;
  color: rgba(0,0,0,0.8);
`;


const Input = ({
  label
}) => (
  <Layout>
    <Label>{label}</Label>
    <br />
    <StyledInput />
  </Layout>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,

}

export default Input;