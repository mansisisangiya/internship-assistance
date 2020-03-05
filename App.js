import React, { Component } from 'react';
import {} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import config from './src/config';
import Splash from './src/Components/Splash';
import Login from './src/Components/Login';
import Registration from './src/Components/Registration';

//Student Modules
import StudentDashboard  from './src/Components/Student/StudentDashboard';
import StudentVerificationForm from './src/Components/Student/StudentVerificationForm';
import StudentAccepted from './src/Components/Student/StudentAccepted';
import StudentOfferLatter from './src/Components/Student/StudentOfferLatter';
import StudentProvidedCompany from './src/Components/Student/StudentProvidedCompany';

//Teacher Modules
import TeacherDashboard from './src/Components/Teacher/TeacherDashboard';
import TeacherVerificationRequest from './src/Components/Teacher/TeacherVerificationRequest';
import TeacherRequestForm from './src/Components/Teacher/TeacherRequestForm';
import TeacherhStudentStatus from './src/Components/Teacher/TeacherStudentStatus';
import TeacherCompanies from './src/Components/Teacher/TeacherCompanies';




const RootStack = createStackNavigator(
  {
     //screens
       Splash: { screen: Splash },
       Login: { screen: Login },
       Registration: { screen: Registration },
       
       //Student Modules
       StudentDashboard:{screen:StudentDashboard},
       StudentVerificationForm:{screen:StudentVerificationForm},
       StudentAccepted:{screen:StudentAccepted},
       StudentOfferLatter:{screen:StudentOfferLatter},
       StudentProvidedCompany:{screen:StudentProvidedCompany},

       //Teacher Modules
       TeacherDashboard:{screen:TeacherDashboard},
       TeacherVerificationRequest:{screen:TeacherVerificationRequest},
       TeacherRequestForm:{screen:TeacherRequestForm},
       TeacherhStudentStatus:{screen:TeacherhStudentStatus},
       TeacherCompanies:{screen:TeacherCompanies},
       // /TeacherCompanies:{screen:TeacherCompanies}
   },
  {
    //Run First
    initialRouteName: 'StudentDashboard',
    headerMode: 'none',
  }
);

 class App extends React.Component{
  render(){
    return(
      <RootStack />
    );
  }
}

export default createAppContainer(RootStack);