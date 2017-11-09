import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    betSlip: PropTypes.array.isRequired
  }

  onClickHandler = (event, slip) => {
    event.preventDefault();
    this.props.onClickBetSlip(slip);
  }

  render() {
    const { betSlip } = this.props;

    return(
      <div className='header'>
        {betSlip.map(slip => (
          <p key={slip.selection}>{slip.selection}
            <button onClick={(event) => this.onClickHandler(event, slip)}>Delete</button>
          </p>
        ))}
        Length: {betSlip.length}
      </div>
    )
  }
}

export default Header;