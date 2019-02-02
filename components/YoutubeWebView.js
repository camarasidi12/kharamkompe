
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator,
    WebView } from 'react-native'
import React from 'react'


 export default class YoytubeWebView extends React.Component{

MADIAKHOPLAYLIST = "https://www.youtube.com/watch?v=v6qc4JY7QZg&list=PLmKdhMJDa0h5DgWfcrm2WdgbgE3zBOCLr"
BARADJIPLAYLIST = "https://www.youtube.com/watch?v=-I6WnpAFiO4&list=PLmKdhMJDa0h4fa9MmBebJ14eyQUwQCiH1"
   
 render(){
    let palylist =""
    this.props.TeacherTitle === "Baradji"?this.palylist = this.BARADJIPLAYLIST:this.palylist=this.MADIAKHOPLAYLIST

    return <WebView
                 source={{uri:this.palylist}}
                 style={{marginTop: 20}}
            />
    }
 }
      
    styles = StyleSheet.create({
        contenaire: {
            flex: 1,
            alignItems: 'center',
            justifyContent:'center'
        }
    })