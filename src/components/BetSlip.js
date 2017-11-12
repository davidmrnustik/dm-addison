import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-flexbox-grid';
import { customStyles as styles } from './CustomStyles';
import { removeFromBetSlip } from '../actions';

class BetSlip extends Component {
  onClickHandler = (event, selection) => {
    event.preventDefault();
    this.props.removeFromBetSlip(selection);
  }

  render() {
    const { betSlip } = this.props;

    return(
      <Grid style={styles.betSlip}>
        {betSlip.length === 0 && (
          <p>There is no selections.</p>
        )}
        {betSlip.map(({ market, selection }) => (
          <div key={selection.id} className='betSlip-item' style={styles.betSlipItem}>
            <div className='betSlip-name' style={styles.betSlipName}>
              {selection.name}
              {' '}
              {market.name}
            </div>
            <div className='betSlip-selectionPrice' style={styles.betSlipPrice}>
              {selection.price}
            </div>
            <button onClick={(event) => this.onClickHandler(event, selection.id)}>Delete</button>
            
          </div>
        ))}        
      </Grid>
    )
  }
}

function mapStateToProps ({ eventList, betSlip }) {
  
  return {
    betSlip: betSlip.map(slip => ({
      market: eventList.markets[slip.market],
      selection: eventList.selections[slip.selection]
    }))

  }
}

function mapDispatchToProps (dispatch) {
  return {
    removeFromBetSlip: (data) => dispatch(removeFromBetSlip(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BetSlip);