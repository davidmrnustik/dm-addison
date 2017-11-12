import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBetSlip } from '../actions';
import { Col } from 'react-flexbox-grid';
import { customStyles as styles } from './CustomStyles';

class Selection extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    market: PropTypes.string.isRequired
  }

  onClickHandler = event => {
    event.preventDefault();
    this.props.addToBetSlip({
      market: this.props.market,
      selection: this.props.id
    });
  }

  render() {
    const { selection } = this.props;
    
    let button = <button onClick={this.onClickHandler}>{selection.name}<br/>{selection.price}</button>

    return(
      <Col>
        {button}
      </Col>
    )
  }
}

function mapStateToProps ({ eventList }, ownProps) {
  return {
    selection: eventList.selections[ownProps.id]
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToBetSlip: (data) => dispatch(addToBetSlip(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);