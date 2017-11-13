import React from 'react';
import PropTypes from 'prop-types';
import IconBars from 'react-icons/lib/md/dehaze';
import { customStyles as styles } from './CustomStyles';

export const NavBar = props => {
  return(
    <div className='navbar' style={styles.navBar}>
      <img style={styles.logo} src='./logo.jpg' alt='Addison Global'/>
      <a onClick={props.onClickDrawer} style={styles.iconBars}>
        <IconBars />
      </a>
    </div>
  )
}

NavBar.propTypes = {
  onClickDrawer: PropTypes.func.isRequired
}