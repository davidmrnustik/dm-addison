import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Event from './Event';

class AdissonApp extends Component {
  state = {
    data: [],
    loading: false
  }

  fetchData() {
    // const uri = 'http://www.mocky.io/v2/59f08692310000b4130e9f71';
    const uri = 'http://www.mocky.io/v2/5a0375e03100008213916a52';
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.open('GET', uri);
      xhr.addEventListener('load', (() => resolve(JSON.parse(xhr.responseText))));
      xhr.addEventListener('error', (() => reject(new Error('Something wring with API!'))));
      xhr.send();
    })
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
    const { data, loading } = this.state;

    if (loading) { return "LOADING..." };

    return (
      <div className="AddisonApp">
        <Header />
        <Grid>
          <Row>
            {data.length > 0 && (
              data
                .filter(event => event.markets.length !== 0)
                .map(event => (
                  <Col xs={12} md={4} key={event.id}>
                    <Event data={event} />
                  </Col>
              ))
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return(
      <div>
        Header
      </div>
    )
  }
}

export default AdissonApp;