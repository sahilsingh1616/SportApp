import { StyleSheet, Text, View,Dimensions,ImageBackground, TouchableOpacity,Image,TextInput,ScrollView} from 'react-native'
import React,{useEffect, useRef,useState} from 'react'
const { height, width } = Dimensions.get("screen")
import Greater from '../../../assets/images/Vector.svg';
import Number from '../../../assets/images/number.svg';

const VerifyNumber = ({navigation}) => {
    const et1=useRef();
    const et2=useRef();
    const et3=useRef();
    const et4=useRef();
    const et5=useRef();
    const et6=useRef();


    const [FirstTxt,setFirstTxt]=useState('');
    const [SecondTxt,setSecondTxt]=useState('');
    const [ThirdTxt,setThirdTxt]=useState('');
    const [FourthTxt,setFourthTxt]=useState('');
    const [FifthTxt,setFifthTxt]=useState('');
    const [SixthTxt,setSixthTxt]=useState('');


    const [count,setCount]=useState(60);
    useEffect(()=>{
        const Interval= setInterval(() => {
            if(count==0){
                clearInterval(Interval)
            }
            else{
                setCount(count-1)
            }
           
        },1000);

        return()=>{
            clearInterval(Interval)
        }

    },[count])





  return (
  

      <ImageBackground source={require('../../../assets/images/image.png')}  style={{width:'100%',height:'100%',opacity:1}}>
           <ScrollView>
    
         <View style={styles.MainContainer}>
         <TouchableOpacity>
     <View style={styles.GreaterImg}>
    <Greater/>
  
     </View>
     </TouchableOpacity>
     <View style={{marginLeft:'21%',marginTop:6}}>
     <Text style={styles.Txt}>Verify Number</Text>
</View>
     </View>

     <View style={{marginTop:'20%',alignSelf:'center',marginLeft:70}}>
     <Number width={299.87} height={255.75}/>

     </View>

     <View style={{marginTop:47.89,alignItems:'center'}}>
     <Text style={styles.SecontTxt}>Please enter the verification code</Text>
     <Text style={styles.passwordTxt}>sent to your mobile No.</Text>

     </View>

     <View style={{ marginTop:49,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

                        <TextInput ref={et1} style={[styles.OtpTxt,{ borderColor:FirstTxt.length>=1 ? 'red':'#000'}]}
                        keyboardType="number-pad"
                         maxLength={1}
                         value={FirstTxt}
                         onChangeText={text=>{
                            setFirstTxt(text)
                            if(text.length>=1){
                                et2.current.focus();
                            }
                         }}
                         />


                        <TextInput ref={et2} style={[styles.OtpTxt,{ borderColor:SecondTxt.length>=1 ? 'red':'#000'}]}
                              keyboardType="number-pad"
                         maxLength={1}
                         value={SecondTxt}
                         onChangeText={text=>{
                            setSecondTxt(text)
                            if(text.length>=1){
                                et3.current.focus();
                            }
                            else if(text.length<1){
                                et1.current.focus();
                            }
                         }}
                         />
                        
                        <TextInput ref={et3} style={[styles.OtpTxt,{ borderColor:ThirdTxt.length>=1 ? 'red':'#000'}]}
                             keyboardType="number-pad"
                         maxLength={1}
                         value={ThirdTxt}
                         onChangeText={text=>{
                            setThirdTxt(text)
                            if(text.length>=1){
                                et4.current.focus();
                            }
                            else if(text.length<1){
                                et2.current.focus();
                            }
                         }}
                        />

                        <TextInput ref={et4} style={[styles.OtpTxt,{ borderColor:FourthTxt.length>=1 ? 'red':'#000'}]}
                             keyboardType="number-pad"
                         maxLength={1}
                         value={FourthTxt}
                         onChangeText={text=>{
                            setFourthTxt(text)
                            if(text.length>=1){
                                et5.current.focus();
                            }
                            else if(text.length<1){
                                et3.current.focus();
                            }
                         }}
                        />

                        <TextInput ref={et5} style={[styles.OtpTxt,{ borderColor:FifthTxt.length>=1 ? 'red':'#000'}]}
                             keyboardType="number-pad"
                         maxLength={1}
                         value={FifthTxt}
                         onChangeText={text=>{
                            setFifthTxt(text)
                            if(text.length>=1){
                                et6.current.focus();
                            }
                            else if(text.length<1){
                                et4.current.focus();
                            }
                         }}
                        />
                        <TextInput ref={et6} style={[styles.OtpTxt,{ borderColor:SixthTxt.length>=1 ? 'red':'#000'}]}
                             keyboardType="number-pad"
                         maxLength={1}
                         value={SixthTxt}
                         onChangeText={text=>{
                            setSixthTxt(text)
                            if(text.length>=1){
                                et6.current.focus();
                            } 
                            else if(text.length<1){
                                et5.current.focus();
                            }
                         }}

                        />







                    </View>
                    <View style={{marginTop:15,marginLeft:'7%',flexDirection:'row',justifyContent:'space-between'}}>
                    {count!==0 &&(   <Text style={{fontSize:14,color:'#323232'}}>Code Expires in {count}s</Text>)}
                     

                        <TouchableOpacity>
                        <Text style={{fontSize:14,color:count==0?'grey': '#4168EA',marginRight:'10%'}} onPress={()=>setCount(120)}>Resend code</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.SubmitView}>
                    <TouchableOpacity  disabled={FirstTxt!=='' && SecondTxt!=='' && ThirdTxt!=='' && FourthTxt!=='' && FifthTxt!=='' && SixthTxt!=='' ? false:true} style={[styles.TouchBox,{backgroundColor:FirstTxt !=='' && SecondTxt !=='' && ThirdTxt !== '' && FourthTxt!== '' && FifthTxt!==''  && SixthTxt!==''? 'blue':'grey' }]}>
                        <Text style={styles.SubmitTxt}>Verify</Text>

                    </TouchableOpacity>


            </View>

              
              </ScrollView>
      </ImageBackground>
   
  )
}

export default VerifyNumber;

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
    SubmitView:{ marginTop:100, marginLeft: 4, alignItems: 'center',marginBottom:'10%' },
    TouchBox:{ width: '90%', height: 50, backgroundColor: '#3C45DA', borderRadius: 10, justifyContent: 'center', opacity: 0.9 },
    SubmitTxt:{ fontSize: 18, fontWeight: '500', color: 'white', textAlign: 'center' },
    OtpTxt:{width:50.28,height:58,borderWidth:0.5,borderColor:'white',borderRadius:10,backgroundColor:'white',marginLeft:10,color:'black',textAlign:'center',fontSize:18,fontWeight:'700' },
    












})