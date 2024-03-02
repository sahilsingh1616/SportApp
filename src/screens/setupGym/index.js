import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions, FlatList, ImageBackground } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');


import Face from '../../../assets/images/face.svg';
import Down from '../../../assets/images/down.svg';
import Scanner from '../../../assets/images/scanner.svg';
import Bell from '../../../assets/images/bell.svg';
import Cart from '../../../assets/images/cart.svg';
import POGO from '../../../assets/images/pogo.svg';


const SetupGym = () => {
    return (
        <ScrollView style={styles.MAINCONTAINER}>
            <View style={styles.TOPVIEW}>
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

            <View style={{ height: height / 2, alignItems: 'center', justifyContent: 'center' }}>
                <POGO />

            </View>

            <View style={{ alignItems: 'center', marginTop: '2%' }}>
                <Text style={{ fontSize: 24, color: '#3C45DA', fontWeight: '700' }}>You’re all set </Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: '1%' }}>
                <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '400', width: 200, textAlign: 'center' }}>Lets collaborate and conquer your goals as a team </Text>
            </View>

            <View style={{ alignItems: 'center',marginTop:'15%'}}>
                <TouchableOpacity style={styles.TOUCHFINISH}>
                    <Text style={styles.TXTFINISH}>Finish</Text>

                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

export default SetupGym;

const styles = StyleSheet.create({
    MAINCONTAINER: {
        height: height, backgroundColor: '#D6E7F9'
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

    TOUCHFINISH:{ width: width / 1.1, height: height / 15, backgroundColor: "#3C45DA", borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
           TXTFINISH:{ fontSize: 18, color: '#FFF', fontWeight: '600' }
})