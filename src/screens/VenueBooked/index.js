

import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const { width, height } = Dimensions.get('screen')
import Decrease from '../../../assets/images/llll.svg';
import EDIT from '../../../assets/images/editnxt.svg';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpComing from '../upcoming';
import History from '../history';
import { screensEnabled } from 'react-native-screens';


const Tab = createMaterialTopTabNavigator();



const VenueBooked = () => {
    return (

        <View style={styles.MAIN_CONTAINER}>
            <View style={styles.VIEWTHREECOMPONENT}>

                <TouchableOpacity style={styles.DECREASETOUCH}>
                    <Decrease />

                </TouchableOpacity>


                <Text style={styles.VENUETXT}>Venues Around you</Text>
                <TouchableOpacity style={styles.EDITTOUCH}>
                    <EDIT />

                </TouchableOpacity>

            </View>

            <ScrollView style={{ borderWidth: 1,flex:1 }}>
                <View style={{ marginTop: '7%', height: height }}>

                    <Tab.Navigator screenOptions={ { tabBarLabelStyle: { fontSize: 14, fontWeight: '600' } } } >
                        <Tab.Screen  name='upcoming' component={UpComing} />
                        <Tab.Screen name='history' component={History} />

                    </Tab.Navigator>
                    {/* <View style={{marginBottom:'70%'}}>

                    </View> */}

                </View>
            </ScrollView>
        </View>

    )

}

export default VenueBooked;

const styles = StyleSheet.create({
    MAIN_CONTAINER: { flex: 1, backgroundColor: 'white',marginTop:10,height:height },
    VIEWTHREECOMPONENT: { flexDirection: 'row', alignItems: 'center', marginLeft: '6%', marginTop: '3%', justifyContent: 'space-between' },
    DECREASETOUCH: { width: width / 8, height: height / 17, borderRadius: 10, backgroundColor: 'rgba(241, 241, 241, 0.8)', justifyContent: 'center', alignItems: 'center' },
    VENUETXT: { fontSize: 22, color: '#01073D', fontWeight: '600' },
    EDITTOUCH: { width: width / 8, height: height / 17, backgroundColor: 'rgba(241, 241, 241, 0.8)', justifyContent: 'center', alignItems: 'center', marginRight: '5%', borderRadius: 10 },
})