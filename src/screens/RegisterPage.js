import React from 'react';
import {View, TextInput, StyleSheet, Button, ActivityIndicator, Alert} from 'react-native';
import FormRow from '../components/FormRow';
export default class RegisterPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password: '',
            isLoading: false,
            message: '',
            firebase: null
        }
    }
    componentDidMount(){  
        this.setState({firebase: this.props.navigation.state.params.firebase});
          
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
        return (<Button title='Register' 
                    style = {styles.Button}
                    onPress= {()=>{this.register()}}
                    />)
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
    register(){
        this.setState({isLoading: true})
        this.state.firebase.auth().
        createUserWithEmailAndPassword(this.state.email, this.state.password).
        then(user => {
                this.props.navigation.navigate('LoginPage');
            }).
        catch(error => 
            {
                console.log('error in register page')
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
        marginBottom: 10
    }
})