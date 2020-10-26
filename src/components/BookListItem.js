import React from 'react';
import {View , Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const BooksListItem = props =>{
    const {book, onPressFunction} = props;
    const {title} = book.volumeInfo;
    const {id} = book;
    const titleAltered = title.substring(0);
    try{
        var {thumbnail} = book.volumeInfo.imageLinks;
    }catch(err){
        var thumbnail = 'https://i.imgur.com/uuKFEGW.png'
    }
    return (
        <TouchableOpacity onPress={()=> onPressFunction({book})}>
            <View key= {id+'view'} style={styles.line}>
                <Image source = {{uri: thumbnail}} style={styles.thumbnail}/>
                <Text key={id} style={styles.text} numberOfLines={2}>{title}</Text>
            </View>
        </TouchableOpacity>
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
        color: '#CECECE',
        fontSize: 15,
        paddingLeft: 15,
        flex:6
    },
    thumbnail:{
        aspectRatio: 1,
        width:40,
        flex: 1,
        marginLeft:10
    }
});
export default BooksListItem;