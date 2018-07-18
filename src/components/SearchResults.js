import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight,
  Image, ListView, BackHandler, Alert
  } from 'react-native';
import BookDetail from './BookDetail';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  author: {
    color: '#656565',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
  cellContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10,
  },
  detailContainer: {
    flex: 1,
  },
  actionContainer: {

  },
});

export default class SearchResults extends Component {

  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource(
      { rowHasChanged: (row1, row2) => row1 !== row2 });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.books)
    };
  }

  render() {
    BackHandler.addEventListener('hardwareBackPress', () => {
          if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1) {
            this.props.navigator.pop();
            return true;
          }

          return false;
        });
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderBook.bind(this)}
          style={styles.listView}
          />
      );
  }

  renderBook(book) {
    let imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';

    return (
    <MenuProvider>
      <TouchableHighlight onPress={() => this.showBookDetail(book)}
         underlayColor='#dddddd'>
          <View>
            <View style={styles.cellContainer}>
                <Image
                    source={{ uri: imageURI }}
                    style={styles.thumbnail} />
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
                    <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                </View>
                <View style={styles.actionContainer}>
                  <Text>

                  <Menu onSelect={value => Alert.alert(value)}>
                  <MenuTrigger text={'Actions'} />
                  <MenuOptions style={{ height: 125 }}>
                    <MenuOption value="Read" text="Read" />
                    <MenuOption value="Reading" text="Reading" />
                    <MenuOption value="To Read" text="To Read" />
                </MenuOptions>
              </Menu>

                  </Text>
                </View>
              </View>
              <View style={styles.separator} />

          </View>
      </TouchableHighlight>
    </MenuProvider>
      );
  }

  showBookDetail(book) {
    this.props.navigator.push({
      title: book.volumeInfo.title,
      component: BookDetail,
      passProps: { book },
    });
  }

}
