import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BookListItem from './BookListItem';

const BooksList = props =>{
    const {books} = props;
    
    const textElements = books.map(book => {
        const {id} = book;
        return <BookListItem key= {id+'listItem'} book={book}/>
    })
    return (
        <View>
            {textElements}
        </View>)
}

export default BooksList;