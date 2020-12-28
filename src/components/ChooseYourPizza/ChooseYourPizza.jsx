import React from 'react';
import Section from '../Section';
import styled from 'styled-components';
import Size from './Components/Size';
import Topping from './Components/Topping';

const TOPPINGS = [
  {name: "anchovy",
  price: 0.9,},
  {name: "bacon",
  price: 0.8,},
  {name: "basil",
  price: 0.7,},
  {name: "chili",
  price: 0.6,},
  {name: "mozzarella",
  price: 0.5,},
  {name: "mushroom",
  price: 0.4,},
  {name: "olive",
  price: 0.3,},
  {name: "onion",
  price: 0.2,},
  {name: "pepper",
  price: 0.1,},
  {name: "pepperoni",
  price: 0.99,},
  {name: "sweetcorn",
  price: 0.88,},
  {name: "tomato",
  price: 0.77,}]

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
  constructor(props) {
    super(props);

    this.state = {
      selectedTopping: []
    };

    this.handleChooseTopping = this.handleChooseTopping.bind(this);
  }

  handleChooseTopping(topping) {
    this.setState((prevState) => {
      const { selectedTopping } = prevState;

      if (selectedTopping.includes(topping)) {
        return {
          selectedTopping: selectedTopping.filter((chosenTopping) => chosenTopping !== topping),
        };
      }

      return {
        selectedTopping: [
          ...selectedTopping,
          topping,
        ],
      };
    })
  }

  render() {
    const { selectedSize, onSizeSelected, sizes } = this.props;
    const { selectedTopping } = this.state;

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
              <ToppingItem key={topping.name}>
                <Topping name={topping.name}
                  selected = {selectedTopping.includes(topping)}
                  onToppingSelected={() => this.handleChooseTopping(topping)}
                  />
              </ToppingItem>
            ))}
          </ToppingLayout>
        </SubSection>
    </Section>
    )
  }
}


export default ChooseYourPizza;