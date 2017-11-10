import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return this.props.data.filter(event => data.event === event.id)[0]
  }

  getMarketData(data, slip) {
    return data.markets.filter(market => slip.market === market.id)[0]
  }

  getSelectionData(data, slip) {
    return data.selections.filter(selection => slip.selection === selection.id)[0]
  }

  render() {
    const { betSlip } = this.props;

    return(
      <div className='menu'>
        {betSlip.length === 0 && (
          <p>There is no selections.</p>
        )}

        {betSlip.map(slip => (
          <div key={slip.selection}>
            <p>
              {this.getSelectionData(this.getMarketData(this.getEventData(slip), slip), slip).name}
              {' '}
              {this.getMarketData(this.getEventData(slip), slip).name}
              <br/>
              {this.getSelectionData(this.getMarketData(this.getEventData(slip), slip), slip).price}
            </p>
            <button onClick={(event) => this.onClickHandler(event, slip)}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
}

export default BetSlip;