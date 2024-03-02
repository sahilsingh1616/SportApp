import { StyleSheet, Text, View,Dimensions,ImageBackground, TouchableOpacity,Image,TextInput,ScrollView} from 'react-native'
import React,{useState} from 'react'
const { height, width } = Dimensions.get("screen")
import Greater from '../../../assets/images/Vector.svg';
import Changes from '../../../assets/images/sasta.svg';

const Logo = require('../../../assets/images/eyes.png');
const Logo1 = require('../../../assets/images/hide.png');
// const Logo2 = require('../../../assets/images/eyes.png');
// const Logo3 = require('../../../assets/images/hide.png');

const ChangePassword = ({navigation}) => {

    const [image, setImage] = useState(true);
    const [Secimage, setSecImage] = useState(true);



    const ImageShow = () => {
        setImage(!image)
    }

    
    const  SecImageShow = () => {
        setSecImage(!Secimage)
    }
  return (
  

      <ImageBackground source={require('../../../assets/images/image.png')}  style={{width:'100%',height:'100%',opacity:1}}>
           <ScrollView>
    
         <View style={styles.MainContainer}>
         <TouchableOpacity onPress={()=>navigation.goBack('verifyEmail')}>
     <View style={styles.GreaterImg}>
     <Greater/>
  
     </View>
     </TouchableOpacity>
     <View style={{marginLeft:'18%',marginTop:6}}>
     <Text style={styles.Txt}>Change Password</Text>
</View>
     </View>

     <View style={{marginTop:'30%',alignItems:'center'}}>
     <Changes width={237.93} height={256.11}/>

     </View>

     <View style={{marginTop:47.89,alignItems:'center'}}>
     <Text style={styles.SecontTxt}>Please enter your new</Text>
     <Text style={styles.passwordTxt}>password</Text>

     </View>

     <View style={{ marginTop:49, alignItems: 'center' }}>
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
                <View style={styles.BoxesViewSec1}>
                    <View style={styles.BoxesWidth}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/lock.png')} resizeMode='contain' style={styles.Emailimg} />

                            <TextInput placeholder='Confirm Password' placeholderTextColor='black' style={styles.PasswordTxtInput} secureTextEntry={Secimage} />
                            <TouchableOpacity onPress={SecImageShow}>
                                <Image source={ Secimage ? Logo : Logo1} resizeMode='contain' style={styles.EyesHide} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                </View>

                <View style={styles.SubmitView}>
                    <TouchableOpacity onPress={()=>navigation.navigate('verifyNumber')} style={styles.TouchBox}>
                        <Text style={styles.SubmitTxt}>Submit</Text>

                    </TouchableOpacity>

                </View>
              </ScrollView>
      </ImageBackground>
   
  )
}

export default ChangePassword

const styles = StyleSheet.create({
    MainContainer:{flexDirection:'row',marginTop:64,marginLeft:20},
    GreaterImg:{backgroundColor:'#FFFFFF',width:46,height:46,borderRadius:10,justifyContent:'center',alignItems:'center'},
    Txt:{fontSize:24,color:'#303030',fontFamily:'semibold',fontWeight:'500'},
    SecontTxt:{fontSize:18,color:'#01073D',fontWeight:'400',opacity:0.6},
    passwordTxt:{fontSize:18,color:'#01073D',fontWeight:'400',textAlign:'center',opacity:0.6},
    EmailView:{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 },
    img:{
         width: 20, height: 23, left: 13, top: 9 
    },
    TxtInput:{ width: '87%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 },
    SubmitView:{ marginTop:'20%', marginLeft: 4, alignItems: 'center',marginBottom:'20%' },
    TouchBox:{ width: '90%', height: 50, backgroundColor: '#3C45DA', borderRadius: 10, justifyContent: 'center', opacity: 0.9 },
    SubmitTxt:{ fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center' },
    BoxesViewSec: { marginTop: '4%', alignItems: 'center' },

    BoxesViewSec1: { marginTop: '3%', alignItems: 'center' },
    BoxesWidth: { width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 },
    Emailimg: { width: 20, height: 23, left: 13, top: 9 },
    PasswordTxtInput: { width: '75%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 },
    EyesHide: { width: 20, height: 22, top: 12, left: 10, tintColor: 'rgba(48, 48, 48, 0.5)' },


    

})