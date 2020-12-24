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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSize: undefined,
    };

    this.handleSizeSelect = this.handleSizeSelect.bind(this);
  }

  handleSizeSelect(size) {
    this.setState({
      selectedSize: size,
    });
  }

  render() {
    const { selectedSize } = this.state;

    return (
      <Layout>
      <EnterYourDetails />
      <ChooseYourPizza 
        sizes={SIZES}
        selectedSize={selectedSize}
        onSizeSelected={this.handleSizeSelect}
        // onSizeSelected={(size) => this.setState({
        //   selectedSize: size,
        // })}
      />
      <OrderSummaryList />
      <PlaceOrderButton>Place your order</PlaceOrderButton>
    </Layout>

    )
  }
}


export default App;
