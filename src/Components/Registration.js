// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native'
import Header from './Header'
import ModalDropdown from 'react-native-modal-dropdown';
import * as firebase from 'firebase';
import Login from './Login';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state =( {
    email:'',
    password:' ',
    username:'',
    studentId:'',
    year:'',
    institute: ''
    })
    }
    
    signUpUser =(email,password) => {
    try{
      if(this.state.password.length<6)
      {
        alert("please enter atleast 6 characters ")
        return;
      }
       let currentUser = this.state.email
       firebase.auth().createUserWithEmailAndPassword(email,password)
      firebase.auth().currentUser.sendEmailVerification().then(function() {
           Alert.alert("Please check Your email.")
          this.props.navigation.navigate('Login',{
            TYPE: this.state.email.Type,  
            NAME:  this.state.email.Name,    
       }, function(error) {
           Alert.alert("Network Error")})
      //  }).then(function(){
      //      if(!emailVerified	){
      //        Alert.alert("First verify mail.")
      //      }
      //      else{
      //           firebase.auth().createUserWithEmailAndPassword(email,password)
      //      }
      //     });
       
    }
    catch(error)
    {
      console.log(error.toString())
    }
    }
      writeUserData=(email,studentId,username,institute,year)=> {
        var database = firebase.database(); 
        firebase.database().ref('email'/+ studentId).set({
        username: name,
        email: email,
        Year: year,
        studentId:studentId,
        institute:institute
      });
    }


    
  render() {
    return (
  <View style={styles.Maincontainer}>
     <Header
         headerText = "Registration"
        onPressBack = {() => this.props.navigation.navigate("Login")}
      /> 
    <ImageBackground source={require('../img/dash.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
      <View style = {{flex:1,alignItems:'center',width:'100%',backgroundColor:'rgba(40,40,40,0.8)'}}>

       <View style={styles.container}>
      
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(email)=>this.setState({email})}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(password)=>this.setState({password})}
        />
        <TextInput
          style={styles.input}
          placeholder='ID'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(studentId)=>this.setState({studentId})}
        />
        <TextInput
          style={styles.input}
          placeholder='Enter Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(username)=>this.setState({username})}
        />

      <ModalDropdown 
          style={styles.input}       
          defaultValue=" Select Institute"
          placeholderTextColor='white'
          options={['CE', 'IT','CSE']}
          textStyle={styles.textStyle}
          dropdownTextStyle={styles.textStyle2}
          dropdownStyle={styles.dropContainer}
          showsVerticalScrollIndicator={true}
          onChangeText={(institute)=>this.setState(institute)}
          />
          <ModalDropdown 
          style={styles.input}       
          defaultValue="Select Year"
          placeholderTextColor='white'
          options={['2','3','4']}
          textStyle={styles.textStyle}
          dropdownTextStyle={styles.textStyle2}
          dropdownStyle={styles.dropContainer}
          showsVerticalScrollIndicator={true}
          onChangeText={(year)=>this.year}
          />

          <TouchableOpacity  style = { styles.signup }  
                            onPress={()=> this.signUpUser(this.state.email,this.state.password)}> 
                         
            <Text style = { styles.textStyle}>Sign Up</Text>
          </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    </View>
    )
  }
}

const styles = StyleSheet.create({
   Maincontainer: {
    flex: 1,
    // justifyContent:'center'
    // backgroundColor:'#CACFD2'
  },
  textStyle:{
    color:'white',
    fontSize:18,
  },
  textStyle2:{
    color:'#000000',
    fontSize:18,
  },
  dropContainer:{
    flex:1,
    width:'30%',
    backgroundColor:'#16A085',    
  },
  input: { 
    width: 350,
    height: 55,
    backgroundColor: '#16A085',
    margin: 10,
    padding: 10,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    marginTop:70
   /*justifyContent: 'center',
    alignItems: 'center'*/
  }, 

  signup:{
    height:'7%',
    width:'100%',
    backgroundColor:'rgba(22,160,133,0.8)',
    borderRadius:10,
    padding:10,
    // justifyContent:'center' ,
    alignItems:'center',
    marginLeft:'35%',
    marginTop:20
  }, 
})