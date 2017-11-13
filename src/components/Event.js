import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { customStyles as styles } from './CustomStyles';
import * as utils from '../utils/utils';
import { EVENT_VS } from '../constants/';
import Market from './Market';

export const Event = (props) => {
  return(
    <div className='event' style={styles.event}>
      <div className='eventTitle' style={styles.eventTitle}>
        {utils.splitNamesFromEvent(props.event.name).first}
        <span className='eventNamesDivider' style={styles.paddingVs}>{EVENT_VS}</span>
        {utils.splitNamesFromEvent(props.event.name).second}
      </div>

      {props.event.markets.map(market => (
        <Market
          key={market}
          id={market}
        />
      ))}
      
    </div>
  )
}

Event.propTypes = {
  id: PropTypes.string.isRequired
}

function mapStateToProps ({ eventList }, ownProps) {
  return {
    event: eventList.events[ownProps.id]
  }
}

export default connect(mapStateToProps)(Event);