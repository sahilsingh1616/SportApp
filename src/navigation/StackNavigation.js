// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Splash from './src/screens/splash'
// import CarouselCard from './src/screens/CarouselCards'
// import Login from './src/screens/Login'
// import Onbording from './src/screens/CarouselCards/index1'
// import Practice from './src/screens/practice'
// import SignUp from './src/screens/SignUp'
// import ForgetPassword from './src/screens/forgetpassword'
// import VerifyEmail from './src/screens/verifyEmail'
// import ChangePassword from './src/screens/changepassword'
// import VerifyNumber from './src/screens/verifyNumber'

// const App = () => {
//   return (
//  // <Splash/> 
// //<CarouselCard/>
// <Onbording/>
// //<Login/>
// //<SignUp/>

// //<ForgetPassword/>
// //<Practice/>

// //<VerifyEmail/>
// //<ChangePassword/>
// //<VerifyNumber/>
//   )
// }

// export default App

// const styles = StyleSheet.create({})



import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import Splash from '../screens/splash';
import Onbording from '../screens/CarouselCards/index1';
import TabNavigation from './TabNavigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/forgetpassword';
import VerifyEmail from '../screens/verifyEmail';
import ChangePassword from '../screens/changepassword';
import VerifyNumber from '../screens/verifyNumber';
import FirstExample from '../screens/home/index2';
import EventDetails from '../screens/eventdetail';
import VenueDetails from '../screens/VenueDetail';
import VenueAroundYou from '../screens/Venuearoundyou';
import VenueBooked from '../screens/VenueBooked';
import UpComing from '../screens/upcoming';
import History from '../screens/history';
import PopularSeeAll from '../screens/popularseeall';
import CompetitionAround from '../screens/Competitionaroundyou';
import SelectAim from '../screens/selectedAim';
import SetupGym from '../screens/setupGym';


//import Home from './src/screens/home';


 const Stack=createNativeStackNavigator();

const StackNavigation=()=>{
 return(
<NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
   {/* <Stack.Screen name='splash' component={Splash}/>
   <Stack.Screen name='CarouselCards' component={Onbording}/>
   <Stack.Screen name='Login' component={Login}/>
   <Stack.Screen name='SignUp' component={SignUp}/>
   <Stack.Screen name='forgetpassword' component={ForgetPassword}/>
   <Stack.Screen name='verifyEmail' component={VerifyEmail}/>
   <Stack.Screen name='changepassword' component={ChangePassword}/>
   <Stack.Screen name='verifyNumber' component={VerifyNumber}/>   */}
  {/* <Stack.Screen name='home' component={Home}/>   */}
   {/* <Stack.Screen name='home' component={JustPractice}/>  */}
   {/* <Stack.Screen name='home' component={FirstExample}/> */}
 <Stack.Screen name='action' component={TabNavigation}/>

<Stack.Screen name='eventdetail' component={EventDetails}/> 
<Stack.Screen name='VenueDetail' component={VenueDetails}/>
<Stack.Screen name='venuearoundyou' component={VenueAroundYou}/>
<Stack.Screen name='VenueBooked' component={VenueBooked}/>

<Stack.Screen name='upcoming' component={UpComing}/>
<Stack.Screen name='history' component={History}/>
<Stack.Screen name='popularseeall' component={PopularSeeAll}/>
<Stack.Screen name='Competitionaroundyou' component={CompetitionAround}/>
<Stack.Screen name='selectedAim' component={SelectAim}/>
<Stack.Screen name='setupGym' component={SetupGym}/>
 </Stack.Navigator>
</NavigationContainer>
 )
}
export default StackNavigation;
