import { StyleSheet, Text, View,SafeAreaView,FlatList,Dimensions,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { AroundYou, MILLER } from '../../utils/mocks';

const {width,height}=Dimensions.get('screen');

import Clock from '../../../assets/images/clockred.svg';

const History = () => {
  return (
    <SafeAreaView style={styles.MAINCONTAINER}>
    <ScrollView>
    <View style={styles.DATEVIEW}>
    <Text style={styles.DATETXT}>01-07-2023</Text>
  
    </View>
    <View>
    <FlatList
        data={AroundYou}
        style={{alignSelf:'center'}}
        renderItem={({ item, index }) => {
            return(

                <View style={{marginTop:'3%'}}>
                <TouchableOpacity style={styles.TOUCH_VIEW}>
                <View style={{flexDirection:'row'}}>
                <Image source={item.images} style={styles.IMAGES}/>
                   <View style={{marginTop:10,marginLeft:10}}>
                <Text style={styles.TXTFIRST}>{item.position}</Text>

                 <View style={{marginTop:'8%',flexDirection:'row'}}>
                <Text style={styles.BOOKINGTXT}>{item.texts}</Text>
                <Text style={styles.NUMBERTXT}>{item.numbers}</Text>

                </View>

                <View style={styles.TIMEVIEW}>
                <Text style={styles.DATESTXT}>{item.workdone}</Text>
                </View>

                <Text style={styles.PRICETXT}>{item.price}</Text>
                </View>
               </View>
                </TouchableOpacity>
                </View>
            )
        }}
    />
  </View>
  <View style={styles.DATEVIEW}>
  <Text style={styles.DATETXT}>03-07-2023</Text>

  </View>

  <View>
    <FlatList
     style={{alignSelf:'center'}}
      data={MILLER}
      renderItem={({ item, index }) => {
            return(
              <View style={{marginTop:'3%'}}>
                <TouchableOpacity style={styles.TOUCH_VIEW}>
                <View style={{flexDirection:'row'}}>
                <Image source={item.images} style={styles.IMAGES}/>
                   <View style={{marginTop:10,marginLeft:10}}>
                <Text style={styles.TXTFIRST}>{item.position}</Text>

                 <View style={{marginTop:'8%',flexDirection:'row'}}>
                <Text style={styles.BOOKINGTXT}>{item.texts}</Text>
                <Text style={styles.NUMBERTXT}>{item.numbers}</Text>

                </View>

                <View style={styles.TIMEVIEW}>
                <Text style={styles.DATESTXT}>{item.workdone}</Text>
                </View>

                <Text style={styles.PRICETXT}>{item.price}</Text>
                </View>
               </View>
                </TouchableOpacity>
                </View>

            )

      }}
      
    />
  </View>
  <View style={styles.DATEVIEW}>
    <Text style={styles.DATETXT}>05-07-2023</Text>
  
    </View>

  </ScrollView>
  
    </SafeAreaView>
    )
  }
  
  export default History;
  
  const styles = StyleSheet.create({
    MAINCONTAINER:{flex:1,backgroundColor:'#FFF'},
    DATEVIEW:{marginTop:'5%',marginLeft:'6%'},

    DATETXT:{fontSize:16,color:'#A2A2A2',fontWeight:'600'},
    TOUCH_VIEW:{width:width/1.1,height:height/7.2,backgroundColor:'#FFF',elevation:2,borderRadius:10,borderWidth:1,borderColor:'white'},
    IMAGES:{width:width/3.8,height:height/8,marginTop:4,borderRadius:10,marginLeft:4},
    TXTFIRST:{fontSize:14,color:'#01073D',fontWeight:'600'},
    BOOKINGTXT:{fontSize:11,color:'#323232',fontWeight:'500'},
    NUMBERTXT:{fontSize:11,color:'#555',fontFamily:'italic'},
    TIMEVIEW:{marginTop:'10%',width:width/4,height:20,backgroundColor:'#F0F1FE',justifyContent:'center',alignItems:'center',borderRadius:3},
   DATESTXT:{fontSize:9,color:'#3C45DA',fontWeight:'500',marginRight:5},
   PRICETXT:{fontSize:20,color:'#3C45DA',fontWeight:'600',marginTop:'5%'},
   
  
  
  
  })