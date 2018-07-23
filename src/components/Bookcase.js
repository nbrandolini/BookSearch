import React, { Component } from 'react';
import  { Text, View,  StyleSheet, Button, ScrollView } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

export default class Bookcase extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      showRead: false,
      showReading: false,
      showToRead: false,
      status: null,
      isModalVisible: false,
    };
  }

  componentDidMount = () => {
    axios.get(`http://bookjournal-api.herokuapp.com/api/v1/books/`)
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

    return this.state.books.filter(book => book.status === status);
  };

  toggleList(list) {
    this.setState({ [list]: !this.state[list] });
  }

  readList = () => {
    const readBooks = this.state.books.filter(book => book.status === 'read');
    const readList = readBooks.map((book, key) => {
      return (
        <Text style={styles.container} key={book.id}> {book.title} </Text>

      );
    });
    return readList;
  };

  readingList = () => {
    const readingBooks = this.state.books.filter(book => book.status === 'reading');
    const readingList = readingBooks.map((book, index) => {
      return (
        <Text style={styles.container} key={book.id}>{book.title} </Text>
      );
    });
    console.log(readingList);
    return readingList;
  };

  toReadList = () => {
    const toReadBooks = this.state.books.filter(book => book.status === 'to read');
    const toReadList = toReadBooks.map((book, index) => {
      return (
        <Text style={styles.container} key={book.id}> {book.title}  </Text>
      );
    });
    return toReadList;
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.toggleList('showRead')}
          title="Read"
          color="#841584"
          accessibilityLabel="Read Books"
        />
      <ScrollView>
      {this.state.showRead && this.readList()}
      </ScrollView>

        <Button
          onPress={() => this.toggleList('showReading')}
          title="Reading"
          color="#841584"
          accessibilityLabel="Reading Now"
        />
        <ScrollView>
        {this.state.showReading && this.readingList()}
        </ScrollView>

        <Button
          onPress={() => this.toggleList('showToRead')}
          title="To Read"
          color="#841584"
          accessibilityLabel="Books to Read"
        />
        <ScrollView>
        {this.state.showToRead && this.toReadList()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
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
