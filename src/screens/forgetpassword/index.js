import { StyleSheet, Text, View,Dimensions,ImageBackground, TouchableOpacity,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get("screen")
import Greater from '../../../assets/images/Vector.svg';
import Lock from '../../../assets/images/lock.svg';

const ForgetPassword = ({navigation}) => {
  return (
  

      <ImageBackground source={require('../../../assets/images/image.png')}  style={{width:'100%',height:'100%',opacity:1}}>
           <ScrollView>
    
         <View style={styles.MainContainer}>
         <TouchableOpacity onPress={()=>navigation.goBack('SignUp')}>
     <View style={styles.GreaterImg}>
     <Greater/>
  
     </View>
     </TouchableOpacity>
     <View style={{marginLeft:'18%',marginTop:6}}>
     <Text style={styles.Txt}>Forget Password</Text>
</View>
     </View>

     <View style={{marginTop:'30%',alignItems:'center'}}>
     <Lock width={237.93} height={256.11}/>

     </View>

     <View style={{marginTop:47.89,alignItems:'center'}}>
     <Text style={styles.SecontTxt}>Please Enter your email to reset your</Text>
     <Text style={styles.passwordTxt}>password</Text>

     </View>

     <View style={{ marginTop:49, alignItems: 'center' }}>
                    <View style={styles.EmailView}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/letter.png')} resizeMode='contain' style={styles.img} />

                            <TextInput placeholder='Email' placeholderTextColor='black' style={styles.TxtInput} />
                        </View>


                    </View>

                </View>

                <View style={styles.SubmitView}>
                    <TouchableOpacity onPress={()=>navigation.navigate('verifyEmail')} style={styles.TouchBox}>
                        <Text style={styles.SubmitTxt}>Submit</Text>

                    </TouchableOpacity>

                </View>
              </ScrollView>
      </ImageBackground>
   
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    MainContainer:{flexDirection:'row',marginTop:64,marginLeft:20},
    GreaterImg:{backgroundColor:'#FFFFFF',width:46,height:46,borderRadius:10,justifyContent:'center',alignItems:'center'},
    Txt:{fontSize:24,color:'#303030',fontWeight:'500'},
    SecontTxt:{fontSize:18,color:'#01073D',fontWeight:'400',opacity:0.6},
    passwordTxt:{fontSize:18,color:'#01073D',fontWeight:'400',textAlign:'center',opacity:0.6},
    EmailView:{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 },
    img:{
         width: 20, height: 23, left: 13, top: 9 
    },
    TxtInput:{ width: '87%', height: 40, color: 'black', opacity: 0.5, marginTop: 2, marginLeft: '7%', fontSize: 14 },
    SubmitView:{ marginTop:129, marginLeft: 4, alignItems: 'center',marginBottom:'20%' },
    TouchBox:{ width: '90%', height: 50, backgroundColor: '#3C45DA', borderRadius: 10, justifyContent: 'center', opacity: 0.9 },
    SubmitTxt:{ fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center' }
    

})