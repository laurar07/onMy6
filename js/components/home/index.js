
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, View, Text } from 'native-base';
import { Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

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
            <Icon name='ios-log-out' />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <Grid style={styles.list}>
            <View style={styles.pair}>
              <Button style={styles.item} onPress={() => this.replaceRoute('medical')}>
                <Image style={styles.image} source={require('../../../images/sign.png')} />
                {"\n"}Medical
              </Button>
              <Button style={styles.item} onPress={() => this.replaceRoute('home')}>
                <Image style={styles.image} source={require('../../../images/police-badge.png')} />
                {"\n"}Public safety
              </Button>
            </View>
            <View style={styles.pair}>
              <Button style={styles.item} onPress={() => this.replaceRoute('home')}>
                <Image style={styles.image} source={require('../../../images/worldwide.png')} />
                {"\n"}Transportation
              </Button>
              <Button style={styles.item} onPress={() => this.replaceRoute('home')}>
                <Image style={styles.image} source={require('../../../images/table.png')} />
                {"\n"}Restaurants
              </Button>
            </View>
            <View style={styles.pair}>
              <Button style={styles.item} onPress={() => this.replaceRoute('home')}>
                <Image style={styles.image} source={require('../../../images/dollar-symbol.png')} />
                {"\n"}Financial services
              </Button>
              <Button style={styles.item} onPress={() => this.replaceRoute('home')}>
                <Image style={styles.image} source={require('../../../images/charity.png')} />
                {"\n"}Community services
              </Button>
            </View>
          </Grid>
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

export default connect(mapStateToProps, bindAction)(Home);
