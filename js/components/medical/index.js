
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, View, Image } from 'native-base';
import { Grid } from 'react-native-easy-grid';
import { MapView } from 'react-native';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';

const pins = require('../../../images/gps32.png');
const topbar = require('../../../images/topbar.jpg');

const markers = [
  {
    latitude: 47.6499817,
    longitude: -122.3506553,
    title: 'Zoom Care Fremont',
    subtitle: '624 N 34th St, Seattle, WA 98103',
    image: pins,
    animateDrop: true,
  },
  {
    latitude: 47.6506935,
    longitude: -122.3091341,
    title: 'UW Medical Center',
    subtitle: '1959 NE Pacific St, Seattle, WA 98195',
    image: pins,
    animateDrop: true,
  },
  {
    latitude: 47.6616077,
    longitude: -122.3354941,
    title: 'Bartell Drugs',
    subtitle: '1820 N 45th St, Seattle, WA 98103',
    image: pins,
    animateDrop: true,
  },
  {
    latitude: 47.6692259,
    longitude: -122.3812515,
    title: 'Neighborcare Health',
    subtitle: '1753 NW 56th St #200, Seattle, WA 98107',
    image: pins,
    animateDrop: true,
  },
  {
    latitude: 47.614588,
    longitude: -122.342159,
    title: 'King County Public Health Downtown Clinic',
    subtitle: '2124 4th Ave, Seattle, WA 98121',
    image: pins,
    animateDrop: true,
  },
  {
    latitude: 47.668368,
    longitude: -122.380854,
    title: 'Swedish OB/GYN Specialists',
    subtitle: '5350 Tallman Ave. NW, Seattle WA 98107',
    image: pins,
    animateDrop: true,
  },
];

class Medical extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushNewRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Medical services'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>
        <Content>
          <MapView
            style={{ height: 550, width: 400, margin: 0 }}
            region={{
              latitude: 47.661,
              longitude: -122.335,
              latitudeDelta: 0.105,
              longitudeDelta: 0.105,
            }}
            showsUserLocation={true}
            annotations={markers}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Medical);
