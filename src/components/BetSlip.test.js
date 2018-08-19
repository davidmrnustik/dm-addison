import React from 'react';
import { BetSlip } from './BetSlip';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import configureStore from '../store/configureStore';

const store = configureStore();

describe('BetSlip component', () => {
  const props = {
    betSlip: [
      {
        market: {
          id: 'MKT_1',
          name: 'Team to Win',
          selections: [
            'SEL_1',
            'SEL_2'
          ]
        },
        selection: {
          id: 'SEL_1',
          name: 'Real Madrid',
          price: 1.23
        }
      },
      {
        market: {
          id: 'MKT_3',
          name: 'Team to Win',
          selections: [
            'SEL_6',
            'SEL_7'
          ]
        },
        selection: {
          id: 'SEL_6',
          name: 'Atletico',
          price: 1.4
        }
      }
    ]
  };
  const wrapper = mount(<BetSlip {...props}/>, {
              context: { store },
              childContextTypes: { store: PropTypes.object.isRequired }
  });

  it('renders data provided', () => {
    expect(wrapper.find('.betSlip-name').last().text()).toEqual('Atletico Team to Win');
  });
})