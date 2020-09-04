
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import ShowBook from '../components/ShowBook';
import Api from '../util/Api';
import axios from 'axios';

type Props = {};
const styles = StyleSheet.create({
  MainContainer: 
  {
    flex: 1,
    backgroundColor: '#595959',

  }
})
export default class FullBookView extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      book: []
    };
  }
  componentDidMount(){
    const {id}  = this.props.navigation.state.params.book;
    console.log(id+ "------------------");
    axios.get('https://www.googleapis.com/books/v1/volumes/'+ id + '?'+ Api())
    .then(
      response => {
        const {volumeInfo} = response.data;
        
        this.setState({
          book: volumeInfo
        });
        
    });
  }
  render() {
    /*
    const {imageLinks} = this.state.book;
    console.log(imageLinks);
    const {thumbnail} = imageLinks;
    <Image source = {{uri: thumbnail}} />*/
   
    return (
      <View style = {styles.MainContainer}>
        
        <Text>{this.state.book.title}</Text>
      </View>
    );
  }
  //
}