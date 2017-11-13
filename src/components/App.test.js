import React from 'react';
import { AdissonApp } from './App';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import configureStore from '../store/configureStore';

const store = configureStore();

describe('App component', () => {
  it('renders without crashing', () => {
    const props = {
      events: []
    }
    shallow(<AdissonApp {...props} />);
  });

  it('renders warning message if no data are provided', () => {
    const props = {
      events: []
    };
    const wrapper = shallow(<AdissonApp {...props} />);
    wrapper.setState({ loading: false });
    const message = wrapper.find('.no-message');
    expect(message.text()).toEqual('There is no data to be loaded.');
  });  
})