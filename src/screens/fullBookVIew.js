
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator, ScrollView} from 'react-native';
import Api from '../util/Api';
import axios from 'axios';
import LongText from '../components/LongText'


type Props = {};

export default class FullBookView extends Component<Props> {
  getRightImage(images){
    try{
        var image;
        var {thumbnail} = images;
        image = thumbnail;
        var {small} = images;
        image = small;
        var {medium} = images;
        image = medium;
        var {large} = images;
        image = large;
    }catch(err){
        var image2 = 'https://i.imgur.com/uuKFEGW.png'
    }
    if(image){
      return image;
    }else{
      return image2;
    }
    
  }
  constructor(props){
    super(props);

    this.state = {
      book: [],
      loading: true
    };
  }
  componentDidMount(){
    const {id}  = this.props.navigation.state.params.book;
    axios.get('https://www.googleapis.com/books/v1/volumes/'+ id + '?'+ Api())
    .then(
      response => {
        const {volumeInfo} = response.data;
        
        this.setState({
          book: volumeInfo,
          loading: false
        });
    });
  }
  returnAuthors(authorsArray){
    
    if(authorsArray.length == 1){
      return <Text>{authorsArray[0]}</Text>
    }else{
      var elements = authorsArray.map((author, index)=> <Text key= {author + index + ""}>{author}</Text>)
      return (elements);
    }

  }
  render() {
  
    if(this.state.loading){
      return <ActivityIndicator  size="large" color="#CBCBCB"/>
    }
    const {imageLinks} = this.state.book;
    var image = this.getRightImage(imageLinks);
    
    return (
      <ScrollView style = {styles.MainContainer}>
        <View style= {styles.secondContainer}>
          <Image source = {{uri: image}} style={styles.thumbnail}/> 
        </View>
        <View style= {styles.detailContainer}>
          <View style = {styles.lineContainer}>
            <Text style={styles.line}>Title: {this.state.book.title}</Text>
            <Text></Text>
            <Text style={styles.line}>Author(s): {this.returnAuthors(this.state.book.authors)}</Text>
            
            <Text></Text>
            <LongText style={styles.line} label='Description' content={this.state.book.description}/>
          </View>
          
        </View>
        
      </ScrollView>
     
    );
  }
  
}
const styles = StyleSheet.create({
  MainContainer: 
  {
    flex: 1,
    backgroundColor: '#262626',
  },
  secondContainer:{
    padding: 10
  },
  detailContainer:{
    marginTop:5,
    padding:10
  },
  thumbnail:{
    
    aspectRatio: 1,
    width:390 
  },
  lineContainer:{
    paddingTop: 3,
    paddingBottom:3,
    borderWidth:1,
    backgroundColor: '#303030',
    elevation:1
  },
  line:{
    color:'#CECECE',
    paddingLeft:5,
    paddingRight: 5
  }
  

})