import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image,ScrollView, FlatList, Modal } from 'react-native'
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
const { width, height } = Dimensions.get('screen');
import CalendarPicker from 'react-native-calendar-picker';

const countries=[

{
  age:'Male'
},
{
  age:'Female'

},
{
  age:'TransGender'
  
}
]

const Selection=[

  {
    Weight:'KG'
  },
  {
    Weight:'lbs'
  
  },

  ]

  const Next=[

    {
      Height:'Feet'
    },
    {
      Height:'Inches'
    
    },
  
    ]

import Face from '../../../assets/images/face.svg';
import Down from '../../../assets/images/down.svg';
import Scanner from '../../../assets/images/scanner.svg';
import Bell from '../../../assets/images/bell.svg';
import Cart from '../../../assets/images/cart.svg';
import Teacher from '../../../assets/images/teacher.svg';
import Gender from '../../../assets/images/gender.svg';

import Dob from '../../../assets/images/dob.svg';
import Picker from '../../../assets/images/picker.svg';

import BAG from '../../../assets/images/Bag.svg';
import Weight from '../../../assets/images/weight.svg';

import SecDown from '../../../assets/images/secdown.svg';



const GymWorking = ({navigation}) => {
  const minDate = new Date(); // Today
  const maxDate = new Date(2026, 6, 3);

const [selecedStartDate,setSelectedStartDate]=useState('DD/MM/YYYY')
const [selecedEndDate,setSelectedEndDate]=useState('DD/MM/YYYY')


  const onDateChange=(date,type)=>{
    console.log(JSON.stringify(date))
    const newDate=JSON.stringify(date);
    const newDate1=newDate.substring(1,newDate.length-1);
    const dates=newDate1.split('T')
    const date1=dates[0].split("-")

    const day=date1[2]
    const month=date1[1]
    const year=date1[0]

    console.log(day+"/"+month+"/"+year)

    if(type=='End_DATE'){
      if(day==undefined){
        setSelectedEndDate('DD/MM/YYYY')

      }
      else{
        setSelectedEndDate(day+"/"+month+"/"+year)
      }
    


    }
    else{
      selecedStartDate(day+"/"+month+"/"+year)
      selecedStartDate()
    }

  }
   const [SelectGender, setSelectedGender] = useState('Select Gender');
   const [isClicked, setisClicked] = useState(false);
   const [showModal,setShowModal]=useState(false);

   const [selectWeight,setSelectWeight] = useState('Select');
   const [issecClicked, setSecisClicked] = useState(false);
   const [selectHeight,setSelectHeight]= useState('Select');
   const [isthirdClicked, setThirdClicked] = useState(false);

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

      <View style={{marginTop:'5%',alignItems:'center'}}>
        <Teacher/>
      </View>

      <View style={{alignItems:'center',marginTop:'4%'}}>
        <Text style={{fontSize:24,color:'#3C45DA',fontWeight:'700'}}>Lets Enhance your Profile</Text>
      </View>

      <Text style={{fontSize:16,color:'#01073D',textAlign:'center',fontWeight:'400'}}>For our better understanding</Text>



      <View style={{flex:1,marginBottom:'40%'}}>
        <View>
      <TouchableOpacity style={styles.dropdownselector} onPress={()=>setisClicked(!isClicked)}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Gender/>
      <Text style={{fontSize:17,color:'black',opacity:0.3,paddingLeft:'3%'}}>{SelectGender}</Text>
      </View>

      {isClicked? (  <Image source={require('../../../assets/images/downedd.png')} style={{width:19,height:10,marginRight:'1%',resizeMode:'contain',transform:[{ rotate: '180deg' }]}}/>):(  <Image source={require('../../../assets/images/downedd.png')} style={{width:19,height:10,marginRight:'1%',resizeMode:'contain'}}/>)}
      
      </TouchableOpacity>

      {isClicked ?( <View style={styles.dropdownArea}>
       <View>
       <FlatList 
        data={countries}
        renderItem={({ item, index }) => {
        return (
            <TouchableOpacity style={styles.countryItem} onPress={()=>[setSelectedGender(item.age),setisClicked(false)]}>
            <Text style={{fontSize:15,color:'rgba(48, 48, 48, 0.50)',fontWeight:'400'}}>{item.age}</Text>

            </TouchableOpacity>
        )

        }}
       />
       </View>
      </View>):null}


</View>
      {/* <View>
        
      </View> */}

      <View style={styles.dropdownselector1}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Dob/>
      <Text style={{fontSize:17,color:'black',opacity:0.3,paddingLeft:'3%'}}>Date of Birth</Text>
      </View> 
      <TouchableOpacity onPress={()=>setShowModal(true)}>

      <Picker/>
      </TouchableOpacity>

       {/* <Modal
      visible={showModal}
      animationType='fade'
      >
         <CalendarPicker 
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
          
        />
      </Modal>  */}
      </View>


<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style={styles.dropdownselector2}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<BAG/>
<Text style={{fontSize:17,color:'black',opacity:0.3,paddingLeft:'3%'}}>Weight</Text>
</View>


</TouchableOpacity>

<View style={{width:'20%',height:50,backgroundColor:'#3C45DA',borderRadius:10,marginTop:20,marginLeft:'4%',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity onPress={()=>setSecisClicked(!issecClicked)} >
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:14,fontWeight:'600',color:'white'}}>{selectWeight}</Text>
 {issecClicked? (  <Image source={require('../../../assets/images/upperedd.png')} style={{width:19,height:10,marginLeft:10,resizeMode:'contain',transform:[{ rotate: '180deg' }]}}/>):(  <Image source={require('../../../assets/images/upperedd.png')} style={{width:19,height:10,marginLeft:10,resizeMode:'contain'}}/>)} 

</View>


</TouchableOpacity>
</View>
      </View>

        
      {issecClicked ?( <View style={{width:'21%',marginRight:'4.9%',borderRadius:10,borderWidth:1,height:90,backgroundColor:'white',alignSelf:'flex-end'}}>
               
      <View>
       <FlatList 
        data={Selection}
        renderItem={({ item, index }) => {
        return (
            <TouchableOpacity style={styles.countryItem} onPress={()=>[setSelectWeight(item.Weight),setSecisClicked(false)]}>
            <Text style={{fontSize:15,color:'black',fontWeight:'900',textAlign:"center"}}>{item.Weight}</Text>

            </TouchableOpacity>
        )

        }}
       />
       </View>
                
                  
</View>):null }  
            

           
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style={styles.dropdownselector2}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<Weight/>
<Text style={{fontSize:17,color:'black',opacity:0.3,paddingLeft:'3%'}}>Feet</Text>
</View>


</TouchableOpacity>
<View style={{width:'20%',height:50,backgroundColor:'#3C45DA',borderRadius:10,marginTop:20,marginLeft:'4%',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity onPress={()=>setThirdClicked(!isthirdClicked)}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

<Text style={{fontSize:14,fontWeight:'600',color:'white'}}>{selectHeight}</Text>
{isthirdClicked? (  <Image source={require('../../../assets/images/upperedd.png')} style={{width:19,height:10,resizeMode:'contain',marginLeft:10,transform:[{ rotate: '180deg' }]}}/>):(  <Image source={require('../../../assets/images/upperedd.png')} style={{width:19,marginLeft:10,height:10,resizeMode:'contain'}}/>)} 

</View>

</TouchableOpacity>

</View>
</View>
      {isthirdClicked ?( <View style={{width:'21%',marginRight:'4.9%',borderRadius:10,borderWidth:1,height:90,backgroundColor:'white',alignSelf:'flex-end'}}>
               
               <View>
                <FlatList 
                 data={Next}
                 renderItem={({ item, index }) => {
                 return (
                     <TouchableOpacity style={styles.countryItem} onPress={()=>[setSelectHeight(item.Height),setThirdClicked(false)]}>
                     <Text style={{fontSize:15,color:'black',fontWeight:'900',textAlign:"center"}}>{item.Height}</Text>
         
                     </TouchableOpacity>
                 )
         
                 }}
                />
                </View>
                         
                           
         </View>):null } 

         <View style={{marginTop:'15%',alignItems:'center'}}>
         <TouchableOpacity onPress={()=>navigation.navigate('selectedAim')} style={{width:width/1.1,height:height/15,backgroundColor:"#3C45DA",borderRadius:10,justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:18,color:'#FFF',fontWeight:'600'}}>Next</Text>

         </TouchableOpacity>
         </View>
        
        </View>

      
    </ScrollView>
  )
}

export default GymWorking

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
  dropdownselector:{
    width:'90%',
    height:50,
    borderRadius:10,
    borderColor:'#8e8e8e',
    alignSelf:'center',
    marginTop:'15%',
    backgroundColor:'rgba(255, 255, 255, 0.80)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10
  },
  dropdownselector1:{
    width:'90%',
    height:50,
    borderRadius:10,
    borderColor:'#8e8e8e',
    alignSelf:'center',
    marginTop:'5%',
    backgroundColor:'rgba(255, 255, 255, 0.80)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10
  },
  dropdownselector2:{
    width:'65%',
    height:50,
    borderRadius:10,
    borderColor:'#8e8e8e',
    marginTop:'5%',
    backgroundColor:'rgba(255, 255, 255, 0.80)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    
  },

  dropdownArea:{
    width:'90%',
    height:140,
    backgroundColor:'#FFF',
    borderRadius:10,
    marginTop:10,
    elevation:5,
    alignSelf:'center',
    borderWidth:1
  },
  countryItem:{
    width:'86%',
    height:50,
    borderBottomWidth:0.2,
    borderBottomColor:'#8e8e8e',
    alignSelf:'center',
    justifyContent:'center'
  }, 
  countryItem1:{
    width:'86%',
  height:40,
    borderBottomWidth:0.2,
    borderBottomColor:'#8e8e8e',
    alignSelf:'center',
    justifyContent:'center'
  }
})


//import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';



// const GymWorking = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//       {label: 'Apple', value: 'apple'},
//       {label: 'Banana', value: 'banana'},
//       {label: 'Pear', value: 'pear'},
//   ]);

//   return (
    // <View style={{flex: 1}}>
    //          <View
    //              style={{
    //                 flex: 1,
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //               paddingHorizontal: 15,
    //             }}>
    //             <DropDownPicker
    //               open={open}
    //                 value={value}
    //                  items={items}
    //                  setOpen={setOpen}
    //                  setValue={setValue}
    //                                      setItems={setItems}
    //                placeholder={'Choose a fruit.'}
    //             />
    //          </View>

    //          <View style={{
    //              flex: 1,
    //              alignItems: 'center',

    //              justifyContent: 'center'             }}>
    //              <Text>Chosen fruit: {value === null ? 'none' : value}</Text>
    //         </View>
    //     </View>
//   )
// }

// export default GymWorking

//const styles = StyleSheet.create({})