
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, View } from 'native-base';
import { Grid } from 'react-native-easy-grid';
import { MapView } from 'react-native';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';

const markers = [
  {
    latitude: 47.6499817,
    longitude: -122.3506553,
    title: 'Zoom Care Fremont',
    subtitle: 'Zoom Care Fremont',
  },
  {
    latitude: 47.6506935,
    longitude: -122.3091341,
    title: 'UW Medical Center',
    subtitle: 'UW Medical Center',
  },
  {
    latitude: 47.6616077,
    longitude: -122.3354941,
    title: 'Bartell Drugs',
    subtitle: 'Bartell Drugs',
  },
  {
    latitude: 47.6692259,
    longitude: -122.3812515,
    title: 'Neighborcare Health',
    subtitle: 'Neighborcare Health',
  },
  {
    latitude: 47.614588,
    longitude: -122.342159,
    title: 'King County Public Health Downtown Clinic',
    subtitle: 'King County Public Health Downtown Clinic',
  },
  {
    latitude: 47.668368,
    longitude: -122.380854,
    title: 'Swedish OB/GYN Specialists',
    subtitle: 'Swedish OB/GYN Specialists',
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
              latitude: 47.66160,
              longitude: -122.335,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
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
