import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FormRow = (props) => {
    const {children} = props;

    return(
        <View style={styles.container}>
            {children}
        </View>
    );
        
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:3,
        marginTop: 10,
        marginBottom:2
    }

});

export default FormRow;