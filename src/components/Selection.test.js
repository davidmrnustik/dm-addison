import React from 'react';
import { Selection } from './Selection';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import configureStore from '../store/configureStore';

const store = configureStore();

describe('Selection component', () => {
  const props = {
    id: 'SEL_1',
    market: 'MKT_1',
    selection: {
      id: 'SEL_1',
      name: 'Real Madrid',
      price: 1.23
    },
    betSlip: {
      selection: ['SEL_1', 'SEL_2'],
      market: ['MKT_1', 'MKT_2']
    }
  };
  const wrapper = mount(<Selection {...props}/>, {
              context: { store },
              childContextTypes: { store: PropTypes.object.isRequired }
  });

  it('renders data provided', () => {
    expect(wrapper.find('button').text()).toEqual('Real Madrid1.23');
  });

  it('simulates click on button and check if button has green background color with white text', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('.button-selected').html()).toEqual('<button class=\"button-selected\" style=\"color: white; background-color: rgb(92, 184, 92); border: 0px;\">Real Madrid<br>1.23</button>');
  });
})