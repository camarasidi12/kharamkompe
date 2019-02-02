import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator,
 Image } from 'react-native'
import {getVideoFromApiWithSearchedText, fetchVideos} from '../API/TMDBApi'
import { PlaybackMixin } from 'expo/build/av/AV';
//import YoutubeVideo from './YoutubeVideo' 
import { DocumentPicker } from 'expo';
import YoytubeWebView from './YoutubeWebView'
import {coursConferenceImage} from '../Helpers/TeacherImage'
 class Teacher extends React.Component{
   API_TOKEN ="AIzaSyCm0TNypw7SDS_0zdc77SP5FWL-G7SYmUM";
    constructor(props){
        super(props)
        this.state = {
            courses: [],
            isCourseLoading:true,
           // coursesDATA: []
        }
        this.teacher={}
        this.test = []
    }
    _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({});
		  alert(result.uri);
      console.log(result);
	}
     _loadCourses = (title) =>{
          console.log("CONSOLE LOG")
          fetchVideos(title).then(res=>
           res.items.map(item =>(
             {
               id: item.id,
               snippet: item.snippet
            }
           ))
          )
          .then(videos =>this.setState({courses: videos, isCourseLoading:false})
          )
          .catch(err=>{
            console.log(err)
          })

         console.log("this.state.coursesVideos")
     }

    _displayLoading() {
        if (this.state.isCourseLoading) {
           // console.log("ActivityIndicator")
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }

    
      componentDidMount(){
         this._loadCourses(this.teacher.title)        
      }
      _loadData(){
         return (
         <FlatList
          style={styles1.flatListStyl}
          data={this.state.courses}
          ItemSeparatorComponent= {()=> <View style={{height:18.5, backgroundColor:'red'}}/> }
          keyExtractor={item=>item.id.videoId}
          renderItem={({item})=><View><Text>{item.id.videoId}</Text></View>}
        />)
      }

     
    render(){
      console.log(this.state.courses)
         //!this.state.isCourseLoading?console.log(this.state.coursesDATA):console.log("nott")
         this.teacher=this.props.navigation.getParam('teacher')
        return(
            <View style={styles1.container}>
                <View  style={styles1.teacherInfo}>
                        <Image style={styles1.logo} source={this.teacher.imagePath} />
                        <Text style={styles1.paragraph}>{this.teacher.title}</Text>
                </View>
                <View style={styles1.teacherAudio}>
                <YoytubeWebView    TeacherTitle = {this.teacher.title} />

                

               {/*
                 <Image style={styles1.logo} source={coursConferenceImage.coursImage} />
                 <Image style={styles1.logo} source={coursConferenceImage.conferenceImage} />
                 !this.state.isCourseLoading?
                this._loadData()
                :
                this._displayLoading()*/
              }
                </View>
            </View>
        )
    }
 
}

styles1=StyleSheet.create({
    container: {
        flex:1,
        //backgroundColor:'red',
       // alignItems: 'center',
        justifyContent: 'center',
       // padding: 24,
      },
      teacherInfo:{
            flex:1,
            flexDirection:'row',
      },
      teacherAudio:{
        flex:3.5,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
     },
     flatListStyl:{
        padding:22
     },
      paragraph: {
       // margin: 24,
       // marginTop: 60,
        flex:1,
        backgroundColor:'red',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        justifyContent:'center',

      },
      logo: {
        height: 138,
        width: 138,
      },
      loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }

})
export default Teacher