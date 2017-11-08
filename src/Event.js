import React from 'react';
import PropTypes from 'prop-types';
import { customStyles as styles } from './CustomStyles';
import * as utils from './helpers';
import { EVENT_VS } from './constants';
import Market from './Market';

const Event = (props) => {
  return(
    <div className='event'>
      <div style={styles.alignCenter} className='eventNames'>
        {utils.parseNameFromEvent(props.data.name).first}
        <span className='eventNamesDivider' style={styles.paddingVs}>{EVENT_VS}</span>
        {utils.parseNameFromEvent(props.data.name).second}
      </div>
      {props.data.markets.map(market => (
        <Market key={market.id} {...market} />
      ))}
    </div>
  )
}

Event.propTypes = {
  data: PropTypes.object.isRequired
}

export default Event;