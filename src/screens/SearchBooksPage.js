
import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, Text, TextInput} from 'react-native';
import BookList from '../components/BookList';
import Api from '../util/Api';
import FormRow from '../components/FormRow';
import axios from 'axios';

type Props = {};

export default class SearchBooksPage extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      books: [],
      loading:false,
      error: false,
      searching: false,
      search: ""
    };
  }
  getBooks(value){
    
    
    if(value){
      this.setState({loading: true});
      this.setState({error: false});
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+ value +'&key='+ Api() +'&maxResults=13')
      .then(
        response => {
          const {items} = response.data;
          this.setState({
            books: items,
            loading:false
          });
      }).catch(error =>{
          this.setState(
            {loading:false,
              error:true}
            )
          console.log(error);
        });
    }
  }
  onChangeSearch(value){
    this.setState({search: value});
    if(value != ""){
      this.setState({
        searching: true,
        
      })
    }else{
      this.setState({
        searching: false
      })
    }
    
    const books = this.getBooks(value);

  }
  render() {
    
    return (
      
      <View style = {styles.MainContainer}>
        <FormRow style = {styles.Form}>
          <TextInput placeholder="Search for any book!" 
            style={styles.Input} 
            value={this.state.search}
            onChangeText={(value)=> this.onChangeSearch(value)}
          />
        </FormRow>
        {
          this.state.searching ? 
            this.state.loading ? 
              <ActivityIndicator  size="large" color="#CBCBCB"/>
              :
                this.state.error ? <Text style={styles.Error}> ERROR the books could not be loaded</Text>
                :
                <View style={styles.List} > 
                  <BookList books={this.state.books} onPressFunction={(book)=>this.props.navigation.navigate('FullBookView', book)}/>
                </View>
            : null
        }
        
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  MainContainer: 
  {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  Error:{
    fontSize: 16,
    alignSelf:"center"
  },
  Input:{
    borderWidth: 1,
    borderBottomColor: 'grey',
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  Form:{
    alignItems: 'center'
  },
  List: {
    justifyContent:'flex-start',
    marginTop:5
  }
})