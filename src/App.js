import React from 'react';
import styled from 'styled-components';
import EnterYourDetails from './components/EnterYourDetails';
import ChooseYourPizza from './components/ChooseYourPizza';
import OrderSummaryList from './components/OrderSummaryList';

const Layout = styled.div`
  padding: 20px 30px;
`;

const PlaceOrderButton = styled.button`
  border: 0; 
  outline: 0;
  background: transparents;
  background: #98C550;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  width:100%;
  color: white;

  &:hover {
    background: #b9ea6a;
  }
`;

const SIZES = [{
  percentage: 1,
  name: `Large (13")`,
  price: 13.99,
}, {
  percentage: 0.85,
  name: `Medium (11")`,
  price: 11.99,
}, {
  percentage: 0.7,
  name: `Small (9")`,
  price: 9.99,
}];

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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedSize: SIZES[0],
        selectedTopping: []
    };

    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleChooseTopping = this.handleChooseTopping.bind(this);
  }

  handleSizeSelect(size) {
    this.setState({
      selectedSize: size,
    });
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
    const { selectedSize, selectedTopping } = this.state;

    return (
      <Layout>
      <EnterYourDetails />
      <ChooseYourPizza 
        sizes={SIZES}
        selectedSize={selectedSize}
        onSizeSelected={this.handleSizeSelect}
        onToppingSelected={this.handleChooseTopping}
        selectedTopping={selectedTopping}
        toppings={TOPPINGS}
        // onSizeSelected={(size) => this.setState({
        //   selectedSize: size,
        // })}
      />
      <OrderSummaryList 
        selectedSize={selectedSize}
        selectedTopping={selectedTopping}
      />
      <PlaceOrderButton>Place your order</PlaceOrderButton>
    </Layout>

    );
  }
}


export default App;
