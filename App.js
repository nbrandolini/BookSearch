import React, { Component } from 'react';
import Search from './src/components/Search';
import Featured from './src/components/Featured';
import Bookcase from  './src/components/Bookcase';

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
            selected={this.state.selectedTab === 'bookcase'}
            systemIcon='more'
            onPress={() => {
                      this.setState({
                        selectedTab: 'bookcase',
                      });
                    }}>

                    <Bookcase/>
          </TabBarIOS.Item>
        </TabBarIOS>
        );
  }
}
