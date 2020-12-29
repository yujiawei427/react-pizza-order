import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Layout = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: rgba(0,0,0,0.6);
  display: block;
`;

const StyledInput = styled.input`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 15px;
  outline: none;
  padding: 10px 15px;
  color: rgba(0,0,0,0.8);
  margin-top: -10px;
`;

const Required = styled.span`
  color: red;
  font-weight: 700;
  margin-left: 0.25rem;
  display: inline-block; 
`;

const Input = ({
  label,
  required
}) => (
  <Layout>
    <Label>
      {label}
      {required && (<Required>*</Required>)}
    </Label>
    <br />
    <StyledInput />
  </Layout>
);

Input.defaultProps = {
  required: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool

}

export default Input;