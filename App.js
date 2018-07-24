import React, { Component } from 'react';
import Search from './src/components/Search';
import BookList from './src/components/BookList';
import Bookcase from  './src/components/Bookcase';
import Read from './src/components/Read';
import Home from './src/components/Home';
import Featured from './src/components/Featured';
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
            title="Home"
            iconName="home"
            icon={TabIcon}
            hideNavBar={true}
            component={Home}
            initial={true}
            />
            <Scene
              key="search"
              title="Search Books"
              iconName="search"
              icon={TabIcon}
              hideNavBar={true}
              component={Search}
              />
            <Scene
              key="list"
              title="Bookcase"
              iconName="list"
              icon={TabIcon}
              hideNavBar={true}
              component={Read}
              />
            <Scene
              key="bookList"
              title="Book List"
              iconName="book"
              icon={TabIcon}
              hideNavBar={true}
              component={Bookcase}
              />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
