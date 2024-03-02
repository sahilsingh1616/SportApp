import { StyleSheet, Text, SafeAreaView, View, ImageBackground, ScrollView, TouchableOpacity, Dimensions, FlatList, Image, Modal, TouchableWithoutFeedback, Pressable, TextInput, KeyboardAvoidingView, PhoneInput } from 'react-native'
import React, { useState } from 'react'

import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('screen');
import Decrease from '../../../assets/images/dec.svg';
import Star from '../../../assets/images/star.svg';
import Race from '../../../assets/images/race.svg';
import Time from '../../../assets/images/time.svg';
import Clear from '../../../assets/images/patel.svg';
import DECREASE from '../../../assets/images/oooo.svg';
import Ravan from '../../../assets/images/ravan.svg';
import Guts from '../../../assets/images/aaaa.svg';
import Jolyne from '../../../assets/images/bbbb.svg';
import Killua from '../../../assets/images/cccc.svg';

import { Rating } from 'react-native-ratings';

import Calender from '../../../assets/images/gggg.svg';
import { ARENA, CLICK, NEWEST, PRIME, Reebok } from '../../utils/mocks';


const DownTown = ( {navigation}) => {
    return (
        <View style={{ backgroundColor: 'white', elevation: 10, position: 'absolute', bottom: 0, paddingVertical: 20, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, flexDirection: 'row', justifyContent: "space-between" }}>
            <View style={{ flexDirection: 'row', width: '34%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 42, color: '#3C45DA', fontWeight: '600' }}>$195.</Text>
                <Text style={{ fontSize: 32, color: '#3C45DA', fontWeight: '500', marginTop: 8 }}>00</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('VenueBooked')} style={{ width: '50%', height: 50, borderRadius: 10, backgroundColor: '#3C45DA', marginRight: '10%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '##FFF', fontWeight: '600' }}>Book Venue</Text>

            </TouchableOpacity>
        </View>
    )
}


const VenueDetails = ({ route, navigation }) => {
    const [Select, setSelectedCol] = useState(0);
    const [Seating, setSeating] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const FinalTouch = () => {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesListStyle} >
                {PRIME.map((category, index) => (
                    <View style={{ width: 83, height: 50, backgroundColor: 'white', borderBottomWidth: 2, borderColor: '#CDCDCD', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity key={index} onPress={() => setSelectedCol(index)}>
                            <View style={{ height: 51, borderBottomWidth: 1, borderColor: Select == 0 ? '#3C45DA' : '#CDCDCD', paddingTop: 13 }}>
                                <Text style={{ fontSize: 22, color: Select == 0 ? '#3C45DA' : '#CDCDCD' }}>{category.txt}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity key={index} onPress={() => setSelectedCol(index)}>
                            <View style={{ height: 51, borderBottomWidth: 1, borderColor: Select == 1 ? '#3C45DA' : '#CDCDCD', paddingTop: 13 }}>
                                <Text style={{ fontSize: 22, color: Select == 1 ? '#3C45DA' : '#CDCDCD' }}>{category.txt1}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                ))}

            </ScrollView>
        )
    }
    console.log(route.params.singh)
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <ImageBackground source={route.params.singh.plugin} style={{ width: '100%', height: 401 }}>
                    <TouchableOpacity style={{ zIndex: 1000, height: 50, width: 50, backgroundColor: "rgba(255, 255, 255, 0.20)", marginTop: '10%', marginLeft: '6%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        <Decrease />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', position: 'absolute', top: '82%', left: 15, width: '100%', justifyContent: 'space-between' }}>
                        <View style={{ width: '30%', height: 33, backgroundColor: '#2596be', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12, color: 'white' }}>View on Map</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 22, color: 'white', alignItems: 'flex-end', marginRight: '10%', marginTop: 10 }}>4.5</Text>
                            <Star style={{ marginTop: 10 }} />
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ width: width, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30, backgroundColor: 'white',marginBottom:'21%' }}>
                    <View style={{ marginTop: 15, marginLeft: '6%' }}>
                        <Text style={{ fontSize: 22, color: '#01073D', fontWeight: '600' }}>MeadowView Arena</Text>
                        <View style={{ marginTop: 3, flexDirection: 'row' }}>
                            <Race />
                            <Text style={{ fontSize: 14, color: '#787878', marginLeft: 3, fontWeight: '300' }}>Silverwood City, Chicago , IL</Text>
                        </View>
                    </View>

                    <View>
                        <FinalTouch />

                        <View>
                            {Select == 1 && (
                                <View>
                                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                                        <Modal
                                            animationType="slide"
                                            transparent={true}
                                            visible={modalVisible}
                                            onRequestClose={() => {

                                                setModalVisible(!modalVisible);
                                            }}>
                                            <Pressable style={{ height: height, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.5)' }}>
                                                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                                                </View>

                                            </Pressable>

                                            <View style={{ marginTop: '20%', height:height/1.5, width: '91%', alignSelf: 'center', backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                                              
                                                    <Text style={{ fontSize: 20, color: '#01073D', fontWeight: '600', marginTop: '10%' }}>Add a Review</Text>
                                                    <View style={{marginTop:'5%'}}>
                                                    <Rating
                                                            type='star'
                                                            //ratingColor='#3498db'
                                                            //ratingBackgroundColor='#c8c7c8'
                                                            starContainerStyle={{}}

                                                            ratingCount={5}
                                                            imageSize={36}
                                                            style={{ marginLeft: '3%', marginTop: 4 }}
                                                        />
                                                    </View>

                                                    <View style={{width:'90%',height:50,backgroundColor:'#F7F7F7',marginTop:'10%',borderRadius:10,elevation:0.9}}>
                                                    <TextInput placeholderTextColor='#787878' placeholder='Title' style={{fontSize:16,color:'black',paddingLeft:'5%'}}/>

                                                    </View>

                                                    <View style={{width:'90%',height:height/4.2,backgroundColor:'#F7F7F7',marginTop:'5%',borderRadius:10,elevation:0.9}}>
                                                    <TextInput placeholderTextColor='#787878' placeholder='Feedback' style={{fontSize:16,color:'black',paddingLeft:'5%'}} multiline/>

                                                    </View>

                                                    <TouchableOpacity style={{width:'90%',height:60,backgroundColor:'red',marginTop:'9%',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={{fontSize:18,color:'#FFFFFF',fontWeight:'600'}}>Submit</Text>

                                                    </TouchableOpacity>
                                                     <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                                                    <Text style={{fontSize:18,color:'#FF5757',marginTop:'4%',textDecorationLine:'underline'}}>Cancel</Text>
                                                    </TouchableOpacity>
    
                                            </View>

                                        </Modal>
                                    </TouchableWithoutFeedback>
                                    <View style={styles.REVIEW_STYLES}>
                                        <View style={styles.REVIEW_VIEW}>
                                            <Text style={{ fontSize: 34, color: '#01073D', fontWeight: '600' }}>4.5</Text>
                                            <Rating
                                                type='star'
                                                //ratingColor='#3498db'
                                                //ratingBackgroundColor='#c8c7c8'
                                                starContainerStyle={{ padding: 10 }}

                                                ratingCount={5}
                                                imageSize={23}


                                                style={{ paddingVertical: 2, paddingHorizontal: 13 }}
                                            />

                                        </View>
                                        <Text style={styles.BASEDTXT}>(Based on 95 Reviews)</Text>


                                        <View style={styles.EXCELLENT_VIEW}>
                                            <Text style={styles.SETTLETXT}>Excellent</Text>

                                            <Progress.Bar color='yellow' animated={true} progress={0.9} width={200} height={12} style={{ marginRight: '3%' }} />
                                        </View>

                                        <View style={styles.GOOD_VIEW}>
                                            <Text style={styles.SETTLETXT}>Good</Text>

                                            <Progress.Bar color='yellow' animated={true} progress={0.6} width={200} height={12} style={{ marginRight: '3%' }} />
                                        </View>

                                        <View style={styles.GOOD_VIEW}>
                                            <Text style={styles.SETTLETXT}>Average</Text>

                                            <Progress.Bar color='yellow' animated={true} progress={0.3} width={200} height={12} style={{ marginRight: '3%' }} />
                                        </View>

                                        <View style={styles.GOOD_VIEW}>
                                            <Text style={styles.SETTLETXT}>Below Average</Text>

                                            <Progress.Bar color='yellow' animated={true} progress={0.2} width={200} height={12} style={{ marginRight: '3%' }} />
                                        </View>
                                        <View style={styles.GOOD_VIEW}>
                                            <Text style={styles.SETTLETXT}>Poor</Text>

                                            <Progress.Bar color='yellow' animated={true} progress={0.1} width={200} height={12} style={{ marginRight: '3%' }} />
                                        </View>



                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Clear style={{ marginLeft: '20%' }} />
                                            <Text style={{ fontSize: 14, color: '#01073D', marginLeft: '10%', fontWeight: '600' }}>Add Review</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => [setModalVisible(true), toggleModal]}>
                                            <DECREASE style={{ marginRight: '6%', marginTop: 5 }} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ marginTop: '13%', marginLeft: '6%' }}>
                                        <Text style={{ fontSize: 22, color: '#01073D', fontWeight: '600' }}>All Reviews (95)</Text>
                                        <View style={{ width: '98%', height: 0.4, backgroundColor: '#787878', marginTop: '5%' }}>

                                        </View>
                                    </View>

                                    <View style={{ width: '94%', height: height / 5, borderRadius: 10, backgroundColor: 'white', elevation: 3, marginTop: '5%', alignSelf: 'center' }}>
                                        <View style={{ flexDirection: 'row', width: '100%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Ravan style={{ marginLeft: 10, marginTop: 3 }} />
                                                <View style={{ width: '85%' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#323232', marginLeft: '3%', marginTop: '2%' }}>Raven</Text>
                                                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                                        <Rating
                                                            type='star'
                                                            //ratingColor='#3498db'
                                                            //ratingBackgroundColor='#c8c7c8'
                                                            starContainerStyle={{}}

                                                            ratingCount={5}
                                                            imageSize={23}
                                                            style={{ marginLeft: '3%', marginTop: 4 }}
                                                        />
                                                        <Text style={{ fontSize: 12, color: '#323232', marginTop: 4 }}>12/10/2022</Text>
                                                    </View>
                                                </View>



                                            </View>

                                        </View>
                                        <View style={{ marginLeft: '19%', marginTop: '4%' }}>
                                            <Text style={{ fontSize: 12, fontWeight: '500', color: 'black' }}>COOL!</Text>
                                            <Text style={{ fontSize: 13, color: '#323232', lineHeight: 20, marginTop: 5 }}>Lorem ipsum dolor sit amet consectetur. Dictumst pharetra{'\n'}commodo faucibus condimentum senectus. Aliquet magnis{'\n'}malesuada imperdiet vestibulum morbi tincidunt tortor{'\n'}gravida ut.</Text>
                                        </View>



                                    </View>

                                    <View style={{ width: '94%', height: height / 5, borderRadius: 10, backgroundColor: 'white', elevation: 3, marginTop: '5%', alignSelf: 'center' }}>
                                        <View style={{ flexDirection: 'row', width: '100%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Guts style={{ marginLeft: 10, marginTop: 3 }} />
                                                <View style={{ width: '85%' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#323232', marginLeft: '3%', marginTop: '2%' }}>Guts</Text>
                                                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                                        <Rating
                                                            type='star'
                                                            //ratingColor='#3498db'
                                                            //ratingBackgroundColor='#c8c7c8'
                                                            starContainerStyle={{}}

                                                            ratingCount={5}
                                                            imageSize={23}
                                                            style={{ marginLeft: '3%', marginTop: 4 }}
                                                        />
                                                        <Text style={{ fontSize: 12, color: '#323232', marginTop: 4 }}>12/10/2022</Text>
                                                    </View>
                                                </View>



                                            </View>

                                        </View>
                                        <View style={{ marginLeft: '19%', marginTop: '4%' }}>
                                            <Text style={{ fontSize: 12, fontWeight: '500', color: 'black' }}>COOL!</Text>
                                            <Text style={{ fontSize: 13, color: '#323232', lineHeight: 20, marginTop: 5 }}>Lorem ipsum dolor sit amet consectetur. Dictumst pharetra{'\n'}commodo faucibus condimentum senectus. Aliquet magnis{'\n'}malesuada imperdiet vestibulum morbi tincidunt tortor{'\n'}gravida ut.</Text>
                                        </View>



                                    </View>

                                    <View style={{ width: '94%', height: height / 5, borderRadius: 10, backgroundColor: 'white', elevation: 3, marginTop: '5%', alignSelf: 'center' }}>
                                        <View style={{ flexDirection: 'row', width: '100%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Jolyne style={{ marginLeft: 10, marginTop: 3 }} />
                                                <View style={{ width: '85%' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#323232', marginLeft: '3%', marginTop: '2%' }}>Jolyne</Text>
                                                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                                        <Rating
                                                            type='star'
                                                            //ratingColor='#3498db'
                                                            //ratingBackgroundColor='#c8c7c8'
                                                            starContainerStyle={{}}

                                                            ratingCount={5}
                                                            imageSize={23}
                                                            style={{ marginLeft: '3%', marginTop: 4 }}
                                                        />
                                                        <Text style={{ fontSize: 12, color: '#323232', marginTop: 4 }}>12/10/2022</Text>
                                                    </View>
                                                </View>



                                            </View>

                                        </View>
                                        <View style={{ marginLeft: '19%', marginTop: '4%' }}>
                                            <Text style={{ fontSize: 12, fontWeight: '500', color: 'black' }}>COOL!</Text>
                                            <Text style={{ fontSize: 13, color: '#323232', lineHeight: 20, marginTop: 5 }}>Lorem ipsum dolor sit amet consectetur. Dictumst pharetra{'\n'}commodo faucibus condimentum senectus. Aliquet magnis{'\n'}malesuada imperdiet vestibulum morbi tincidunt tortor{'\n'}gravida ut.</Text>
                                        </View>



                                    </View>

                                    <View style={{ width: '94%', height: height / 5, borderRadius: 10, backgroundColor: 'white', elevation: 3, marginTop: '5%', alignSelf: 'center' }}>
                                        <View style={{ flexDirection: 'row', width: '100%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Killua style={{ marginLeft: 10, marginTop: 3 }} />
                                                <View style={{ width: '85%' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#323232', marginLeft: '3%', marginTop: '2%' }}>Killua</Text>
                                                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                                        <Rating
                                                            type='star'
                                                            //ratingColor='#3498db'
                                                            //ratingBackgroundColor='#c8c7c8'
                                                            starContainerStyle={{}}

                                                            ratingCount={5}
                                                            imageSize={23}
                                                            style={{ marginLeft: '3%', marginTop: 4 }}
                                                        />
                                                        <Text style={{ fontSize: 12, color: '#323232', marginTop: 4 }}>12/10/2022</Text>
                                                    </View>
                                                </View>



                                            </View>

                                        </View>
                                        <View style={{ marginLeft: '19%', marginTop: '4%' }}>
                                            <Text style={{ fontSize: 12, fontWeight: '500', color: 'black' }}>COOL!</Text>
                                            <Text style={{ fontSize: 13, color: '#323232', lineHeight: 20, marginTop: 5 }}>Lorem ipsum dolor sit amet consectetur. Dictumst pharetra{'\n'}commodo faucibus condimentum senectus. Aliquet magnis{'\n'}malesuada imperdiet vestibulum morbi tincidunt tortor{'\n'}gravida ut.</Text>
                                        </View>



                                    </View>



                                </View>
                            )}
                        </View>
                        {Select == 0 && (
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 180, height: 53, backgroundColor: '#ECEDFF', elevation: 2, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={require('../../../assets/images/main.png')} style={{ width: 32, height: 20.3, resizeMode: 'contain' }} />
                                            <Text style={{ fontSize: 14, color: '#3C45DA', marginTop: 2, marginLeft: 3 }}>250 Seating</Text>
                                        </View>

                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: 180, height: 53, backgroundColor: '#ECFFFE', elevation: 2, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={require('../../../assets/images/secmain.png')} style={{ width: 32, height: 20.3, resizeMode: 'contain' }} />
                                            <Text style={{ fontSize: 14, color: '#3C9D99', marginTop: 2, marginLeft: 3 }}>$200/Slot</Text>
                                        </View>

                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: '10%', marginLeft: '6%' }}>
                                    <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Features</Text>
                                </View>

                                <View style={styles.FeaturesView}>
                                    <Text style={styles.txt}>Seating</Text>
                                    <Text style={styles.txtSeating}>Ample Seating</Text>

                                </View>
                                <View style={styles.FeaturesView}>
                                    <Text style={styles.txt}>Parking</Text>
                                    <Text style={styles.txtSeating}>Security Measures</Text>

                                </View>
                                <View style={styles.FeaturesView}>
                                    <Text style={styles.txt}>Locker Rooms</Text>
                                    <Text style={styles.txtSeating}>Safety & Security</Text>

                                </View>
                                <View style={styles.FeaturesView}>
                                    <Text style={styles.txt}>Event Management</Text>
                                    <Text style={styles.txtSeating}>Venue Selection</Text>

                                </View>
                                <View style={{ marginTop: '10%', marginLeft: '6%' }}>
                                    <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Photos</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '6%' }}>
                                    <Image source={require('../../../assets/images/colors.png')} style={{ width: '46%', height: 205, borderRadius: 10 }} />
                                    <View style={{ flexDirection: 'column', width: '100%' }}>

                                        <Image source={require('../../../assets/images/color.png')} style={{ width: '46%', height: 96, marginLeft: 10, borderRadius: 10 }} />

                                        <Image source={require('../../../assets/images/colore.png')} style={{ width: '46%', height: 96, marginLeft: 10, borderRadius: 10, marginTop: 10 }} />
                                        <Text style={{ fontSize: 18, color: '#FFFFFF', position: 'absolute', top: '70%', left: '20%', fontWeight: '500' }}>+3 More</Text>

                                    </View>

                                </View>
                                <View style={{ marginTop: '10%', marginLeft: '6%' }}>
                                    <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Description</Text>

                                    <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '300', lineHeight: 26, marginTop: 10 }}>Lorem ipsum dolor sit amet consectetur. Sed sit vitae arcu{'\n'}platea elit pellentesque lorem purus. Habitasse at convallis a{'\n'}egestas massa tellus. Sit nibh proin eget elit placerat.{'\n'}Malesuada quis eget gravida ullamcorper elementum.placerat.{'\n'}Malesuada quis eget gravida ullamcorper elementum.{'\n'}placerat. Malesuada quis eget gravida ullamcorper{'\n'}elementum.placerat.</Text>
                                </View>

                                <View style={{ marginTop: '10%', marginLeft: '6%' }}>
                                    <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Date and Time</Text>
                                </View>


                                <View style={{ width: '90%', height: 60, backgroundColor: '#6870eb', borderRadius: 10, marginTop: '5%', justifyContent: 'space-between', alignSelf: 'center', flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', height: 60, marginTop: '5%' }}>
                                        <Calender style={{ marginLeft: '12%' }} />

                                        <Text style={{ fontSize: 14, color: '#FFFFFF', marginLeft: '5%' }}>Check Availability</Text>

                                    </View>
                                    <View style={{ backgroundColor: 'white', width: 48, borderRadius: 10, height: 48, justifyContent: 'center', alignItems: 'center', marginRight: '2%', marginTop: 5 }}>
                                        <Image source={require('../../../assets/images/hhhh.png')} style={{ width: 10, height: 18, tintColor: 'blue' }} />
                                    </View>

                                </View>
                                <View style={{ marginTop: '10%', marginLeft: '6%' }}>
                                    <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>You may also like</Text>
                                </View>

                                <View style={{ width: '100%', height: 360 }}>

                                    <FlatList
                                        data={NEWEST}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        style={{ marginLeft: 20 }}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <TouchableOpacity onPress={() => navigation.navigate('VenueDetail', { singh: item })} style={{ width: width - 170, height: height / 2.8, elevation: 3, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                                    <ImageBackground source={item.plugin} style={{ width: 206, height: 220, alignSelf: 'center', marginTop: 10 }}>
                                                        <Image source={item.background} style={{ width: 61, height: 27, position: 'absolute', left: '65%', top: 10 }} />
                                                        <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '87%', right: '47%' }}>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                <Time />
                                                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                                            </View>

                                                        </View>
                                                    </ImageBackground>
                                                    <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '600', marginLeft: 10, marginTop: 7 }}>{item.position}</Text>
                                                    <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row' }}>
                                                        <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                                        <Text style={{ fontSize: 20, color: '#787878', marginLeft: 3, marginTop: -1 }}>{item.Downtxt}</Text>
                                                    </View>

                                                    <View style={{ marginTop: 1, flexDirection: 'row' }}>

                                                        <Rating
                                                            type='star'
                                                            ratingColor='#3498db'
                                                            ratingBackgroundColor='#c8c7c8'
                                                            ratingCount={5}
                                                            imageSize={13}
                                                            style={{ paddingVertical: 2, paddingHorizontal: 10 }}
                                                        />

                                                        <Text style={{ fontSize: 10, color: '#787878', marginTop: 3 }}>(98 reviews)</Text>
                                                    </View>

                                                </TouchableOpacity>
                                            )
                                        }}
                                    />
                                </View>



                            </View>
                        )}
                    </View>

                </View>

            </ScrollView>
            <View>
                {Select == 0 && (
                    <DownTown navigation={navigation} />
                )

                }
            </View>






        </SafeAreaView>


    )
}

export default VenueDetails;

const styles = StyleSheet.create({
    categoriesListStyle: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    FeaturesView: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%'
    },
    txt:
        { fontSize: 12, color: '#01073D', marginLeft: '6%' },

    txtSeating: { fontSize: 12, color: '#01073D', marginRight: '6%' },

    REVIEW_STYLES: { backgroundColor: '#fff', elevation: 2, width: width - 30, borderRadius: 9, alignSelf: 'center', height: height /3.4 },
    REVIEW_VIEW: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '6%' },
    BASEDTXT: { fontSize: 16, color: '#787878', fontWeight: '500', textAlign: 'center' },
    SETTLETXT: { fontSize: 13, color: '#323232', marginLeft: '5%' },
    EXCELLENT_VIEW: { flexDirection: 'row', marginTop: '8%', justifyContent: 'space-between' },
    GOOD_VIEW: { flexDirection: 'row', marginTop: '4%', justifyContent: 'space-between' }
})



// <ImageBackground source={route.params.singh.plugin} style={{width:200,height:100}}>
// <Text style={{fontSize:11,color:'black'}}>
//     {route.params.singh.position}}
// </Text>

// </ImageBackground>