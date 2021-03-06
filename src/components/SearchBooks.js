import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput,
  TouchableHighlight, ActivityIndicator } from 'react-native';
import SearchResults from './SearchResults';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 10,
  },
  searchInput: {
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    color: 'black',
    borderRadius: 4,
    padding: 5,
    borderColor: 'blue',
    borderWidth: StyleSheet.hairlineWidth,
  },
  button: {
    height: 36,
    backgroundColor: '#0099CC',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 15,
    width: 150,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
  instructions: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
  },
  fieldLabel: {
    fontSize: 18,
    marginTop: 15,
    color: 'black',
  },
  errorMessage: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 15,
    color: 'red',
  },
});

export default class SearchBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {
        bookAuthor: '',
        bookTitle: '',
        isLoading: false,
        errorMessage: '',
      };
  }

  searchBooks() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });
    let baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    if (this.state.bookAuthor !== '') {
      baseURL += encodeURIComponent('inauthor:' + this.state.bookAuthor);
      }
    if (this.state.bookTitle !== '') {
      baseURL += (this.state.bookAuthor === '') ? encodeURIComponent('intitle:' + this.state.bookTitle) : encodeURIComponent('+intitle:' + this.state.bookTitle);
    }

    console.log('URL: >>>' + baseURL);
    fetch(baseURL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ isLoading: false, bookTitle: '', bookAuthor: '' });

        if (responseData.items) {

          this.props.navigator.push({
            name: 'searchresults',
            title: 'Search Results',
            component: SearchResults,
            passProps: { books: responseData.items },
          });
        } else {
          this.setState({ errorMessage: 'Please enter a book or title' });
        }
      })
      .catch(error =>
        this.setState({
          isLoading: false,
          errorMessage: error,
        }))
        .done();
  }

  render() {
    let spinner = this.state.isLoading ?
        (<ActivityIndicator
          hidden= 'true'
          size='large'/>) :
          (<View/>);
    return (
      <View style={styles.container}>
          <Text style={styles.instructions}> Search by book title and/or author</Text>
            <View>
              <Text style={styles.fieldLabel}>Book Title:</Text>
              <TextInput
              value={this.state.bookTitle}
              style={styles.searchInput} placeholder='Search by title'
              onChangeText={(text) => this.setState({ bookTitle: text })}>
              </TextInput>
            </View>

            <View>
              <Text style={styles.fieldLabel}>Author:</Text>
              <TextInput
              value={this.state.bookAuthor}
              style={styles.searchInput} placeholder='Search by author'
              onChangeText={(text) => this.setState({ bookAuthor: text })}>
              </TextInput>
            </View>

            <TouchableHighlight style={styles.button}
              underlayColor='#CC0066'
               onPress={this.searchBooks.bind(this)}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableHighlight>
            {spinner}
            <Text     style={styles.errorMessage}>{this.state.errorMessage}</Text>
      </View>
          );
  }
}
