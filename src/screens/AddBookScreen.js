import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native'
import FormRow from '../components/FormRow'

const AddBookScreen = props => (
    <View style={styles.MainContainer}>
        <FormRow>
            <TextInput 
                style = {styles.TextInput}
                placeholder="Title"
                value=""
                onChangeText={value => console.log(value)}

            />  
            
        </FormRow>
    </View>
)

const styles = StyleSheet.create({
    TextInput:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
});

export default AddBookScreen;