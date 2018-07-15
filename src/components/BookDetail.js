import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class BookDetail extends Component {

  render() {
    let book = this.props.book;
    let imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
    let description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageURI }} />
        <Text style={styles.description}>{ description }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center',
  },
  image: {
    width: 107,
    height: 165,
    padding: 10,
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565',
  },
});
