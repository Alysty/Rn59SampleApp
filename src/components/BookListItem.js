import React from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';

const BooksListItem = props =>{
    const {book} = props;
    const {title} = book.volumeInfo;
    const {id} = book;
    try{
        var {thumbnail} = book.volumeInfo.imageLinks;
    }catch(err){
        var thumbnail = 'https://www.motorolasolutions.com/content/dam/msi/images/products/accessories/image_not_available_lg.jpg'
    }
    return (
        <View key= {id+'view'} style={styles.line}>
            <Image source = {{uri: thumbnail}} style={styles.thumbnail}/>
            <Text key={id} style={styles.text}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    line:{
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text:{
        color: '#ffffff',
        fontSize: 15,
        paddingLeft: 15
    },
    thumbnail:{
        aspectRatio: 1,
        width:50
    }
});
export default BooksListItem;