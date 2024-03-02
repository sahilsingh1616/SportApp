import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import FirstExample from '../screens/home/index2';
import MessageScreen from '../screens/message';
import InternetConnection from '../screens/internet';
import GymWorking from '../screens/gym';
import SquareIndex from '../screens/square';
// import { Image } from 'react-native-svg';


const Tab=createBottomTabNavigator();
const screenOption={
    headerShown:false,
    tabBarShowLabel:false,
    tabBarStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        backgroundColor:'white',
         borderRadius:50,
        width:'90%',
        marginLeft:20,
        marginBottom:'4%',
        borderWidth:1,
        borderTopWidth:1,
        borderColor:'white'
        
        
    }
}


const TabNavigation = () => {
    // const [selecedTabBottom,setselectedTabBottom]=useState(0);
  return (
   
    <Tab.Navigator
    screenOptions={screenOption}>
        <Tab.Screen name='home' component={FirstExample} options={{tabBarIcon:({focused}) => (
            <View style={{width:50,height:50,backgroundColor:focused?'#3C45DA':'white',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/hometab.png')} resizeMode='contain' style={{width:29.2,height:29,tintColor:focused? 'white' :'blue'}}/>
            </View>
        )}}  />

        <Tab.Screen name='message' component={MessageScreen}  options={{tabBarIcon:({focused}) => (
            <View style={{width:50,height:50,backgroundColor:focused?"#3C45DA":'white',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/message1.png')} resizeMode='contain' style={{width:29.2,height:29,tintColor:focused? 'white' :'blue'}}/>
            </View>
        )}}


        />
        <Tab.Screen name='internet' component={InternetConnection}
             options={{tabBarIcon:({focused}) => (
            <View style={{width:50,height:50,backgroundColor:focused?'#3C45DA':'white',borderRadius:50,justifyContent:'center',top:-29,alignItems:'center'}}>
            <Image source={require('../../assets/images/internet.png')} resizeMode='contain' style={{width:29.2,height:29,tintColor:focused? 'white' :'blue'}}/>
            </View>
        )}}
        />
        <Tab.Screen name='gym' component={GymWorking}
             options={{tabBarIcon:({focused}) => (
            <View style={{width:50,height:50,backgroundColor:focused?'#3C45DA':'white',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/dumbal.png')} resizeMode='contain' style={{width:29.2,height:29,tintColor:focused? 'white' :'blue'}}/>
            </View>
        )}}
        />
        <Tab.Screen name='square' component={SquareIndex}
             options={{tabBarIcon:({focused}) => (
            <View style={{width:50,height:50,backgroundColor:focused?'#3C45DA':'white',borderRadius:50,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../assets/images/square.png')} resizeMode='contain' style={{width:29.2,height:29,tintColor:focused? 'white' :'blue'}}/>
            </View>
        )}}
        />
   
    </Tab.Navigator>
   
  )
}

export default TabNavigation


// options={{tabBarIcon:({focused})=>{
          
//     <View style={{borderWidth:1}}>

//      <Image source={require('../../assets/images/pcc.png')} style={{width:40,height:40}}/> 
//     <Text style={{fontSize:11,color:'black'}}>Ssdjduegyuxcdcecscec</Text>

//     </View>
    
// }
// }}