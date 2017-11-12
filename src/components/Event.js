import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { customStyles as styles } from './CustomStyles';
import * as utils from '../utils/utils';
import { EVENT_VS } from '../constants/';
import Market from './Market';

class Event extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  render() {
    const { event } = this.props;

    return(
      <div className='event' style={styles.event}>
        <div className='eventTitle' style={styles.eventTitle}>
          {utils.parseNameFromEvent(event.name).first}
          <span className='eventNamesDivider' style={styles.paddingVs}>{EVENT_VS}</span>
          {utils.parseNameFromEvent(event.name).second}
        </div>

        {event.markets.map(market => (
          <Market
            key={market}
            id={market}
          />
        ))}
        
      </div>
    )
  }
}

function mapStateToProps ({ eventList }, ownProps) {
  return {
    event: eventList.events[ownProps.id]
  }
}

export default connect(mapStateToProps)(Event);