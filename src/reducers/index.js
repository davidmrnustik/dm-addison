import { combineReducers } from 'redux';
import { normalize, schema } from 'normalizr';
import {
  ADD_EVENT,
  ADD_TO_BETSLIP,
  REMOVE_FROM_BETSLIP
} from '../constants';

function eventList (state = [], action) {

  switch (action.type) {
    case ADD_EVENT:
      const { event } = action;

      // Normalize data
      const selection = new schema.Entity('selections');
      const market = new schema.Entity('markets', {
        selections: [selection]
      });
      const eventList = new schema.Entity('events', {
        markets: [market]
      })
      const { entities } = normalize(event, [eventList]);

      return {
        ...state,
        ...entities
      }

    default:
      return state;
  }
}

function betSlip (state = [], action) {
  const { market, selection } = action;

  switch (action.type) {
    case ADD_TO_BETSLIP:
      return [...state,
        Object.assign({}, {
          market,
          selection
        })
      ]
    case REMOVE_FROM_BETSLIP:
      return state.filter(item => item.selection !== selection);

    default:
      return state;
  }
}

export default combineReducers({
  eventList,
  betSlip
})