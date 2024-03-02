import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings';

import Decrease from '../../../assets/images/llll.svg';
import { inlineStyles } from 'react-native-svg';
import { Venue } from '../../utils/mocks';
import Time from '../../../assets/images/time.svg';
import Go from '../../../assets/images/go.svg';


const { width, height } = Dimensions.get('screen');


const VenueAroundYou = ({ navigation }) => {
    const [selected, setSelected] = useState(9);
    return (
        <ScrollView style={styles.MAIN_CONTAINER}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 50, width: 50, backgroundColor: 'white', elevation: 2, marginTop: '10%', marginLeft: '6%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Decrease />

                </TouchableOpacity>
                <Text style={{ fontSize: 22, color: '#01073D', fontWeight: '600', marginTop: '9%', marginRight: '25%' }}>Venues Around you</Text>

            </View>


            <View style={{}}>
                <FlatList

                    data={Venue}
                    style={{ marginLeft: '6%', marginTop: '6%', marginBottom: 10 }}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{}}>
                                <TouchableOpacity key={index} style={{ width: width / 2.3, borderRadius: 10, height: height / 3.2, backgroundColor: 'white', margin: 5, elevation: 3 }}>
                                    <ImageBackground borderRadius={10} source={item.images} style={{ width: width / 2.4, height: height / 4.2, marginTop: 3, marginLeft: 4, borderRadius: 10 }}>
                                        <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '85%', right: '40%' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Time />
                                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                            </View>
                                        </View>


                                    </ImageBackground>
                                    <View style={{ height: 50, marginLeft: 5, backgroundColor: 'white', marginTop: '1%', width: '95%' }}>
                                        <Text style={{ fontSize: 15, color: '#01073D', fontWeight: '700', marginLeft: 2 }}>{item.position}</Text>

                                        <View style={{ marginTop: 2, marginLeft: 2, flexDirection: 'row' }}>

                                            <Go />
                                            <Text style={{ fontSize: 10, color: '#787878', marginLeft: 1 }}>{item.texts}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Rating
                                                type='star'
                                                ratingColor='#3498db'

                                                ratingBackgroundColor='#c8c7c8'
                                                ratingCount={5}
                                                imageSize={13}
                                                style={{ marginTop: 2, marginLeft: 2 }}
                                            />
                                            <Text style={{ fontSize: 11, color: '#787878', marginLeft: '8%', marginTop: 2 }}>(98 reviews)</Text>

                                        </View>




                                    </View>

                                </TouchableOpacity>
                            </View>
                        )

                    }}
                />
            </View>


        </ScrollView>
    )
}

export default VenueAroundYou;

const styles = StyleSheet.create({
    MAIN_CONTAINER: {
        flex: 1, backgroundColor: '#FFFFFF'
    },

    BACKGROUND_VIEW: { backgroundColor: '' }

}) 