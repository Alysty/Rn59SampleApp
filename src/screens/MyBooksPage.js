
import React from 'react';
import { View, ActivityIndicator, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import myBooks from '../data/myBooks.json'; 
import BookCard from '../components/BookCard';
import FullBookView from './FullBookView';
import AddCard from '../components/AddCard';

const isLeft = number => number % 2 === 0;

const MyBooksPage = props => (
  
  <View style= {styles.MainContainer}>
    
    <FlatList 
      data={[...myBooks, {isLast:true}]}
      
      renderItem={({item, index}) => {
        return(
          item.isLast ? <AddCard onNavigate={()=> props.navigation.navigate('AddBookScreen')}/>:
            <BookCard 
              book={item}
              
              isLeft={isLeft(index)}
              onNavigate={()=>{props.navigation.navigate('FullBookView', {book: item})}}
            />
        );
      }}
      keyExtractor={item => item.id}
      numColumns={2}
    />


  </View>
)
const styles = StyleSheet.create({
  MainContainer: 
  {
    backgroundColor: '#262626',
    
  }
})

export default MyBooksPage;