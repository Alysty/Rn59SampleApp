import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View>
                <FormRow>
                    <TextInput placeholder="Email" style={styles.Input}/>  
                </FormRow>
                <FormRow>
                    <TextInput placeholder="Password" 
                        style={styles.Input}
                        secureTextEntry
                    />
                </FormRow>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Input:{
        borderWidth:1,
        borderColor:'gray',
        marginTop: 5,
        paddingLeft:10,
        paddingRight:10
    }
})