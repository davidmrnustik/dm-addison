import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Drawer from 'react-motion-drawer';
import Event from './Event';
import { customStyles as styles } from './CustomStyles';
import BetSlip from './BetSlip';
import LoadingScreen from './LoadingScreen';
import IconClose from 'react-icons/lib/md/close';
import { NavBar } from './NavBar';

class AdissonApp extends Component {
  state = {
    data: [],
    betSlip: [],
    loading: false,
    openDrawer: false
  }

  fetchData() {
    const invocation = new XMLHttpRequest();
    const url = 'http://www.mocky.io/v2/59f08692310000b4130e9f71';

    return new Promise((resolve, reject) => {
      if (invocation) {
        invocation.open('GET', url, true);
        invocation.onreadystatechange = handler;
        invocation.send();
      }
      else {
        reject(new Error('Something wring with API!'));
      }

      function handler(xhr) {
        if (invocation.readyState === 4)
        {
          if (invocation.status === 200) {
              outputResult();
          }
          else {
            reject(new Error('Something wrong with API!'));
          }
        }
      }
      function outputResult() {
        resolve(JSON.parse(invocation.responseText));
      }
    })
  }

  clickEvent = (event, market, selection) => {
    let obj = { event, market, selection };

    this.setState(state => ({
      betSlip: state.betSlip.concat([ obj ])
    }))
  }

  deleteSelection = selection => {
    this.setState(state => ({
      betSlip: state.betSlip.filter(slip => slip.selection !== selection.selection)
    }))
  }

  componentDidMount() {
    this.setState({ loading:true });

    this.fetchData()
      .then(data => {
        this.setState({ data, loading:false });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data, loading, betSlip, openDrawer } = this.state;
    const drawerProps = {
      overlayColor: 'rgba(255,255,255,0.6)',
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
          <a onClick={() => this.setState({ openDrawer: !openDrawer })} style={styles.iconBars}>
            <IconClose />
          </a>

          <BetSlip
            data={data}
            betSlip={betSlip}
            onClickBetSlip={this.deleteSelection}
          />
        </Drawer>

        <NavBar onClickDrawer={() => this.setState({ openDrawer: !openDrawer })} />

        <Grid>
          <Row>
            {data.length > 0 && (
              data
                .filter(event => event.markets.length !== 0)
                .map(event => (
                  <Col xs={12} md={4} key={event.id}>
                    <Event
                      data={event}
                      onClickEvent={this.clickEvent}
                      betSlip={betSlip.filter(slip => slip.event === event.id)}
                    />
                  </Col>
              ))
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AdissonApp;