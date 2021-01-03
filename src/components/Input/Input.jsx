import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorMessage from '../ErrorMessage'

const Layout = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: rgba(0,0,0,0.6);
  display: block;
`;
const Required = styled.span`
  color: red;
  font-weight: 700;
  margin-left: 0.25rem;
  display: inline-block; 
`;

const StyledInput = styled.input`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 18px;
  padding: 10px 15px;
  outline: none;
  color: rgba(0,0,0,0.8);
  width: 100%;
  margin-top: 10px;
`;

const LabelWithMessage = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    const { onChange } = this.props;

    onChange(event.target.value);

    this.setState({
      dirty: true,
    });
  }

  render() {
    const { label, required, value, validations } = this.props;

    const { dirty } = this.state;

    const error = validations.reduce((preValue, currentValue) => {
      if (currentValue.validator(value)) {
        return preValue;
      }

      return currentValue.message;
    }, undefined)

    return (
      <Layout>
        <LabelWithMessage>
          <Label>
            {label}
            {required && (<Required>*</Required>)}
          </Label>
          {(error && dirty) && (
          <ErrorMessage>
            {error}
          </ErrorMessage>)}
        </LabelWithMessage>
        <StyledInput value={value} onChange={this.handleValueChange}/>
      </Layout>
    );
  }
}

Input.defaultProps = {
  required: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool

}

export default Input;


