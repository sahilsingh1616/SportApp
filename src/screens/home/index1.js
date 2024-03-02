import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList,Dimensions } from 'react-native'
import React, { useState } from 'react'


import Face from '../../../assets/images/face.svg';
import { DATAIMAGE } from '../../utils/mocks';
const {width} =Dimensions.get('screen');
const cardViewWidth =width/2-20;

const JustPractice = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const ListCategories = () => {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesListStyle} >
                {DATAIMAGE.map((category, index) => (<TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>setSelectedCategoryIndex(index)}>
                    <View style={{ backgroundColor: selectedCategoryIndex == index ? 'orange' : '#FF9B9B', ...styles.categoriesBtn }}>
                        <View style={styles.categoriesBtnImgIcon}>
                        <Image source={category.image} style={{width:35,height:35,resizeMode:'contain'}}/>

                        </View>
                        <Text style={{marginLeft:10,fontWeight:'bold',fontSize:12,color:selectedCategoryIndex== index? 'white':'black'}}>{category.title}</Text>
                    </View>

                </TouchableOpacity>))}

            </ScrollView>
        )
    }

    const Card=()=>{
        return(
            <View style={styles.cardView}>

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'aqua' }}>
            <View style={styles.header}>

                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={{ fontSize: 28, color: 'black' }}>Hy..</Text>
                        <Text style={{ fontSize: 28, fontWeight: '600', color: 'black', marginLeft: 6 }}>Sahil Singh</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: 'grey', marginTop: 3, marginLeft: '7%' }}>What do you want today</Text>
                </View>
                <Face />
            </View>

            <View style={{ marginTop: '15%', flexDirection: 'row', paddingHorizontal: 20 }}>
                <View style={styles.input}>
                    <Image source={require('../../../assets/images/searchs.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
                    <TextInput placeholderTextColor='grey' placeholder='Search for game' style={{ flex: 1, fontSize: 18, color: 'black', marginLeft: 7 }} />
                </View>
                <View style={{ width: 50, height: 50, marginLeft: 10, backgroundColor: 'orange', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../../assets/images/editsimple.png')} style={{ width: 20, height: 20 }} />

                </View>
            </View>
            <View>
                <ListCategories />
            </View>

             <FlatList
             horizontal
                showsVerticalScrollIndicator={false}
                data={DATAIMAGE}
                renderItem={({item})=><Card food={item}/>}
             />


        </SafeAreaView>
    )
}

export default JustPractice

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    categoriesListStyle: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    categoriesBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    categoriesBtnImgIcon: {
        height: 35,
        width: 35,
        backgroundColor: 'white',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardView:{
     height:220,
     width:cardViewWidth,
     backgroundColor:'white',
     marginHorizontal:10,
     marginBottom:20,
     marginTop:20,
     borderRadius:15,
     elevation:13,
                                                                                                                                                                       
     
    
    }

})