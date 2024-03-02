import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Photo = require('../../../assets/images/logo.png');
const Logo = require('../../../assets/images/eyes.png');
const Logo1 = require('../../../assets/images/hide.png');
const Photo1 = require('../../../assets/images/this.png');
const Photo2 = require('../../../assets/images/apple.png');
const Photo3 = require('../../../assets/images/phone.png');
const Photo4 = require('../../../assets/images/face.png')
const SignUp = ({navigation}) => {
    const [image, setImage] = useState(true);


    const ImageShow = () => {
        setImage(!image)
    }

    return (
        <ScrollView>
            <View style={styles.MainContainer}>
                <View style={styles.ImgHeight}>
                    <Image source={Photo} style={styles.img} />
                </View>

                <View style={styles.WelcomeView}>
                    <Text style={styles.Txt}>Welcome Back !</Text>
                    <Text style={styles.TxtSign}>Sign in</Text>
                </View>

                <View style={styles.BoxesView}>
                    <View style={styles.BoxesWidth}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/letter.png')} resizeMode='contain' style={styles.Emailimg} />

                            <TextInput placeholder='Email' placeholderTextColor='black' style={styles.EmailTextInput} />
                        </View>

                    </View>

                </View>

                <View style={styles.BoxesViewSec}>
                    <View style={styles.BoxesWidth}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/lock.png')} resizeMode='contain' style={styles.Emailimg} />

                            <TextInput placeholder='Password' placeholderTextColor='black' style={styles.PasswordTxtInput} secureTextEntry={image} />
                            <TouchableOpacity onPress={ImageShow}>
                                <Image source={image ? Logo : Logo1} resizeMode='contain' style={styles.EyesHide} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate('forgetpassword')}>
                <Text style={styles.ForgetTxt}>Forget Password?</Text>
                </TouchableOpacity>

                <View style={{ marginTop: '20%' }}>
                    <TouchableOpacity style={styles.TouchableOpacityView}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: '13%', marginLeft: '9%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.FirstLineView}>
                        </View>
                        <Text style={styles.OrTxt}>OR</Text>
                        <View style={styles.SecondLineView}>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: '6%', alignItems: 'center' }}>
                    <Text style={styles.SignUpText}>Sign up with</Text>
                </View>

                <View style={styles.ImgView}>
                    <TouchableOpacity>
                        <Image source={Photo1} style={{ width: 68, resizeMode: 'contain', height: 93, top: 4 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Photo2} style={styles.ImgPhoto2} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Photo3} style={styles.ImgPhoto2} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Photo4} style={styles.ImgPhoto2} />
                    </TouchableOpacity>
                </View>

                <View style={styles.GetStartedView}>
                    <Text style={styles.AccountTxt}>Dont have an Account ?</Text>
                    <TouchableOpacity>
                    <Text style={styles.GetTxt}> Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}
export default SignUp

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1, backgroundColor: '#D8EAFE'
    },
    ImgHeight: {
        marginTop: '14%', alignItems: 'center'
    },
    img: { width: 100, height: 70 },
    WelcomeView: {
        alignItems: 'center', marginTop: '8%'
    },
    Txt: {
        fontSize: 30, fontWeight: '600', color: '#3C45DA', fontFamily: 'Italiana-Regular.ttf'
    },
    TxtSign: {
        fontSize: 22, fontWeight: '600', color: '#01073D'
    },
    BoxesView: {
        marginTop: '15%', alignItems: 'center'
    },
    BoxesViewSec: { marginTop: '4%', alignItems: 'center' },

    BoxesWidth: { width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 },

    Emailimg: { width: 20, height: 23, left: 13, top: 9 },
    EmailTextInput: { width: '87%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 },
    PasswordTxtInput: { width: '75%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 },
    EyesHide: { width: 20, height: 22, top: 12, left: 10, tintColor: 'rgba(48, 48, 48, 0.5)' },
    ForgetTxt: { fontSize: 14, color: 'black', marginTop: 10, marginLeft: 24, opacity: 0.6 },
    TouchableOpacityView: { width: '90%', marginLeft: '5%', height: 60, backgroundColor: '#3C45DA', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
    FirstLineView: { width: '30%', height: 0.8, backgroundColor: 'black', opacity: 0.3, marginLeft: '7%' },
    OrTxt: { fontSize: 22, color: 'black', fontWeight: '400', marginTop: -14, marginLeft: 10, opacity: 0.6 },
    SecondLineView: { width: '30%', height: 0.8, backgroundColor: 'black', opacity: 0.3, marginLeft: '3%' },
    SignUpText: { fontSize: 20, fontWeight: 'bold', fontFamily: 'SemiBold', color: '#303030', opacity: 0.7 },
    ImgView: { flexDirection: 'row', marginBottom: '10%', marginTop: '10%', marginLeft: '10%' },
    ImgPhoto2: { width: 68, height: 93, resizeMode: 'contain', marginLeft: 18, top: 4 },
    GetStartedView: { flexDirection: 'row', marginTop: 20, marginLeft: 20, marginBottom: '30%', alignSelf: 'center' },
    AccountTxt: { fontSize: 19, color: 'black', fontWeight: '300', opacity: 0.9 },
    GetTxt: { fontSize: 19, color: '#4168EA', fontWeight: '500', opacity: 0.9 }

})  