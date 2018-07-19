import React, { Component } from 'react';
import  {
    StyleSheet,
    NavigatorIOS,
    View, Text
  } from 'react-native';
import axios from 'axios';

export default class MyBookcase extends Component {

  state = {
    books: [],
  };

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

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.books.length}</Text>
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
