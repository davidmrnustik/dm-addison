const COLOR_GREY_LIGHT = '#4c4c4c';
const COLOR_GREEN = '#5cb85c';

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
    border: `1px solid ${COLOR_GREEN}`
  },
  iconBars: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'inline-block',
    fontSize: 30,
    marginRight: 20,
    marginTop: 10,
    cursor: 'pointer',
    textAlign: 'right',
  },
  drawer: {
    background: '#F9F9F9',
    boxShadow: 'rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px'
  },
  navBar: {
    height: 55,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    width: '100%',
    borderBottom: `1px solid ${COLOR_GREY_LIGHT}`,
    position: 'fixed'
  },
  logo: {
    width: 'auto',
    maxHeight: '100%',
    position: 'absolute',
    left: 15,
    top: 9
  },
  event: {
    margin: '5px 5px 15px 5px',
    padding: '12px 0 5px',
    border: `1px solid ${COLOR_GREY_LIGHT}`,
    backgroundColor: '#272727'
  },
  eventTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 15,
    color: '#e6e6e6',
    fontSize: 14,
    marginBottom: 12,
    borderBottom: `1px solid ${COLOR_GREY_LIGHT}`
  },
  selectionName: {
    paddingBottom: 2
  },
  selectionPrice: {
    fontWeight: 'bold'
  },
  market: {
    margin: '10px 10px 12px 10px',
    paddingLeft: 15,
    paddingRight: 15,
  },
  marketTitle: {
    color: '#a5a5a5',
    marginLeft: '-8px',
    paddingBottom: 8,
    fontSize: 14,
  },
  betSlip: {
    textAlign: 'center'
  },
  betSlipItem: {
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 20,
    marginBottom: 20
  },
  betSlipName: {
    fontWeight: 'bold',
    paddingBottom: 5,
    fontSize: 14
  },
  betSlipPrice: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 5,
    paddingBottom: 10
  },
  noMessage: {
    fontSize: 14,
    marginTop: 40
  }
}