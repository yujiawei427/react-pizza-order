import React from 'react';
import { shallow } from 'enzyme';
import Topping from './Topping';

describe('<Topping />', () => {
  let wrapper;

  let onSelect;

  beforeEach(() => {
    onSelect = jest.fn();

    wrapper = shallow((
      <Topping 
      name="bacon"
      selected={true}
      onToppingSelected={onSelect}
      />
    ))
  });

  it('passes selected to styled-component', () => {
    expect(wrapper.find('[data-testid="topping"]').prop('selected')).toBe(true);
  });

  it('does not pass selected to styled-component when not selected', () => {
    wrapper.setProps({
      selected: false,
    })
    expect(wrapper.find('[data-testid="topping"]').prop('selected')).toBeFalsy();
  }); 

  it('calls onChoose on element click', () => {
    wrapper.simulate('click');

    expect(onSelect).toBeCalled();
  });

  it('renders name', () => {
    expect(wrapper.find('[data-testid="name"]').text()).toBe('bacon');
  });
})  