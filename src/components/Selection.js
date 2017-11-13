import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBetSlip, removeFromBetSlip } from '../actions';
import { Col } from 'react-flexbox-grid';
import { customStyles as styles } from './CustomStyles';

export class Selection extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  addToBetSlip = event => {
    event.preventDefault();
    this.props.addToBetSlip({
      market: this.props.market,
      selection: this.props.id
    });
  }

  removeFromBetSlip = event => {
    event.preventDefault();
    this.props.removeFromBetSlip(this.props.id);
  }

  render() {
    const { id, selection, betSlip } = this.props;

    let button = <button onClick={this.addToBetSlip}>{selection.name}<br/>{selection.price}</button>;

    betSlip.forEach(item => {
      if(item === id) {
        button = <button className='button-selected' onClick={this.removeFromBetSlip} style={styles.buttonSelected}>
          {selection.name}<br/>{selection.price}
        </button>
      }
    })

    return(
      <Col>
        {button}
      </Col>
    )
  }
}

function mapStateToProps ({ eventList, betSlip }, ownProps) {

  return {
    betSlip: betSlip.map(slip => slip.selection),
    selection: eventList.selections[ownProps.id]
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToBetSlip: (data) => dispatch(addToBetSlip(data)),
    removeFromBetSlip: (data) => dispatch(removeFromBetSlip(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);