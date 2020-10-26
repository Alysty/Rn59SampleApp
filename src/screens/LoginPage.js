import React from 'react';
import {View, TextInput, StyleSheet, Button, ActivityIndicator, Text, Alert} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../config/firebase';
import {processLogin} from '../actions';
import { connect } from 'react-redux';
class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email:'123@123.123',
            password: '123123',
            isLoading: false,
            message: ''
        }
    }
    onChangeHandler (field, valor) {
        this.setState({
            [field]: valor
        })    
    }
    renderButton(){
        if(this.state.isLoading){
            return <ActivityIndicator/>
        }
        return (<View style = {styles.Button}>
                <Button 
                    title='Login' 
                    style = {styles.Button}
                    onPress= {()=>{this.checkLogin()}}
                    />
                </View>)
    }
    renderErrorMessage(){
        const {message} = this.state;

        if (!message){
            return null;
        }
        return (
            Alert.alert(
                "An error ocurred",
                message,
                [{
                    text: "OK",
                    onPress: ()=>{this.setState({message: ''})}
                }]

            )
        )

    }
    checkLogin(){
        this.setState({isLoading: true})
        
        const {email, password} = this.state;

        this.props.processLogin({email, password})
        .then( () => {
            this.props.navigation.navigate('SearchBooksPage');
            this.setState({isLoading: false});
        })
        .catch( error => {
            this.setState({isLoading:false});
            this.setState({ message: error.message});
        })
    }
    render(){
        return(
            <View style={styles.MainContainer}>
                <FormRow>
                    <TextInput placeholder="Email" 
                        style={styles.Input}
                        value={this.state.email}
                        onChangeText={(valor) => {this.onChangeHandler('email',valor)}}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />  
                    <TextInput placeholder="Password" 
                        style={styles.Input}
                        value={this.state.password}
                        onChangeText={(valor) => {this.onChangeHandler('password',valor)}}
                        secureTextEntry
                    />
                </FormRow>
                {this.renderButton()}
                {this.renderErrorMessage()}
                <View style = {styles.Button}>
                    <Button
                        title='Register' 
                        style = {styles.Button}
                        onPress= {()=>{this.props.navigation.navigate('RegisterPage', firebase)}}
                    />    
                </View>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    MainContainer: 
    {
        flex: 1,
        backgroundColor: '#292929',

    },
    Input:{
        borderWidth:1,
        borderColor:'gray',
        marginBottom: 10,
        paddingLeft:10,
        paddingRight:10,
        color: '#CECECE'
    },
    Button:{
        paddingLeft:10,
        paddingRight:10,
        marginTop:10
    }
})

export default connect(null, {processLogin})(LoginPage);