import { Image, ScrollView, StyleSheet, Text, TextInput,Pressable, TouchableOpacity, View, Modal, Dimensions, Alert, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, { useState } from 'react'
// import PhoneInput from 'react-native-phone-number-input';
import PhoneInput from "react-native-phone-number-input";
const { width, height } = Dimensions.get('screen');



const Logo = require('../../../assets/images/eyes.png');
const Logo1 = require('../../../assets/images/hide.png');
const Logo2 = require('../../../assets/images/box.png')
const Logo3 = require('../../../assets/images/approved.png')

const Login = ({navigation}) => {
    const [image, setImage] = useState(true);
    const [imageNext, setImageNext] = useState(true);
    const [check, setUnchecked] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [phonenumber, setPhonenumber] = useState('');


    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const ImageShow = () => {
        setImage(!image)
    }
    const ImageShowNext = () => {
        setImageNext(!imageNext)
    }

    const ConditionChecked = () => {
        setUnchecked(!check)
    }
    return (
        <ScrollView>
        
             <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                   
                    setModalVisible(!modalVisible);
                }}>
                    <Pressable style={{height:height,position:'absolute',top:0,bottom:0,right:0,left:0,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.5)'}}>
                      <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>

                      </View>

                      </Pressable>

                <View style={{ marginTop: '60%', height: 380, width: '89%', alignSelf: 'center', backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, color: '#01073D', fontWeight: '600', marginTop: '10%' }}>Sign Up With Mobile Number</Text>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Image source={require('../../../assets/images/cross.png')} resizeMode='contain' style={{ width: 37, height: 37, left: 30, top: 20 }} />
                        </Pressable>
                        <View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 14, color: '#A0A0A0', marginTop: '2%' }}>Please enter your mobile no to OTP for sign up</Text>

                    <View style={{ marginTop: '10%', alignItems: 'center' }}>
                        <View style={{ width: '90%', height: 50, backgroundColor: '#FFF', elevation: 10, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row' }}>

                                <Image source={require('../../../assets/images/geet.png')} resizeMode='contain' style={{ width: 20, height: 23, left: 13, top: 9 }} />

                                <TextInput placeholder='Full Name' placeholderTextColor='black' style={{ width: '87%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 }} />
                            </View>


                        </View>

                    </View>

                    <View style={{ marginTop: '5%', alignItems: 'center' }}>
                    <KeyboardAvoidingView enabled={false}>
                        <PhoneInput
                            defaultValue={phonenumber}
                            defaultCode='IN'
                            layout='first'
                            withShadow
                            textContainerStyle={{ paddingVertical: 0 }}
                            onChangeFormattedText={text => { setPhonenumber(text) }}
                        />

</KeyboardAvoidingView>
                    </View>



                    <TouchableOpacity  style={{ backgroundColor: '#389BD5', width: '90%', height: 60, marginTop: 20, borderRadius: 20 }}>
                        <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', marginTop: 16, fontWeight: '600' }}>Submit</Text>

                    </TouchableOpacity>




                    {/* <View style={{ marginTop: '4%' }}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ fontSize: 19, color: 'red', fontWeight: '400' }}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View> */}

                </View>

            </Modal>
</TouchableWithoutFeedback> 

            <View style={{ flex: 1, backgroundColor: '#D8EAFE' }}>

                <View style={{ marginTop: '14%', alignItems: 'center' }}>
                    <Image source={require('../../../assets/images/logo.png')} style={{ width: 100, height: 70 }} />
                </View>

                <View style={{ alignItems: 'center', marginTop: '8%' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', color: '#3C45DA' }}>Welcome !</Text>
                    <Text style={{ fontSize: 22, fontWeight: '600', color: '#01073D' }}>Get Started</Text>


                </View>

                <View style={{ marginTop: '10%', alignItems: 'center' }}>
                    <View style={{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/name.png')} style={{ width: 20, height: 23, left: 13, top: 9 }} />

                            <TextInput placeholder='Full Name' placeholderTextColor='black' style={{ width: '87%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 }} />
                        </View>


                    </View>

                </View>
                <View style={{ marginTop: '4%', alignItems: 'center' }}>
                    <View style={{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/letter.png')} resizeMode='contain' style={{ width: 20, height: 23, left: 13, top: 9 }} />

                            <TextInput placeholder='Email' placeholderTextColor='black' style={{ width: '87%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 }} />
                        </View>


                    </View>

                </View>
                <View style={{ marginTop: '4%', alignItems: 'center' }}>
                    <View style={{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/lock.png')} resizeMode='contain' style={{ width: 20, height: 23, left: 13, top: 9 }} />

                            <TextInput placeholder='Password' placeholderTextColor='black' style={{ width: '75%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 }} secureTextEntry={image} />
                            <TouchableOpacity onPress={ImageShow}>
                                <Image source={image ? Logo : Logo1} resizeMode='contain' style={{ width: 20, height: 22, top: 12, left: 10, tintColor: 'rgba(48, 48, 48, 0.5)' }} />
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
                <View style={{ marginTop: '4%', alignItems: 'center' }}>
                    <View style={{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/lock.png')} resizeMode='contain' style={{ width: 20, height: 23, left: 13, top: 9 }} />

                            <TextInput placeholder='Confirm Password' placeholderTextColor='black' style={{ width: '75%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 }} secureTextEntry={imageNext} />

                            <TouchableOpacity onPress={ImageShowNext}>
                                <Image source={imageNext ? Logo : Logo1} resizeMode='contain' style={{ width: 20, height: 22, top: 12, left: 10, tintColor: 'rgba(48, 48, 48, 0.5)' }} />
                            </TouchableOpacity>


                        </View>


                    </View>

                </View>

                <View style={{ marginTop: 7, marginLeft: 20 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={ConditionChecked}>
                            <Image source={check ? Logo2 : Logo3} style={{ width: 25, height: 25, tintColor: 'grey' }} />

                        </TouchableOpacity>

                        <Text style={{ fontSize: 14, color: 'black', marginTop: 4, marginLeft: 3, fontWeight: '400' }}>I accept all Terms & Conditions</Text>
                    </View>
                </View>

                <View style={{ marginTop: '9%', marginLeft: 4, alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={{ width: '90%', height: 50, backgroundColor: '#3C45DA', borderRadius: 10, justifyContent: 'center', opacity: 0.9 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center' }}>Sign Up</Text>

                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: '17%', marginLeft: '9%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '30%', height: 0.8, backgroundColor: 'black', opacity: 0.3, marginLeft: '7%' }}>
                        </View>
                        <Text style={{ fontSize: 22, color: 'black', fontWeight: '500', marginTop: -14, marginLeft: 10, opacity: 0.6 }}>OR</Text>
                        <View style={{ width: '30%', height: 0.8, backgroundColor: 'black', opacity: 0.3, marginLeft: '3%' }}>
                        </View>
                    </View>

                </View>

                <View style={{ marginTop: '6%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', opacity: 0.7 }}>Sign up with</Text>
                </View>




                <View style={{ flexDirection: 'row', marginBottom: '10%', marginTop: '10%' }}>

                    <Image source={require('../../../assets/images/this.png')} style={{ width: 68, resizeMode: 'contain', height: 93, marginLeft: 30, top: 4 }} />
                    <Image source={require('../../../assets/images/apple.png')} style={{ width: 68, height: 93, resizeMode: 'contain', marginLeft: 18, top: 5 }} />
                    <TouchableOpacity onPress={() => [setModalVisible(true), toggleModal]}>
                        <Image source={require('../../../assets/images/phone.png')} style={{ width: 68, height: 95, resizeMode: 'contain', marginLeft: 18, marginTop: 3 }} />
                    </TouchableOpacity>
                    <Image source={require('../../../assets/images/face.png')} style={{ width: 68, height: 93, resizeMode: 'contain', marginLeft: 18, marginTop: 3 }} />
                  

                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, marginBottom: '30%', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 19, color: 'black', fontWeight: '300' }}>Already have an Account ?</Text>
                    <Text style={{ fontSize: 19, color: '#4168EA', fontWeight: '500' }}> Sign up</Text>
                </View>



            </View>




        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({})


