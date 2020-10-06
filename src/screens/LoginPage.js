import React from 'react';
import {View, TextInput, StyleSheet, Button, ActivityIndicator, Text, Alert} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../config/firebase';
export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password: '',
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
        firebase.auth().
        signInWithEmailAndPassword(this.state.email, this.state.password).
        then(user => {
                this.props.navigation.navigate('SearchBooksPage');
            }).
        catch(error => 
            {
                console.log('error in Login page')
                this.setState({message: error.message})
            }).
        then(() => this.setState({isLoading: false}))
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