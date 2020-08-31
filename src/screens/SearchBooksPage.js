
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import BookList from '../components/BookList';
import Api from '../util/Api';
import axios from 'axios';
import FullBookView from '../screens/FullBookView';
type Props = {};
const styles = StyleSheet.create({
  MainContainer: 
  {
  flex: 1,
  backgroundColor: '#595959',

  }
})
export default class SearchBooksPage extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      books: []
    };
  }
  componentDidMount(){
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Sarah J. Maas&key='+ Api() +'&maxResults=13')
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
          <BookList books={this.state.books} onPressFunction={(book)=>this.props.navigation.navigate('FullBookView', book)}/>
        </View>
      </View>
    );
  }
  
}
