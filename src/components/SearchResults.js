import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight,
  Image, ListView, BackHandler, Alert
  } from 'react-native';
import BookDetail from './BookDetail';
import Bookcase from './Bookcase';
import axios from 'axios';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';

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

  addBook = (book, status) => {
    book.status = status;
    book.title = book.volumeInfo.title;
    book.author = book.volumeInfo.authors.toString();
    book.image_url = book.volumeInfo.imageLinks.thumbnail;

    axios.post('http://localhost:3001/api/v1/books/', book)
      .then((responseData) => {
        Alert.alert(`Successfully Added ${book.volumeInfo.title}`);
        responseData.push(book);
        this.setState({
          responseData,
          title: 'My Bookcase',
          component: MyBookcase,
          passProps: { books: responseData.items },
        });
      })
      .catch((error) => {
        this.setState({
          message: error.message,
        });
      });
  };


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
                     <MenuOption onSelect={() => this.addBook(book, 'read')} text='Read' />
                     <MenuOption onSelect={() => this.addBook(book, 'reading')} text='Reading' />
                     <MenuOption onSelect={() => this.addBook(book, 'to read')} text='To Read' />
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
