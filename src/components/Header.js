import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
/*
class Header extends React.Component{
    render(){
        return(
            <View>
                <Text>Header test</Text>
            </View>
        )
    }
}
*/
const styles = StyleSheet.create({
    header: {
        marginTop: 0,
        backgroundColor:'#6ca2f8',
        alignItems: 'center'
    },
    
    text: {
        fontSize: 40,
        color: '#ffffff'
    }
})

//shorter version, only works for staless components
const Header = (props)=>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{props.label}</Text>
        </View>
    )
}
export default Header