import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator,TouchableOpacity,
 Image } from 'react-native'
import dataTeach from '../Helpers/TeacherImage'
import Teacher from '../Components/Teacher'
 class Acceuil extends React.Component{

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
        console.log("cliecke")
        this.props.navigation.navigate("Teacher", {teacher:teacher})
      }

    render(){
        return(
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
                    ItemSeparatorComponent= {()=> <View style={{height:18.5, backgroundColor:'white'}}/> }
                  />

            </View>

        )
    }
 
}

styles=StyleSheet.create({
    container: {
        flex:1,
        //backgroundColor:'red',
       // alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      },
      teacherInfo:{
            flex:1,
            flexDirection:'row'
      },
      teacherTitle:{
        flex:1,
         alignItems:'center',
         //justifyContent:'center'
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
export default Acceuil