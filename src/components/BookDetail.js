import React, { Component } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';

export default class BookDetail extends Component {

  render() {
    let book = this.props.book;
    let imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
    let description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: imageURI }} />
        <Text style={styles.description}>{ description }</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  image: {
    width: 107,
    height: 165,
    padding: 10,
    marginLeft: 10,
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565',
    fontFamily: 'Avenir Next',
  },
});
