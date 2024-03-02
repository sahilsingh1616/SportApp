import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('CarouselCards');

    }, 4000);
  }, []);
  return (
   

    <ImageBackground source={require('../../../assets/images/Splash.png')} style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
    <Image source={require('../../../assets/images/logo.png')} style={{width:142,height:110}}/>

    </ImageBackground>

  )
}

export default Splash

const styles = StyleSheet.create({})