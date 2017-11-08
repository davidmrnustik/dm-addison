import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';

class Selection extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }

  render() {
    const { name, price } = this.props;

    return(
      <Col>
        <button>{name}<br/>{price}</button>
      </Col>
    )
  }
}

export default Selection;