import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { customStyles as styles } from './CustomStyles';

class Selection extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    betSlip: PropTypes.array.isRequired,
    selected: PropTypes.bool.isRequired
  }

  onClickHandler = (event) => {
    event.preventDefault();
    this.props.onClickSelection(this.props.id);
  }

  render() {
    const { id, name, price, betSlip, selected } = this.props;

    let button = !selected ?
      <button onClick={this.onClickHandler}>{name}<br/>{price}</button> :
      <button>{name}<br/>{price}</button>

    betSlip.forEach(slip => {
      if (slip.selection === id) {
        button = <button style={styles.buttonSelected}>{name}<br/>{price}</button>
      }
    })

    return(
      <Col>
        {button}
      </Col>
    )
  }
}

export default Selection;