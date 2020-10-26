import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';

function getRightImage(images){
    try{
        var image;
        var {thumbnail} = images;
        image = thumbnail;
        var {small} = images;
        if(small){
            image = small;
        }
        var {medium} = images;
        if(medium){
            image = medium;
        }
        var {large} = images;
        if(small){
            image = large; 
        }
        if(!image){
            throw err;
        }
    }catch(err){
        var image2 = 'https://i.imgur.com/uuKFEGW.png'
    }
    if(image){
        return image;

    }else{
        return image2;
    }
    
}
const BookCard = ({ book, isLeft, onNavigate}) => (
    
    <TouchableOpacity 
    onPress={onNavigate}
    style={[
    styles.container,
    isLeft ? styles.leftColumn : styles.rightColumn ]
    }>
    <View style={styles.card}>
        <Image 
        source={
            {
            uri: getRightImage(book.volumeInfo.imageLinks)
            }
        }
        aspectRatio={1}
        resizeMode="cover"
        />
        <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle} numberOfLines={2}>{ book.volumeInfo.title }</Text>
        </View>
    </View>
    </TouchableOpacity>

);



const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
    height: Dimensions.get('window').width / 2,
  },
  card: {
    flex: 1,
    borderWidth: 1,
  },
  cardTitleContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    alignItems: 'center'
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  leftColumn: {
    paddingLeft: 10,
  },
  rightColumn: {
    paddingRight: 10,
  }

});

export default BookCard;
