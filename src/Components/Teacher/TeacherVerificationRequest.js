import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  FlatList ,
  ScrollView
} from 'react-native';
import CardView from 'react-native-cardview' ;
import HeaderArrow from '../HeaderArrow';
import * as firebase from 'firebase';
import { Card } from 'native-base';



const database = firebase.database();
//const student = database.child('student');



export default class TeacherVerificationRequest extends Component {

constructor(props)
{
  super(props);
  this.state = ( {
   
    items:[],
    studentid:'',
    Registrationdetails:'',
     categories:'',


    })


}

componentDidMount() {
  //console.log("hello")
  database.ref("Student/").on("value", async function(snapshot) {
  //   this.setState({
 let snap = JSON.stringify(snapshot)
  let data = JSON.parse(snap)
 console.log(data)
  //console.log( Registrationdetails);
 
  var studentids = Object.keys(data);
  console.log(studentids);
  for(var i =0; i<studentids.length;i++){
    var sid = studentids[i];
    var username =data[sid].Registrationdetails.Username;
    console.log(sid,username);
  }

}



);




 
}
  render() {
    return(
  
  <View styles={styles.container}>
    <HeaderArrow
        headerText = "Student Request"
        onPressBack = {() => this.props.navigation.navigate("TeacherDashboard")}
      /> 
      <ImageBackground source={require('../../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
        <View style={styles.headContiner}>                         
          <View style={styles.Contain}>            
                <View style={styles}>
                  <TouchableOpacity>
                 <CardView style={styles.cardViewStyle}>
                     
                    
                 </CardView>
          
      
                      

                 
                  

                    

                  </TouchableOpacity>
              
               
                </View>                
              
          </View>
        </View>
      </ImageBackground> 
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headContiner:{
    height:'100%',
    width:'100%',
    backgroundColor:'rgba(40,40,40,0.8)',
    //padding:20,
  },  
  Contain:{
    //backgroundColor:'#FFFF99',
      height:'30%',
  }, 
  cardViewStyle:{ 
    width:'80%',        
    height:'50%', 
    marginTop:50,
    marginLeft:40,
    ///marginLeft:10,
   },
  slide1: {
    flex: 1,
    //justifyContent: 'center',    
    //alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },  
  text: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  }
  
});
 
