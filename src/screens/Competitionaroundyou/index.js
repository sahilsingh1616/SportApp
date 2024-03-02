import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');
import Decrease from '../../../assets/images/dec.svg';
import Share from '../../../assets/images/share.svg';
import Basket from '../../../assets/images/basketball.svg';
import Gather from '../../../assets/images/gather.svg';
import Clock from '../../../assets/images/secondclock.svg';
import Time from '../../../assets/images/time.svg';

import Reward1 from '../../../assets/images/reward1.svg';
import Reward2 from '../../../assets/images/reward2.svg';
import Reward3 from '../../../assets/images/reward3.svg'

import Race from '../../../assets/images/race.svg';
import Star from '../../../assets/images/star.svg';
import { Award, Reebok } from '../../utils/mocks';


const Features=()=>{
    return( 
        <View>

      
        <View style={{ marginTop: '6%', marginLeft: '6%' }}>
        <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Features</Text>
      </View>
      <View>
      <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Refreshment</Text>
            <Text style={styles.txtSeating}>Seasonal Offerings</Text>

          </View>
          <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Awards</Text>
            <Text style={styles.txtSeating}>Trophies and Plaques</Text>

          </View>
          <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Activities</Text>
            <Text style={styles.txtSeating}>Fun and Enjoyment</Text>

          </View>
          <View style={styles.FeaturesView}>
            <Text style={styles.txt}>Performance</Text>
            <Text style={styles.txtSeating}>Objective Measurement</Text>

          </View>
          </View>

      </View>
   
      
    )
}

const Downtxt=()=>{
    return(
        <View style={{backgroundColor:'white',elevation:10,position:'absolute',bottom:0,paddingVertical:20,width:'100%',borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:"space-between"}}>
        <View style={{flexDirection:'row',width:'34%',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:42,color:'#3C45DA',fontWeight:'600'}}>$20.</Text>
        <Text style={{fontSize:32,color:'#3C45DA',fontWeight:'500',marginTop:8}}>50</Text>
             </View>
             <TouchableOpacity style={{width:'50%',height:50,borderRadius:10,backgroundColor:'#3C45DA',marginRight:'10%',justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize:18,color:'#FFF',fontWeight:'500'}}>Join Competition</Text>
        
             </TouchableOpacity>
             </View>
    )
}
const Discription=()=>{
    return(
        <View>
           <View style={{ marginTop: '10%', marginLeft: '6%' }}>
            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Description</Text>
               <View style={{marginTop:'5%'}}>
            <Text style={{fontSize:16,color:'#01073D',fontWeight:'300',lineHeight:26}}>Lorem ipsum dolor sit amet consectetur. Sed sit vitae arcu{'\n'}platea elit pellentesque lorem purus. Habitasse at convallis a{'\n'}egestas massa tellus. Sit nibh proin eget elit placerat.{'\n'}Malesuada quis eget gravida ullamcorper elementum.placerat.{'\n'}Malesuada quis eget gravida ullamcorper elementum.{'\n'}placerat. Malesuada quis eget gravida ullamcorper{'\n'}elementum.placerat.</Text>
          </View>
          </View>
          

        </View>
    )
}

const Awards=()=>{
    return(
        <View>
        <View style={{ marginTop: '6%', marginLeft: '6%' }}>
        <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Awards</Text>
      </View>
       <View style={{alignItems:'center',marginTop:'5%'}}>
      <FlatList
      data={Award}
       horizontal={true}
       scrollEnabled={false}
    style={{}}
      renderItem={({ item, index }) => {
        return (
           <TouchableOpacity style={{margin:3,marginLeft:9}}>
           <ImageBackground  imageStyle={{borderRadius:10}} source={item.images} style={{width:width/3.5,height:height/5.4}}>
           <Text style={{fontSize:18,color:' #FFF',fontWeight:'600',textAlign:'center'}}>{item.prices}</Text>
          <Image source={item.reward} style={{width:107,height:107,alignSelf:'center',marginTop:6}}/>
          
        <ImageBackground source={item.color} style={{width:57,height:22,alignSelf:'center',justifyContent:'center'}}>
        <Text style={{fontSize:10,color:'#FFF',fontWeight:'600',alignSelf:'center'}}>{item.text}</Text>

        </ImageBackground>

           </ImageBackground>
           </TouchableOpacity>

        )
      }}

      />
      </View>
      </View>
    )
}


const CompetitionAround = ({ route, navigation }) => {
    console.log(route.params.abhi)
    return (
        <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>

            <ImageBackground source={route.params.abhi.plugin} style={{ flex: 1, width: '100%', height: 401 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: "rgba(255, 255, 255, 0.2)", marginTop: '10%', marginLeft: '6%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        <Decrease />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: "rgba(255, 255, 255, 0.2)", marginTop: '10%', marginRight: '5%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Share />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', position: 'absolute', top: '80%', width: "100%", justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#FFF', fontWeight: '600', marginLeft: '5%' }}>19th July </Text>

                    <View style={{ flexDirection: 'row', width: width / 3.2, height: 41, backgroundColor: '#FFF', borderRadius: 10, marginRight: '4%', justifyContent: "center", alignItems: "center" }}>
                        <Basket />
                        <Text style={{ fontSize: 12, color: '#F26635', fontWeight: '500', marginLeft: '6%' }}>
                            Rugby
                        </Text>

                    </View>
                </View>
            </ImageBackground>

            <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30, backgroundColor: 'white', marginBottom: '24%' }}>
                <View style={{ marginTop: 15, marginLeft: '6%' }}>
                    <Text style={{ fontSize: 22, color: '#01073D', fontWeight: '600' }}>Hoops Showdown</Text>
                    <View style={{ marginTop: 3, flexDirection: 'row' }}>
                        <Race />
                        <Text style={{ fontSize: 14, color: '#787878', marginLeft: 3, fontWeight: '300' }}>Victory Arena, Riverside City</Text>
                    </View>
                </View>

                <View style={{ marginTop: '6%', marginLeft: '6%', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 170, height: 53,elevation:3, backgroundColor: '#ECEDFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Gather />
                            <Text style={{ fontSize: 14, color: 'rgba(60, 69, 218, 1)', fontWeight: '500', marginLeft: '9%' }}>32 Participants</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 170, height: 53,elevation:3, backgroundColor: '#ECFFFE', marginLeft: '4%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Clock />
                            <Text style={{ fontSize: 14, color:'#49AAA5', fontWeight: '500', marginLeft: '9%' }}>9 AM to 12 PM</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Features/>
                <Discription/>
              <Awards/> 

              <View style={{ marginTop: '6%', marginLeft: '6%' }}>
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
        <Downtxt/>
        </SafeAreaView>

    )
}

export default CompetitionAround

const styles = StyleSheet.create({
    FeaturesView: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%'
      },
      txt:
      { fontSize: 12, color: '#01073D', marginLeft: '6%' },
      
    txtSeating: { fontSize: 12, color: '#01073D', marginRight: '6%' },
})