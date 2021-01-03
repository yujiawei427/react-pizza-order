import React from 'react';
import Section from '../Section';
import styled from 'styled-components';
import Input from '../Input';
import { isNotEmpty } from '../../utils/validator'

const validations = [{
  validator: isNotEmpty,
  message: "Name is required",
}];

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  width: calc(100%/3 - 20px);
  margin-bottom: 10px;
`;

class EnterYourDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(value) {
    this.setState({
      name: value,
    })
  }

  render() {
    return (
      <Section title="Enter your details">
      <Layout>
        <Item>
          <Input 
            required={true} 
            label="NAME" 
            validations={validations} 
            value={this.state.name || ''}
            onChange={(value) => this.handleValueChange(value)}
          />
        </Item>
        {/* <Item>
          <Input required label="EMAIL" />
        </Item>
        <Item>
          <Input required label="CONFIRM EMAIL" />
        </Item>
        <Item>
          <Input required label="ADDRESS" />
        </Item>
        <Item>
          <Input required label="POSTCODE" />
        </Item>
        <Item>
          <Input required label="CONTACT NUMBER" />
        </Item> */}
      </Layout>
    </Section>
    )
  }
}

export default EnterYourDetails;