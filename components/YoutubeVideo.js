import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator,Image } from 'react-native'
import YouTube from 'react-native-youtube'

  export default class YoutubeVideo  extends React.Component{
    

    render(){ 
        console.log("YOUTUBEVIDEOEOOE")

        return (
            <View style={styles.contenaire}>
                 <YouTube
                     videoId={this.props.videoId}   // The YouTube video ID
                     play={true}             // control playback of video with true/false
                     fullscreen={true}       // control whether the video should play in fullscreen or inline
                    loop={true}             // control whether the video should loop when ended
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                     onError={e => this.setState({ error: e.error })}
                     style={{ alignSelf: 'stretch', height: 300 }}
                  apiKey = "AIzaSyCm0TNypw7SDS_0zdc77SP5FWL-G7SYmUM"
                 />
             </View>
          )
          
         }
  }
  styles= StyleSheet.create({
            contenaire:{
                flex:1,
                justifyContent:'center',
                alignItems: 'center',
                backgroundColor:'red'
            }

  })