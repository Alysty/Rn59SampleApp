
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import BookList from './src/components/BookList';
import Api from './src/util/Api';
import axios from 'axios';

type Props = {};
const styles = StyleSheet.create({
  MainContainer: 
  {
  flex: 1,
 
  // Set hex color code here.
  backgroundColor: '#595959',

  }
})
export default class App extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      books: []
    };
  }
  componentDidMount(){
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Sarah J. Maas&key='+ Api() +'&maxResults=13&projection=lite')
    .then(
      response => {
        const {items} = response.data;
        this.setState({
          books: items
        });
    });
  }
  render() {
    return (
      <View style = {styles.MainContainer}>
        <View >
          <Header  label={'Books'}/>
          <BookList books={this.state.books}/>
        </View>
      </View>
    );
  }
  
}