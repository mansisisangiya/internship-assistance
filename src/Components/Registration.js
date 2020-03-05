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
    institute: '',
    instituteOptions:['CE','CSE','IT'],
    yearOptions:['2','3','4']
    })
    }
   
    focusNextField(nextField) {
      this.refs[nextField].focus();
    }

    

    async signUpUser(email,password) {
    try{
      if(this.state.password.length<6)
      {
        alert("please enter atleast 6 characters ")
        return;
      }
        
       /*firebase.auth().createUserWithEmailAndPassword(email,password)
       Alert.alert("user creaed")
      
       console.log("USER:",user)
        user.sendEmailVerification().then(function() {
           Alert.alert("check mail..")  
         }).catch(function(error) {
            Alert.alert("error..") // An error happened.
});      */
          await  firebase.auth().createUserWithEmailAndPassword(email,password)                       
              //If  a user is successfully created with an appropriate email
             let studentid = this.state.studentId
            var user = firebase.auth().currentUser
            if (firebase.auth().currentUser != null){
              user.sendEmailVerification();
              Alert.alert("check mail..")
              this.props.navigation.navigate('Login')
              this.props.navigation.navigate('StudentVerificationForm',{
                studentid
             });
              console.log(studentid);
              console.log("for firebase...");
              const Registrationdetails=
               ({"Email": this.state.email,"Username":this.state.username,"StudentID":this.state.studentId
                                            ,"Year":this.state.year,"Institute":this.state.institute})

              

                                               
            console.log("value:", Registrationdetails);   
         
            {
              firebase.database().ref('Student/').child(studentid).push(
                {
                  Registrationdetails
              }).then((data)=>{
                  //success callback
                  console.log('data ' , data)
              }).catch((error)=>{
                  //error callback
                  console.log('error firebase ' , error)
              })
          }
          
           
            }
           
            else{
              Alert.alert("error..")
            }
           
        }
    catch(error)
    {
      console.log(error.toString())
    }
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
          onSubmitEditing={() => this.focusNextField('1')}
        />
        <TextInput
          ref='1'
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(password)=>this.setState({password})}
          onSubmitEditing={() => this.focusNextField('2')}
        />
        <TextInput
          ref='2'
          style={styles.input}
          placeholder='ID'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(studentId)=>this.setState({studentId})}
          onSubmitEditing={() => this.focusNextField('3')}
        />
        <TextInput
          ref='3'
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
          options={this.state.instituteOptions}
          textStyle={styles.textStyle}
          dropdownTextStyle={styles.textStyle2}
          dropdownStyle={styles.dropContainer}
          showsVerticalScrollIndicator={true}
          onSelect ={(value) => this.setState({institute: (String(this.state.instituteOptions[value]))})}         
          />
          <ModalDropdown         
          style={styles.input}      
          defaultValue="Select Year"
          placeholderTextColor='white'
          options={this.state.yearOptions}
          textStyle={styles.textStyle}
          dropdownTextStyle={styles.textStyle2}
          dropdownStyle={styles.dropContainer}
          showsVerticalScrollIndicator={true}
          onSelect ={(value) => this.setState({year: (String(this.state.yearOptions[value]))})}
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