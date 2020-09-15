import React from 'react';
import {View, TextInput, StyleSheet, Button, ActivityIndicator, Text, Alert} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from '../config/firebase';
export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email:'123@123.123',
            password: '123123',
            isLoading: false,
            message: ''
        }
    }
    componentDidMount(){
        /*var firebaseConfig = {
            apiKey: "AIzaSyDNHbF8mWfsGqEHgvqhz_1BuKoscFCrHN4",
            authDomain: "bookmanager-41418.firebaseapp.com",
            databaseURL: "https://bookmanager-41418.firebaseio.com",
            projectId: "bookmanager-41418",
            storageBucket: "bookmanager-41418.appspot.com",
            messagingSenderId: "426887807497",
            appId: "1:426887807497:web:e2ce674a1e6c8478986ed8",
            measurementId: "G-D076VH3QP2"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);*/
        
          
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
        marginTop:10
    }
})