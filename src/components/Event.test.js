import React from 'react';
import { Event } from './Event';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import configureStore from '../store/configureStore';

const store = configureStore();

describe('Event component', () => {

  it('renders data provided', () => {
    const props = {
      event: {
        id: 'EVT_1',
        name: 'Real Madrid vs Barcelona',
        markets: [
          'MKT_1',
          'MKT_2'
        ]
      }
    };
    const wrapper = shallow(<Event {...props}/>, {
                context: { store },
                childContextTypes: { store: PropTypes.object.isRequired }
    });
    expect(wrapper.find('.eventTitle').text()).toEqual('Real MadridvsBarcelona');
  });
  
})