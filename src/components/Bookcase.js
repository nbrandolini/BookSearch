import React, { Component } from 'react';
import  { Text, View,  StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default class Bookcase extends Component {

  constructor() {
    super();

    this.state = {
      books: [],
      status: null,
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

  filterBooks = (status) => {
    return _.filter(this.state.books, { status });

    // return this.state.books.filter(book => book.status === status)
  };

  onPressRead = () => {
    const books = this.state.books.filter(book => book.status === 'read');
    const bookList = books.map((book, index) => {
      return (
        <Text key={index}> {book.title} </Text>
      );
    });
    return bookList;
  };

  onPressReading = () => {
    const books = this.state.books.filter(book => book.status === 'reading');
    const bookList = books.map((book, index) => {
      return (
        <Text key={index}> {book.title}</Text>
      );
    });
    return bookList;

    // this.books.reading();
  };

  onPressToRead() {
    // setState(status: toRead)

    this.books.toRead();
  }

  render() {
    // if status != null
    // then loop through books
    // by calling this.filterBooks(this.state.status)
    // and then map that list of books to components
    // otherwise...
    // display the three buttons
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressRead}
          title="Read"
          color="#841584"
          accessibilityLabel="Read Books"
        />
        <Button
          onPress={this.onPressReading}
          title="Reading"
          color="#841584"
          accessibilityLabel="Reading Now"
        />
        <Button
          onPress={this.onPressToRead}
          title="To Read"
          color="#841584"
          accessibilityLabel="Books to Read"
        />
        {this.onPressRead()}
        {this.onPressReading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});
