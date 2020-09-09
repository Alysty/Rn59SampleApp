import React from 'react';
import {FlatList} from 'react-native';
import BookListItem from './BookListItem';

const BooksList = props =>{
    const {books, onPressFunction} = props;
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

