import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email:"",
            password: ""
        }
    }

    onChangeHandler (field, valor) {
        this.setState({
            [field]: valor
        })    
    }
    checkLogin(){
        
        this.props.navigation.navigate('SearchBooksPage');
    }
    render(){
        return(
            <View style={styles.MainContainer}>
                <FormRow>
                    <TextInput placeholder="Email" 
                        style={styles.Input}
                        value={this.state.email}
                        onChangeText={(valor) => {this.onChangeHandler('email',valor)}}
                    />  
                    <TextInput placeholder="Password" 
                        style={styles.Input}
                        value={this.state.password}
                        onChangeText={(valor) => {this.onChangeHandler('password',valor)}}
                        secureTextEntry
                    />
                </FormRow>
               
                <Button title='Login' 
                    style = {styles.Button}
                    onPress= {()=>{this.checkLogin()}}
                    />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    MainContainer: 
    {
        flex: 1,
        backgroundColor: '#595959',

    },
    Input:{
        borderWidth:1,
        borderColor:'gray',
        marginBottom: 10,
        paddingLeft:10,
        paddingRight:10,
    },
    Button:{
        paddingLeft:10,
        paddingRight:10,
    }
})