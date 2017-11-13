import * as utils from '../utils/utils';

describe('Split names from event', () => {
  it('splitNamesFromEvent should return object with two properties', () => {
    const names = 'Real Madrid vs Barcelona';
    const expected = {
      first: 'Real Madrid',
      second: 'Barcelona'
    };
    expect(utils.splitNamesFromEvent(names)).toEqual(expected);
  })

  it('objectToArray should return array', () => {
    const object = {
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
    const array = [
      {
        id: 'EVT_1',
        name: 'Real Madrid vs Barcelona',
        markets: [
          'MKT_1',
          'MKT_2'
        ]
      },
      {
        id: 'EVT_2',
        name: 'Atletico Madrid vs Malaga',
        markets: [
          'MKT_3'
        ]
      }
    ];
    expect(utils.objectToArray(object)).toEqual(array);
  })
})