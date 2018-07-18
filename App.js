import React, { Component } from 'react';
import Search from './src/components/Search';
import Featured from './src/components/Featured';
import MyBooks from './src/components/MyBooks';


import {
  TabBarIOS,
} from 'react-native';

export default class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'featured',
      };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          systemIcon='featured'
          onPress={() => {
                      this.setState({
                        selectedTab: 'featured',
                      });
                    }}>

                    <Featured/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'search'}
            systemIcon='search'
            onPress={() => {
                      this.setState({
                        selectedTab: 'search',
                      });
                    }}>

                    <Search/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'mybooks'}
            systemIcon='more'
            onPress={() => {
                      this.setState({
                        selectedTab: 'mybooks',
                      });
                    }}>

                    <MyBooks/>
          </TabBarIOS.Item>
        </TabBarIOS>
        );
  }
}
