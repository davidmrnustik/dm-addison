import React, { Component } from 'react';
import { customStyles as styles } from './CustomStyles';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class AdissonApp extends Component {
  render() {
    return (
      <div className="AddisonApp">
        <Grid>
          <Row>
            <Col md={4}>
              <Event />
            </Col>
            <Col md={4}>
              <Event />
            </Col>
            <Col md={4}>
              <Event />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class Event extends Component {
  render() {
    return(
      <div>
        <div style={styles.alignCenter}>Man. United <span style={styles.paddingVs}>vs</span> Chelsea</div>
        <Market title='To WIN' />
        <Market title='To Score First' />
      </div>
    )
  }
}

class Market extends Component {
  render() {
    const { title } = this.props;

    return(
      <div>
        {title}
        <Row>
          <Col xs={6}>
            <Button>Man. United 1.2</Button>
          </Col>
          <Col xs={6} style={styles.alignRight}>
            <Button>Chelsea 2.2</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AdissonApp;