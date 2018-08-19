import React from 'react';
import { AdissonApp } from './App';
import { shallow } from 'enzyme';

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
    const message = wrapper.find('.no-data-message');
    expect(message.text()).toEqual('There is no data to be loaded.');
  });  
})