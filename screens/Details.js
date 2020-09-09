import React from 'react';
import { View, Text , StyleSheet, Image} from 'react-native';
import favicon from '../assets/favicon.png'

export default function Details(props){
    const item = props.route.params.item;
    return (<View>
        <Text style={styles.head}>{item.title}</Text>
        <Image source={favicon} style={{ width: 512, height:512, alignSelf: "center" }}/>
        <Text style={styles.body}>Out in : {item.releaseYear}</Text>
        </View>
    );  
}

const styles = StyleSheet.create({
    head:{
        fontSize: 30,
        textAlign: "center",
        color:"#0A6FB6"
    },
    body:{
        fontSize: 24,
        margin: 20,
        color: "#37C8C4",
        textAlign: "center"
    }
});