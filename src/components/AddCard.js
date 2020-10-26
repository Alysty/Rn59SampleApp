import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Dimensions, 
  TouchableOpacity
} from 'react-native';

const AddCard = ({ isLeft, onNavigate}) => (
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
            uri: "https://cdn4.iconfinder.com/data/icons/vectory-bonus-3/40/button_add-512.png"
          }
        }
        aspectRatio={1}
        resizeMode="cover"
      />
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

export default AddCard;
