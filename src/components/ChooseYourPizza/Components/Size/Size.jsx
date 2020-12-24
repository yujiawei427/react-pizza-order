import React from 'react';
import PropTypes from 'prop-types';
import pizza from './assets/pizza.svg';
import styled, { css } from 'styled-components';

const Pizza = styled.img`
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  margin-right: 10px;
  box-sizing: content-box;
  border: 2px solid transparent;
  border-radius: 50%;
  padding: 2px;


  ${({ selected }) => selected && css` 
        border-color: rgb(221, 221, 221);
      `}
  /* ${(props) => {
    if (props.selected) {
      return css` 
        border-color: rgb(221, 221, 221);
      `;
    };
  }} */
  `;

//button原因：div无法用tab被选中操作, accessibility!
const Layout = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: 0;
`;


const Name = styled.div`
  font-size: 16px;
  color: rgba(0,0,0,0.7);

  ${({ selected }) => selected && css`
      color: #1a98e1;
      `}
  /* ${(props) => {
    if (props.selected) {
      return css` 
        color: #1a98e1;
      `;
    };
  }} */
`;

//stable conponent必须这么写
class Size extends React.Component {  
  render() {
    const { percentage, name, selected, onSizeSelected} = this.props;
    
    const size = 60 * percentage;

    return (
    <Layout
      onClick = {onSizeSelected} //onClick = {() => onSizeSelected()}
    >
      <Pizza size={size} src={pizza} alt={name} selected={selected}/>
      <Name selected={selected}>{name}</Name>
    </Layout>
    );
  }
}

// const Size = ({
//   percentage,
//   name,
// }) => {
//   const size = 60 * percentage;

//   return (
//   <Layout>
//     <Pizza size={size} src={pizza} alt={name}/>
//     <Name>{name}</Name>
//   </Layout>);
// };

Size.defaultProps = {
  selected: false,
};

Size.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onSizeSelected: PropTypes.func.isRequired,

};

export default Size;

