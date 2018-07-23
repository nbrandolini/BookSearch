import React, { Component } from 'react';
import  { Text, View,  StyleSheet, Button } from 'react-native';
import axios from 'axios';
import Read from './Read';

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

  filter = (status) => {

  //   return _.filter(this.state.books, { status });
  // };
  
    return this.state.books.filter(book => book.status === status);
  };

  callFunc() {
    if (this.state.isModalVisible) {
      this.setState({ isModalVisible: false });
    } else {
      this.setState({ isModalVisible: true });
    }
  }

  onPressRead = () => {
    const readBooks = this.state.books.filter(book => book.status === 'read');
    const readList = readBooks.map((book, index) => {
      return (
        <Text style={styles.container} key={index}> {book.title} </Text>
      );
    });
    this.setState({ readList: readList });
    this.callFunc();
  };

  onPressReading = () => {
    const readingBooks = this.state.books.filter(book => book.status === 'reading');
    const readingList = readingBooks.map((book, index) => {
      console.log(readingList);
      return (
        <Text style={styles.container} key={index}>{book.title} </Text>
      );
    });
    this.setState({ readingList: readingList });
    this.callFunc();
  };

  onPressToRead = () => {
    const toReadBooks = this.state.books.filter(book => book.status === 'to read');
    const toReadList = toReadBooks.map((book, index) => {
      return (
        <Text style={styles.container} key={index}> {book.title}  </Text>
      );
    });
    this.setState({ toReadList: toReadList });
    this.callFunc();
  };

  render() {
    return (

      <View style={styles.container}>
        <Button
          onPress={this.onPressRead}
          title="Read"
          color="#841584"
          accessibilityLabel="Read Books"
        />
      {this.state.isModalVisible && this.state.readList}

        <Button
          onPress={this.onPressReading}
          title="Reading"
          color="#841584"
          accessibilityLabel="Reading Now"
        />
        {this.state.isModalVisible && this.state.readingList}

        <Button
          onPress={this.onPressToRead}
          title="To Read"
          color="#841584"
          accessibilityLabel="Books to Read"
        />
        {this.state.isModalVisible && this.state.toReadList}

      </View>
    );
  }
  //
  // showReadList(readList) {
  //   this.props.navigator.push({
  //     list: this.state.readList,
  //     component: Read,
  //     passProps: { readList },
  //   });
  // }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
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
