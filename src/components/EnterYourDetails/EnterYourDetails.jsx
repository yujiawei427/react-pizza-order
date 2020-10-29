import React from 'react';
import Section from '../Section';
import styled from 'styled-components';
import Input from '../Input';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  width: calc(100%/3 - 20px);
  margin-bottom: 20px;
`;

const EnterYourDetails = () => (
  <Section title="Enter your details">
    <Layout>
      <Item>
        <Input label="NAME" />
      </Item>
      <Item>
        <Input label="EMAIL" />
      </Item>
      <Item>
        <Input label="CONFIRM" />
      </Item>
      <Item>
        <Input label="ADDRESS" />
      </Item>
      <Item>
        <Input label="POSTCODE" />
      </Item>
      <Item>
        <Input label="CONTACT NUMBER" />
      </Item>
    </Layout>
  </Section>
);

export default EnterYourDetails;