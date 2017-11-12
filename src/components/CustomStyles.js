const COLOR_GREY_DARK = '#b7b7b7';
const COLOR_GREY_LIGHT = '#ddd';

export const customStyles = {
  alignRight: {
    textAlign: 'right'
  },
  alignCenter: {
    textAlign: 'center'
  },
  paddingVs: {
    paddingLeft: 30,
    paddingRight: 30
  },
  buttonSelected: {
    color: 'white',
    backgroundColor: '#5cb85c',
    border: 0
  },
  iconBars: {
    display: 'block',
    fontSize: 30,
    marginRight: 20,
    marginTop: 10,
    cursor: 'pointer',
    textAlign: 'right'
  },
  drawer: {
    background: '#F9F9F9',
    boxShadow: 'rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px'
  },
  navBar: {
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.9',
    width: '100%',
    borderBottom: `1px solid ${COLOR_GREY_LIGHT}`,
    position: 'fixed'
  },
  event: {
    margin: '5px 5px 15px 5px',
    padding: '12px 10px 0 10px',
    border: `1px solid ${COLOR_GREY_DARK}`
  },
  eventTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 15,
    marginBottom: 12,
    borderBottom: `1px solid ${COLOR_GREY_DARK}`
  },
  market: {
    margin: '10px 10px 12px 10px'
  },
  marketTitle: {
    color: '#a5a5a5',
    marginLeft: '-8px',
    paddingBottom: 8
  },
  betSlip: {
    textAlign: 'center'
  },
  betSlipItem: {
    borderBottom: `1px solid ${COLOR_GREY_LIGHT}`,
    paddingBottom: 20,
    marginBottom: 20
  },
  betSlipName: {
    fontWeight: 'bold',
    paddingBottom: 5
  },
  betSlipPrice: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 15
  }
}