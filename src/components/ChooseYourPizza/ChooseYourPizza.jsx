import React from 'react';
import Section from '../Section';
import styled from 'styled-components';
import Size from './Components/Size/Size';

const SubSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: #6E7790;
  font-size: 16px;
  position: relative;
  margin: 0;
  margin-bottom: 10px;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const SizeItem = styled.div`
  width: calc(100%/3);
  justify-content: space-between;
  margin: 20px 0;
`;


const ChooseYourPizza = () => (
  <Section title="Choose your pizza">
    <SubSection>
      <Title>Select the size</Title>
      <Layout>
        <SizeItem>
          <Size percentage={1} name={`Large (13")`}/>
        </SizeItem>
        <SizeItem>
          <Size percentage={0.85} name={`Medium (11")`}/>
        </SizeItem>
        <SizeItem>
          <Size percentage={0.7} name={`Small (9")`}/>
        </SizeItem>
      </Layout>
    </SubSection>
    <SubSection>
      <Title>Pick your toppings</Title>
      <div>Toppings selection</div>
    </SubSection>
  </Section>
);

export default ChooseYourPizza;