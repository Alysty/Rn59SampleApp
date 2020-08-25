
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Api from '../util/Api';
import axios from 'axios';

// how to change stuff from plataform to plataforem


type Props = {};



export default class App extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      book: []
    };
  }
  componentDidMount(){
    axios.get('https://www.googleapis.com/books/v1/volumes/wUWyDwAAQBAJ?key=' + Api.key)
    .then(
      response => {
        const bookData = response.data;
        this.setState({
          book: bookData
        });
        
      });
    
    
   
  }
  renderList(){
    const textElements;
    //doesnt work probably because of delay in the api's response
    const title = this.state.book.volumeInfo.title;
    textElements = <Image key={title+'img'}source = {this.state.book.volumeInfo.imageLinks.small} />
    textElements += <Text key={title}>{title}</Text>
  }
  render() {
    return (
      <View >
        <Header  label={''}/>
        {this.renderList()}
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
    header: {
        marginTop: 0,
        backgroundColor:'#6ca2f8',
        alignItems: 'center'
    },
    
    text: {
        fontSize: 40,
        color: '#ffffff'
    }
})