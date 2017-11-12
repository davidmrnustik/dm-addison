import {
  ADD_EVENT,
  ADD_TO_BETSLIP,
  REMOVE_FROM_BETSLIP
} from '../constants';

export function addEvent (event) {
  return {
    type: ADD_EVENT,
    event
  }
}

export function addToBetSlip ({ market, selection }) {
  return {
    type: ADD_TO_BETSLIP,
    market,
    selection
  }
}

export function removeFromBetSlip (selection) {
  return {
    type: REMOVE_FROM_BETSLIP,
    selection
  }
}