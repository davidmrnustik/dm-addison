import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';
import { customStyles as styles } from './CustomStyles';

class BetSlip extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    betSlip: PropTypes.array.isRequired
  }

  onClickHandler = (event, slip) => {
    event.preventDefault();
    this.props.onClickBetSlip(slip);
  }

  getEventData(data) {
    return this.props.data.filter(event => data.event === event.id)[0];
  }

  getMarketData(data, slip) {
    return data.markets.filter(market => slip.market === market.id)[0];
  }

  getSelectionData(data, slip) {
    return data.selections.filter(selection => slip.selection === selection.id)[0];
  }

  render() {
    const { betSlip } = this.props;

    return(
      <Grid style={styles.betSlip}>
        {betSlip.length === 0 && (
          <p>There is no selections.</p>
        )}

        {betSlip.map(slip => (
          <div key={slip.selection} className='betSlip-item' style={styles.betSlipItem}>
            <div className='betSlip-name' style={styles.betSlipName}>
              {this.getSelectionData(this.getMarketData(this.getEventData(slip), slip), slip).name}
              {' '}
              {this.getMarketData(this.getEventData(slip), slip).name}
            </div>
            
            <div className='betSlip-selectionPrice' style={styles.betSlipPrice}>
              {this.getSelectionData(this.getMarketData(this.getEventData(slip), slip), slip).price}
            </div>
            <button onClick={(event) => this.onClickHandler(event, slip)}>Delete</button>
          </div>
        ))}
      </Grid>
    )
  }
}

export default BetSlip;