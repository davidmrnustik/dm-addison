import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-flexbox-grid';
import Selection from './Selection';
import { customStyles as styles } from './CustomStyles';

export const Market = (props) => {
  return(
    <div className='market' style={styles.market}>
      <div className='marketTitle' style={styles.marketTitle}>{props.market.name}</div>
      <Row between='xs'>
        {props.market.selections.map(selection => (
          <Selection
            key={selection}
            market={props.id}
            id={selection}
          />
        ))}
      </Row>
    </div>
  )
}

Market.propTypes = {
  id: PropTypes.string.isRequired
}

function mapStateToProps ({ eventList }, ownProps) {
  return {
    market: eventList.markets[ownProps.id]
  }
}

export default connect(mapStateToProps)(Market);