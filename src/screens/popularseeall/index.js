import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, FlatList, ImageBackground, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'


import Decrease from '../../../assets/images/llll.svg';
import { inlineStyles } from 'react-native-svg';
import { Popular, Venue } from '../../utils/mocks';
import Time from '../../../assets/images/time.svg';
import Go from '../../../assets/images/go.svg';


const { width, height } = Dimensions.get('screen');


const PopularSeeAll = ({ navigation }) => {
   // const [selected, setSelected] = useState(9);
    return (
        <ScrollView style={styles.MAIN_CONTAINER}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 50, width: 50, backgroundColor: 'white', elevation: 2, marginTop: '10%', marginLeft: '6%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Decrease />

                </TouchableOpacity>
                <Text style={{ fontSize: 22, color: '#01073D', fontWeight: '600', marginTop: '9%', marginRight: '25%' }}>Popular Competition</Text>

            </View>


            <View style={{}}>
                <FlatList

                    data={Popular}
                    style={{ marginLeft: '6%', marginTop: '6%', marginBottom: 10 }}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{}}>
                                <TouchableOpacity key={index} style={{ width: width / 2.3, borderRadius: 10, height: height / 3.3, backgroundColor: 'white', margin: 6, elevation: 3 }}>
                                    <ImageBackground borderRadius={10} source={item.images} style={{ width: width / 2.4, height: height / 4.2, marginTop: 3, marginLeft: 4, borderRadius: 10 }}>
                                    <Image source={item.background} style={{ width: 33, height:20.09, marginLeft: '75%', marginTop: 3 }} />

                                     

                                        <View style={{position:'absolute',top:'89%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                                            <Text style={{fontSize:10,color:'rgba(219, 219, 219, 1)',marginLeft:5}}>19th July</Text>
                                               <View style={{ width:62, height: 19, backgroundColor: '#2596be',borderTopLeftRadius:8,borderTopRightRadius:1,borderBottomRightRadius:10, opacity: 0.9,justifyContent:'center',marginTop:4}}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Time style={{marginLeft:5}} />
                                                <Text style={{ fontSize: 9, color: 'white',marginLeft:4 }}>{item.title}</Text>
                                            </View>
                                        </View>
                                        </View>


                                    </ImageBackground>

                                    <Text style={{ fontSize: 15, color: '#01073D', fontWeight: '700', marginLeft:'4%',marginTop:'5%' }}>{item.position}</Text>
                                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:'4%',marginTop:'3%'}}>
                                    <Go />
                                    <Text style={{ fontSize: 10, color: 'rgba(82, 82, 82, 0.80)',fontWeight:400, marginLeft:3 }}>{item.texts}</Text>

                                    </View>

                                    {/* <View style={{ height: 50, marginLeft: 5, backgroundColor: 'white', marginTop: '1%', width: '95%' }}>
                                        <Text style={{ fontSize: 15, color: '#01073D', fontWeight: '700', marginLeft: 2 }}>{item.position}</Text>

                                        <View style={{ marginTop: 2, marginLeft: 2, flexDirection: 'row' }}>

                                           
                                            <Text style={{ fontSize: 10, color: '#787878', marginLeft: 1 }}>{item.texts}</Text>

                                        </View>
                                    
                                    </View> */}

                                </TouchableOpacity>
                            </View>
                        )

                    }}
                />
            </View>


        </ScrollView>
    )
}

export default PopularSeeAll;

const styles = StyleSheet.create({
    MAIN_CONTAINER: {
        flex: 1, backgroundColor: '#FFFFFF'
    },

    BACKGROUND_VIEW: { backgroundColor: '' }

}) 