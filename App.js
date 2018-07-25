import React, { Component } from 'react';
import Search from './src/components/Search';
import BookShops from  './src/components/BookShops';
import Read from './src/components/Read';
import Home from './src/components/Home';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

class TabIcon extends Component {

  static propTypes = {
    iconName: PropTypes.string.isRequired,
  };

  render() {
    return (
      <View>
        <Icon style={{ color: 'blue' }} name= {this.props.iconName} size={25}/>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs={true}
            tabBarPosition={'bottom'}
            tabBarStyle={{
              backgroundColor: '#f0f2ef',
              paddingTop: 35,
            }}
          >
          <Scene
            key="home"
            title="home"
            iconName="home"
            icon={TabIcon}
            hideNavBar={true}
            component={Home}
            initial={true}
            swipeEnabled={true}
            />
            <Scene
              key="search"
              title="search"
              iconName="search"
              icon={TabIcon}
              hideNavBar={true}
              component={Search}
              swipeEnabled={true}
              />
            <Scene
              key="list"
              title="bookcase"
              iconName="list"
              icon={TabIcon}
              hideNavBar={true}
              component={Read}
              swipeEnabled={true}
              />
            <Scene
              key="info"
              title="info"
              iconName="info"
              icon={TabIcon}
              hideNavBar={true}
              component={BookShops}
              swipeEnabled={true}
              />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
