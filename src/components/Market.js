import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';
import Selection from './Selection';
import { customStyles as styles } from './CustomStyles';

class Market extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selections: PropTypes.array.isRequired,
    betSlip: PropTypes.array.isRequired
  }

  clickMarket = selection => {
    this.props.onClickMarket(this.props.id, selection);
  }

  render() {
    const { id, name, selections, betSlip } = this.props;

    return(
      <div className='market' style={styles.market}>
        <div className='marginTitle' style={styles.marketTitle}>{name}</div>
        <Row between='xs'>
          {selections.map((selection, index) => (
            <Selection
              key={selection.id}
              selected={betSlip
                .reduce(((bool, current) => current.market === id ? true : false), false)}
              onClickSelection={this.clickMarket}
              betSlip={betSlip.filter(slip => slip.selection === selection.id)}
              {...selection}
            />
          ))}
        </Row>
      </div>
    )
  }
}

export default Market;