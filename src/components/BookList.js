import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BookListItem from './BookListItem';

const BooksList = props =>{
    const {books, onPressFunction} = props;
    
    /*const textElements = books.map(book => {
        const {id} = book;
        return <BookListItem key= {id+'listItem'} book={book} onPressFunction = {onPressFunction}/>
    })*/
    return (
        <FlatList
            data={books}
            keyExtractor= {item => item.id+'listItem'}
            renderItem = {({item}) => (
                <BookListItem book={item}
                 onPressFunction = {onPressFunction}/>
            )}
        />
        )
}

export default BooksList;

/*
<FlatList
            data={books}
            
            renderItem = {({item}) =>{
                <BookListItem book={item}
                 onPressFunction = {onPressFunction}/>
            }}
        />
*/