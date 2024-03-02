import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,Dimensions, FlatList, ImageBackground } from 'react-native'
import React,{useState,useRef} from 'react'
const { width, height } = Dimensions.get('screen');
import Carousel, { Pagination } from "react-native-snap-carousel";


import Face from '../../../assets/images/face.svg';
import Down from '../../../assets/images/down.svg';
import Scanner from '../../../assets/images/scanner.svg';
import Bell from '../../../assets/images/bell.svg';
import Cart from '../../../assets/images/cart.svg';
import { WELCOMESCREENIMAGE } from '../../utils/mocks';

import MotuMen from '../../../assets/images/motumenn.svg';

const ImagesGoesOn = ({ item }) => {
    return (

        <View>
            <View style={{height:430,width:290,alignItems:'center',marginTop:'6%'}}>
                <Image source={item?.image} style={{width:96,height:280,resizeMode:'contain'}} />
                {/* <MotuMen/> */}
            </View>
            
        </View>

    );
};
const SelectAim = ({navigation}) => {
   
    const [page,setPage]=useState(0);
    const ref = useRef();


  return (
    <ScrollView style={styles.MAINCONTAINER}>
    <View style={styles.TOPVIEW}>
      {/* <View style={{flexDirection:'row'}}> */}
      <View style={{ flexDirection: 'row' }}>
        <Face width={51.61} height={51.61} />
        <View>
          <Text style={styles.SAHILTXT}>Sahil Singh</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.PATHANKOTTXT}>#16 S,Pathankot...</Text>
            <Down style={{ marginTop: 4, marginLeft: 8 }} />
          </View>

        </View>
      </View>
      <View style={styles.THREEIMGVIEW}>
        <TouchableOpacity>
          <Scanner width={20.43} height={20.43} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Bell width={20.43} height={20.43} style={styles.BELLLEFT} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Cart width={20.43} height={20.43} style={styles.BELLLEFT} />
        </TouchableOpacity>
      </View>
    </View>


      <View style={{height:height/2}}>
      <ImageBackground imageStyle={{borderRadius:10}} source={page==0? WELCOMESCREENIMAGE[0].bckground:page==1? WELCOMESCREENIMAGE[1].bckground:WELCOMESCREENIMAGE[2].bckground} style={{width:290,height:430,alignSelf:'center'}}>
      <View style={{position:'absolute',width:290,height:height/1.2,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'700',color:'#FFF',marginTop:'-10%'}}>{page==0? WELCOMESCREENIMAGE[0].title:page==1?WELCOMESCREENIMAGE[1].title:WELCOMESCREENIMAGE[2].title}</Text>
      <Text style={{fontSize:14,color:'#FFF',textAlign:'center',width:190,marginTop:'3%'}}>{page==0? WELCOMESCREENIMAGE[0].discription:page==1?WELCOMESCREENIMAGE[1].discription:WELCOMESCREENIMAGE[2].discription}</Text>


      </View>
  
          <View>
    <Carousel
                    ref={ref}
                    onSnapToItem={(page) => setPage(page)}
                    layout={"default"}
                    data={WELCOMESCREENIMAGE}
                    renderItem={ImagesGoesOn}
                    sliderWidth={width}
                    itemWidth={width}
                    enableSnap={true}
                    disableIntervalMomentum={true}
                    removeClippedSubviews={true}
                    snapToInterval={1}
                // loop={true}
                // autoplay={true}

                />
                </View>
                </ImageBackground>

</View>

<View style={{alignItems:'center',marginTop:20}}>
    <Text style={{fontSize:28,color:'#3C45DA',fontWeight:'700'}}>Whats your Fitness aim?</Text>
</View>
<View style={{alignItems:'center',marginTop:10}}>
        
    <Text style={{fontSize:16,color:'#01073D',fontWeight:'400',width:200,textAlign:'center'}}>For us to choose the best fitness program for you</Text>
</View>

<View style={{alignItems:'center',marginTop:'5%'}}>
<TouchableOpacity onPress={()=>navigation.navigate('setupGym')} style={styles.TOUCHCONFIRM}>
         <Text style={styles.TXTCONFIRM}>Confirm</Text>
         </TouchableOpacity>
</View>
    </ScrollView>
  )
}

export default SelectAim

const styles = StyleSheet.create({
    MAINCONTAINER: {
        height:height, backgroundColor: '#D6E7F9'
        },
        TOPVIEW: {
          marginTop: '10%', marginLeft: 18, height: 70, width: '90%', justifyContent: 'space-between', flexDirection: 'row'
        },
        SAHILTXT: {
          fontSize: 14, color: '#01073D', fontWeight: '600', marginLeft: 8.61, marginTop: 3
        },
        PATHANKOTTXT: {
          fontSize: 12, color: '#787878', marginLeft: 8
        },
        THREEIMGVIEW: {
          flexDirection: 'row', marginTop: 2, marginRight: 10
        },
        BELLLEFT: { marginLeft: 10 },

        TOUCHCONFIRM:{width:width/1.1,height:height/15,backgroundColor:"#3C45DA",borderRadius:10,justifyContent:'center',alignItems:'center'},
        TXTCONFIRM:{fontSize:18,color:'#FFF',fontWeight:'600'},
})