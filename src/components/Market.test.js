import React from 'react';
import { Market } from './Market';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import configureStore from '../store/configureStore';

const store = configureStore();

describe('Market component', () => {

  it('renders data provided', () => {
    const props = {
      id: 'MKT_1',
      market: {
        id: 'MKT_1',
        name: 'Team to Win',
        selections: [
          'SEL_1',
          'SEL_2'
        ]
      }
    };
    const wrapper = shallow(<Market {...props}/>, {
                context: { store },
                childContextTypes: { store: PropTypes.object.isRequired }
    });
    expect(wrapper.find('.marketTitle').text()).toEqual('Team to Win');
  });
  
})