import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { customStyles as styles } from './CustomStyles';
import * as utils from '../utils/utils';
import { EVENT_VS } from '../constants/';
import Market from './Market';

class Event extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    betSlip: PropTypes.array.isRequired
  }

  clickEvent = (market, selection) => {
    this.props.onClickEvent(this.props.data.id, market, selection);
  }

  render() {
    const { data, betSlip } = this.props;

    return(
      <div className='event' style={styles.event}>
        <div className='eventTitle' style={styles.eventTitle}>
          {utils.parseNameFromEvent(data.name).first}
          <span className='eventNamesDivider' style={styles.paddingVs}>{EVENT_VS}</span>
          {utils.parseNameFromEvent(data.name).second}
        </div>

        {data.markets.map(market => (
          <Market
            key={market.id}
            {...market}
            onClickMarket={this.clickEvent}
            betSlip={betSlip.filter(slip => slip.market === market.id)}
          />
        ))}
      </div>
    )
  }
}

export default Event;