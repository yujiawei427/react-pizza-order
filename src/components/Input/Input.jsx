import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Layout = styled.div`
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
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