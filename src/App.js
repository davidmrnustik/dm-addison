import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Event from './Event';
import BetSlip from './BetSlip';
import LoadingScreen from './LoadingScreen';
import { slide as Menu } from 'react-burger-menu';

class AdissonApp extends Component {
  state = {
    data: [],
    betSlip: [],
    loading: false
  }

  fetchData() {
    // const uri = 'http://www.mocky.io/v2/59f08692310000b4130e9f71';
    const uri = 'http://www.mocky.io/v2/5a0375e03100008213916a52';
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.open('GET', uri);
      xhr.onload = () => resolve(JSON.parse(xhr.responseText));
      xhr.onerror = () => reject(new Error('Something wring with API!'));
      xhr.send();
    })
  }

  clickEvent = (event, market, selection) => {
    let obj = { event, market, selection };

    this.setState(state => ({
      betSlip: state.betSlip.concat([ obj ])
    }))
  }

  deleteSelection = (selection) => {
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
    const { data, loading, betSlip } = this.state;

    if (loading) return <LoadingScreen text='Loading, please wait...'/>;

    return (
      <div className="AddisonApp">
        <div className='bm-burger-button'></div>
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
        <BetSlip
          data={data}
          betSlip={betSlip}
          onClickBetSlip={this.deleteSelection}
        />
        
      </div>
    );
  }
}

export default AdissonApp;