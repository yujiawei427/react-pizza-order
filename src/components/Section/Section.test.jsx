import { shallow } from 'enzyme';
import React from 'react';
import Section from './Section';


describe('<Section />', () => {
  let wrapper;

  beforeAll(() => {
    
  });

  beforeEach(() => {
    wrapper = shallow(
      <Section title="Title">
        Hello World
      </Section>
    );
  });

  afterEach(() => {

  });

  afterAll(() => {

  });

  it('renders title', () => {
    expect(wrapper.find("[data-testid='title']").text()).toBe('Title');
  });

  it('renders children', () => {
    expect(wrapper.find("[data-testid='children']").text()).toBe('Hello World');
  });
});