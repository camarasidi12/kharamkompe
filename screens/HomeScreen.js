import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, FlatList
} from 'react-native';
import { WebBrowser } from 'expo';
import dataTeach from '../Helpers/TeacherImage'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   // header: null,
    headerTitle: "Professeurs",
    headerRight:  <Image
                    source={require('../assets/images/drame.jpg')}
                    style={{ width: 50, height: 40 , marginLeft:10}}
                  />,
      headerStyle: {
                    backgroundColor: '#22b4bf',
                  },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold',
                  },
    //headerRight: <LogoTitle />
  };


  constructor(props){
    super(props)

    this.state={
        data:[],
    }
}

componentDidMount(){
    const teacher=dataTeach
    this.setState({data:teacher})
}

_navigateToTeacher = (teacher) => {
    //console.log(teacher.title)
    this.props.navigation.navigate("Teacher", {teacher:teacher})
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
                    data={this.state.data}
                     // keyExtractor={({item})=>item.id}
                    renderItem={({item})=>
                    <TouchableOpacity  onPress={()=>this._navigateToTeacher(item)}>
                       <View  style={styles.teacherInfo}>
                            <Image style={styles.logo} source={item.imagePath} />
                            <View  style={styles.teacherTitle}>
                              <Text style={styles.paragraph}>{item.title}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    }
                    ItemSeparatorComponent= {()=> <View style={{height:1.5, backgroundColor:'#45d4de'}}/> }
                  />
      </View>
    );
  }

}

styles=StyleSheet.create({
  container: {
      flex:1,
      //backgroundColor:'red',
     // alignItems: 'center',
      justifyContent: 'center',
      //padding: 24,
      margin:2,
    },
    teacherInfo:{
          flex:1,
          flexDirection:'row'
    },
    teacherTitle:{
      flex:1,
       //alignItems:'center',
      // justifyContent:'center'
      marginLeft: 13,
      backgroundColor:'#d9e4e7'
   },
    paragraph: {
     // margin: 24,
     // marginTop: 60,
      fontSize: 15,
      fontWeight: 'bold',
     // textAlign: 'center',
    },
    logo: {
      height: 138,
      width: 138,
    }

})
