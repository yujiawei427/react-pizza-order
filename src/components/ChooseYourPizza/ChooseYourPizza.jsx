import React from 'react';
import Section from '../Section';
import styled from 'styled-components';
import Size from './Components/Size';
import Topping from './Components/Topping';

const TOPPINGS = [
  "anchovy",
  "bacon",
  "basil",
  "chili",
  "mozzarella",
  "mushroom",
  "olive",
  "onion",
  "pepper",
  "pepperoni",
  "sweetcorn",
  "tomato"
]

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

const SizeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SizeItem = styled.div`
  width: calc(100%/3 - 10px);
  margin: 20px 0;
`;

const ToppingLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ToppingItem = styled.div`
  width: calc(100%/4 - 10px);
  margin: 10px 0;
`;

class ChooseYourPizza extends React.Component {
  render() {
    const { selectedSize, onSizeSelected, sizes } = this.props;

    return (
      <Section title="Choose your pizza">
        <SubSection>
          <Title>Select the size</Title>
          <SizeLayout>
            {sizes.map((size) => (
              <SizeItem key={size.name}>
                <Size 
                  selected={selectedSize === size} 
                  percentage={size.percentage} 
                  name={size.name} 
                  onSizeSelected={() => onSizeSelected(size)}
                />
              </SizeItem>
            ))}
            
          </SizeLayout>
        </SubSection>
        <SubSection>
          <Title>Pick your toppings</Title>
          <ToppingLayout>
            {TOPPINGS.map((topping) => (
              <ToppingItem key={topping}>
                <Topping name={topping}/>
              </ToppingItem>
            ))}
          </ToppingLayout>
        </SubSection>
  </Section>
    )
  }
}


export default ChooseYourPizza;