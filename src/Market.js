import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';
import Selection from './Selection';

const Market = (props) => {
  return(
    <div className='market'>
      {props.name}
      <Row between='xs'>
        {props.selections.map((selection, index) => (
          <Selection key={selection.id} {...selection} />
        ))}
      </Row>
    </div>
  )
}

Market.propTypes = {
  name: PropTypes.string.isRequired,
  selections: PropTypes.array.isRequired
}

export default Market;