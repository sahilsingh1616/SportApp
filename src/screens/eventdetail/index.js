import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView,FlatList } from 'react-native'
import React, { useState } from 'react'
import Race from '../../../assets/images/race.svg';
import TImeZone from '../../../assets/images/timezone.svg';
import Clock from '../../../assets/images/clock.svg';
import Time from '../../../assets/images/time.svg';
import Decrease from '../../../assets/images/dec.svg';
const { width, height } = Dimensions.get('screen');
import { Reebok } from '../../utils/mocks';
import { useNavigation } from '@react-navigation/native';


const BoxView = () => {
  const [selecedTab, setSelectedTab] = useState(0);
 
  return (

    <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '6%' }}>

      <TouchableOpacity style={{ width: '46%', height: 53, backgroundColor: '#ecedff', elevation: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 10 }}>
        <TImeZone />
        <Text style={{ fontSize: 14, color: '#3C45DA', fontWeight: '500', marginLeft: 6 }}>3 Hrs Long</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width: '46%', height: 53, backgroundColor: '#ECFFFE', elevation: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10, borderRadius: 10 }}>
        <Clock />
        <Text style={{ fontSize: 14, color: '#CCCCCC', fontWeight: '500', marginLeft: 6 }}>9 AM to 12 PM</Text>
      </TouchableOpacity>

    </View>
  )
}

const DownTown=({navigation})=>{
  return(
     <View style={{backgroundColor:'white',elevation:10,position:'absolute',bottom:0,paddingVertical:20,width:'100%',borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:"space-between"}}>
<View style={{flexDirection:'row',width:'34%',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:42,color:'#3C45DA',fontWeight:'600'}}>$20.</Text>
<Text style={{fontSize:32,color:'#3C45DA',fontWeight:'500',marginTop:8}}>50</Text>
     </View>
     <TouchableOpacity style={{width:'50%',height:50,borderRadius:10,backgroundColor:'#3C45DA',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
     <Text style={{fontSize:18,color:'#FFF',fontWeight:'600'}}>Buy a Ticket</Text>

     </TouchableOpacity>
     </View>
  )
}

const EventDetails = ({ route,navigation }) => {
  // const navigation=useNavigation();
  console.log(route.params.sahil.bckgroundimage)
  console.log(navigation);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <ImageBackground source={route.params.sahil.bckgroundimage} style={{ width: '100%', height: 401 }}>
          <TouchableOpacity style={{zIndex:1000, height:50, width:50, backgroundColor:"rgba(255, 255, 255, 0.20)",marginTop:'10%',marginLeft:'6%',borderRadius:10,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.goBack()}>
             <Decrease/>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', position: 'absolute', top: '82%', left: 15, width: '100%', justifyContent: 'space-between' }}>
            <View style={{ width: '30%', height: 33, backgroundColor: '#2596be', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: 'white' }}>View on Map</Text>
            </View>

            <Text style={{ fontSize: 16, color: 'white', alignItems: 'flex-end', marginRight: '10%', marginTop: 10 }}>16th July</Text>
          </View>
        </ImageBackground>

        <View style={{ width: width, height: height*1.1, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30, backgroundColor: 'white',marginBottom:'30%' }}>
          <View style={{ marginTop: 15, marginLeft: '6%' }}>
            <Text style={{ fontSize: 22, color: '#01073D', fontWeight: '600' }}>Hoops Showdown</Text>
            <View style={{ marginTop: 3, flexDirection: 'row' }}>
              <Race />
              <Text style={{ fontSize: 14, color: '#787878', marginLeft: 3,fontWeight:'300' }}>Victory Arena, Riverside City</Text>
            </View>
          </View>

          <BoxView />
          <View style={{ marginTop: '10%', marginLeft: '6%' }}>
            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Features</Text>
          </View>

          <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Refreshment</Text>
            <Text style={styles.txtSeating}>Seasonal Offerings</Text>

          </View>
          <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Activities</Text>
            <Text style={styles.txtSeating}>Social Interaction</Text>

          </View>
          <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Friendly Environment</Text>
            <Text style={styles.txtSeating}>Positive Attitudes</Text>

          </View>
          <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Player Appearances</Text>
            <Text style={styles.txtSeating}>Meet and Greet</Text>

          </View>

          <View style={{ marginTop: '10%', marginLeft: '6%' }}>
            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Description</Text>

            <Text style={{fontSize:16,color:'#01073D',fontWeight:'300',lineHeight:26,marginTop:10}}>Lorem ipsum dolor sit amet consectetur. Sed sit vitae arcu{'\n'}platea elit pellentesque lorem purus. Habitasse at convallis a{'\n'}egestas massa tellus. Sit nibh proin eget elit placerat.{'\n'}Malesuada quis eget gravida ullamcorper elementum.placerat.{'\n'}Malesuada quis eget gravida ullamcorper elementum.{'\n'}placerat. Malesuada quis eget gravida ullamcorper{'\n'}elementum.placerat.</Text>
          </View>
          <View style={{ marginTop: '10%', marginLeft: '6%' }}>
            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>You may also like</Text>
          </View>

          <View style={{ width: '100%', height: 360 }}>

<FlatList
    data={Reebok}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    style={{ marginLeft: 20 }}
    renderItem={({ item, index }) => {
        return (
            <TouchableOpacity style={{ width:width-170,elevation:2, height:height/3, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: '#ffff', marginBottom: '60%' }}>
                <ImageBackground source={item.images} style={{ width: 206, height: 220, alignSelf: 'center', marginTop: 10 }}>
                    <Image source={item.background} style={{ width: 46, height: 27.76, position: 'absolute', left: '72%', top: 10 }} />
                    <View style={{ flexDirection: 'row', marginTop: '92%' }}>
                        <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: 10, borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Time />
                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                            </View>

                        </View>
                        <View style={{ alignItems: 'flex-end', width: 95 }}>
                            <Text style={{ fontSize: 12, fontWeight: '700', color: 'white', marginTop: 5 }}>12th July</Text>
                        </View>
                    </View>







                </ImageBackground>
                <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '600', marginLeft: 10, marginTop: 7 }}>{item.position}</Text>
                <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row' }}>
                    <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                    <Text style={{ fontSize: 13, color: '#787878', marginLeft: 5, marginTop: 1 }}>{item.Downtxt}</Text>
                </View>



            </TouchableOpacity>
        )
    }}
/>
</View>




        </View>
      </ScrollView>
      <DownTown navigation={navigation} />
    </SafeAreaView>
  )
}

export default EventDetails

const styles = StyleSheet.create({
  FeaturesView: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%'
  },
  txt:
    { fontSize: 12, color: '#01073D', marginLeft: '6%' },
    
  txtSeating: { fontSize: 12, color: '#01073D', marginRight: '6%' },

})