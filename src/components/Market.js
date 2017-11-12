import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-flexbox-grid';
import Selection from './Selection';
import { customStyles as styles } from './CustomStyles';

class Market extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  clickMarket = selection => {
    this.props.onClickMarket(this.props.id, selection);
  }

  render() {
    const { id, market } = this.props;

    return(
      <div className='market' style={styles.market}>
        <div className='marginTitle' style={styles.marketTitle}>{market.name}</div>
        <Row between='xs'>
          {market.selections.map(selection => (
            <Selection
              key={selection}
              market={id}
              id={selection}
            />
          ))}
        </Row>
      </div>
    )
  }
}

function mapStateToProps ({ eventList }, ownProps) {
  return {
    market: eventList.markets[ownProps.id]
  }
}

export default connect(mapStateToProps)(Market);