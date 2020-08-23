/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

// how to change stuff from plataform to plataforem
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};



export default class App extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      books: []
    };
  }
  async componentDidMount(){
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Sarah J. Maas&key=AIzaSyB2txmk1ShWRtUnnSh-zlXQwDsl924De4E')
    .then(
      response => {
        const booksList = response.data;
        this.setState({
          books: booksList
        });
        
      });
  }
  renderList(){
    //works
    console.log(this.state.books.items);
    //doesnt work because of delay in the api's response
    const items =this.state.books.items;
    const textElements = items.map(book => {
          const {title} = book.volumeInfo;
          return <Text key={title}>{title}</Text>
    });
    return textElements;
  }
  render() {
    return (
      <View >
        <Header  label={'Books'}/>
        {this.renderList()}
      </View>
    );
  }
  
}