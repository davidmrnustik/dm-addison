import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Drawer from 'react-motion-drawer';
import Event from './Event';
import { customStyles as styles } from './CustomStyles';
import BetSlip from './BetSlip';
import LoadingScreen from './LoadingScreen';
import IconClose from 'react-icons/lib/md/close';
import { NavBar } from './NavBar';
import * as utils from '../utils/utils';
import { addEvent } from '../actions';

export class AdissonApp extends Component {
  state = {
    loading: false,
    openDrawer: false
  }

  componentDidMount() {
    const url = 'https://www.mocky.io/v2/5a0375e03100008213916a52';

    this.setState({ loading:true });
    utils.fetchData(url)
      .then(data => {
        this.props.addEvent(data);
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { loading, openDrawer } = this.state;
    const { events } = this.props;
    const drawerProps = {
      overlayColor: 'rgba(0,0,0,0.6)',
      drawerStyle: styles.drawer
    };

    if (loading) return <LoadingScreen text='Loading, please wait...'/>;

    return (
      <div className='AddisonApp'>
        <Drawer
          fadeOut={true}
          open={openDrawer}
          {...drawerProps}
          width={300}
          right={true}
          onChange={open => this.setState({ openDrawer: open })}
        >
          <a className='iconBars' onClick={() => this.setState({ openDrawer: !openDrawer })} style={styles.iconBars}>
            <IconClose />
          </a>

          <BetSlip />
        </Drawer>

        <NavBar onClickDrawer={() => this.setState({ openDrawer: !openDrawer })} />

        <Grid>
          <Row>
            {events.length === 0 && (
              <p className='no-message' style={styles.noMessage}>There is no data to be loaded.</p>
            )}
            {events.length > 0 && (
              events
                .filter(event => event.markets.length !== 0)
                .map(event => (
                  <Col xs={12} md={4} key={event.id}>
                    <Event id={event.id}/>
                  </Col>
              ))
            )}
          </Row>
        </Grid>
        
      </div>
    );
  }
}

function mapStateToProps ({ eventList }) {
  const events = utils.objectToArray(eventList.events);

  return { events };
}

function mapDispatchToProps (dispatch) {
  return {
    addEvent: (data) => dispatch(addEvent(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdissonApp);