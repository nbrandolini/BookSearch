import React, { Component } from 'react';
import  { Text, View, TouchableHighlight,  StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default class Bookcase extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      readList: [],
      readingList: [],
      toReadList: [],
      status: null,
      isModalVisible: false,
    };
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3001/api/v1/books/`)
    .then((response) => {
      console.log(response.data);
      this.setState({
        books: response.data,
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  };

  callFunc() {
    if (this.state.isModalVisible) {
      this.setState({ isModalVisible: false });
    } else {
      this.setState({ isModalVisible: true });
    }
  }

  onPressRead = () => {
    const books = this.state.books.filter(book => book.status === 'read');
    const bookList = books.map((book, index) => {
      return (
        <Text style={styles.title} key={index}> {book.title} </Text>
      );
    });
    this.setState({ readList: bookList });
    this.callFunc();
  };

  onPressReading = () => {
    const books = this.state.books.filter(book => book.status === 'reading');
    const bookList = books.map((book, index) => {
      return (
        <Text style={styles.title} key={index}> {book.title} </Text>
      );
    });
    this.setState({ readingList: bookList });
    this.callFunc();
  };

  onPressToRead = () => {

    const books = this.state.books.filter(book => book.status === 'to read');
    const bookList = books.map((book, index) => {
      return (
        <Text style={styles.title} key={index}> {book.title} </Text>
      );
    });
    this.setState({ toReadList: bookList });
    this.callFunc();
  };

  render() {
    return (
      <View>
        <TouchableHighlight       style={styles.button}
          underlayColor="#841584"
          onPress={this.onPressRead &&
         this.state.readList}>

          <Text style={styles.buttonText}>Read List</Text>
        </TouchableHighlight>



        <TouchableHighlight       style={styles.button}
          underlayColor="#841584"
          onPress={this.onPressReading &&
          this.state.isModalVisible && this.state.readList}>

          <Text style={styles.buttonText}>Reading List</Text>
        </TouchableHighlight>



        <TouchableHighlight       style={styles.button}
          underlayColor="#841584"
          onPress={this.onPressToRead &&
          this.state.isModalVisible && this.state.readList}>

          <Text style={styles.buttonText}>To Read List</Text>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
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
  button: {
    height: 36,
    backgroundColor: '#0099CC',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 15,
    width: 150,
  },
});
