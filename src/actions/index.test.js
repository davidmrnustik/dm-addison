import * as actions from './index';
import {
  ADD_EVENT,
  ADD_TO_BETSLIP,
  REMOVE_FROM_BETSLIP
} from '../constants';

describe('Actions', () => {
  it('should create an action to add a event', () => {
    const event = {
      EVT_1: {
        id: 'EVT_1',
        name: 'Real Madrid vs Barcelona',
        markets: [
          'MKT_1',
          'MKT_2'
        ]
      },
      EVT_2: {
        id: 'EVT_2',
        name: 'Atletico Madrid vs Malaga',
        markets: [
          'MKT_3'
        ]
      }
    };
    const expectedAction = {
      type: ADD_EVENT,
      event
    };

    expect(actions.addEvent(event)).toEqual(expectedAction);
  })

  it('should create an action to add a betslip', () => {
    const betSlip = {
      market: 'MKT_1',
      selection: 'SEL_1'
    };
    const expectedAction = {
      type: ADD_TO_BETSLIP,
      market: betSlip.market,
      selection: betSlip.selection
    };

    expect(actions.addToBetSlip(betSlip)).toEqual(expectedAction);
  })

  it('should create an action to remove from betslip', () => {
    const selection = {
      selection: 'SEL_1'
    };
    const expectedAction = {
      type: REMOVE_FROM_BETSLIP,
      selection
    };

    expect(actions.removeFromBetSlip(selection)).toEqual(expectedAction);
  })

})