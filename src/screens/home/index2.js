import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, TextInput, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel, { Pagination } from "react-native-snap-carousel";
const { height, width } = Dimensions.get("screen")
import { Rating } from 'react-native-ratings';



import Face from '../../../assets/images/face.svg';
import Down from '../../../assets/images/down.svg';
import Scanner from '../../../assets/images/scanner.svg';
import Time from '../../../assets/images/time.svg';
import Lessser from '../../../assets/images/less.svg';



import Map from '../../../assets/images/maps.svg';
import Bell from '../../../assets/images/bell.svg';
import Cart from '../../../assets/images/cart.svg';
import Search from '../../../assets/images/search.svg';
import { DATAIMAGE, GARBRU, NIKE, NIKES, RICH, RICHS, Reebok, SINGH, SINGHIS, SINGHS } from '../../utils/mocks';
import { BACKGROUND } from '../../utils/mocks';




const renderImages = ({ item }) => {

    return (

        <View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                <FlatList
                    data={GARBRU}
                    renderItem={({ item, index }) => {
                        return (
                            <ImageBackground source={item.bckgroundimage} style={{ width: 370, height: 207 }} imageStyle={{ borderRadius: 10 }}>
                                {/* <Image source= style={{width:370,height:207,borderRadius:10}}/> */}
                                <Text style={{ fontSize: 19, color: '#FFFFFF', marginTop: '40%', marginLeft: 14, fontWeight: '600' }}>Windy City Hoops Court</Text>
                                <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                                    <Map style={{ marginTop: 3 }} />
                                    <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 3, marginTop: 3, width: 100 }} numberOfLines={1}>321 Elm Avenue , Chicago</Text>

                                    <View style={{ width: 88, height: 24, marginTop: -5, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Time />
                                            <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>5 mins away</Text>
                                        </View>



                                    </View>

                                </View>

                            </ImageBackground>

                        )
                    }}
                />
            </View>
        </View>

    );
};

const renderImages1 = ({ item }) => {

    return (

        <View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                <FlatList
                    data={RICH}
                    renderItem={({ item, index }) => {
                        return (

                            <ImageBackground source={item.bckgroundimage} style={{ width: 370, height: 207 }} imageStyle={{ borderRadius: 10 }}>
                                {/* <Image source= style={{width:370,height:207,borderRadius:10}}/> */}
                                <Image source={require('../../../assets/images/dollor.png')} style={{ width: 58, height: 35, position: 'absolute', left: '81%', top: 10, resizeMode: 'contain' }} />
                                <View style={{ width: 98, height: 22, backgroundColor: '#2596be', position: 'absolute', left: '3.6%', top: '60%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Time />
                                        <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>5 mins away</Text>
                                    </View>
                                </View>

                                <Text style={{ fontSize: 19, color: '#FFFFFF', marginTop: '40%', marginLeft: 14, fontWeight: '600' }}>Hoops Showdown</Text>
                                <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                                    <Map style={{ marginTop: 3 }} />
                                    <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 3, marginTop: 1 }}>Victory Arena, Riverside City</Text>

                                    <View style={{ width: '55%', alignItems: 'flex-end' }}>
                                        <Text style={{ fontSize: 14, color: 'white', marginLeft: 5 }}>16th July</Text>
                                    </View>


                                </View>



                            </ImageBackground>


                        )

                    }}

                />
            </View>
        </View>

    );
};


const renderImages2 = ({ item }) => {

    return (

        <View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                <FlatList
                    data={RICHS}
                    renderItem={({ item, index }) => {
                        return (

                            <ImageBackground source={item.bckgroundimage} style={{ width: 370, height: 207 }} imageStyle={{ borderRadius: 10 }}>
                                {/* <Image source= style={{width:370,height:207,borderRadius:10}}/> */}
                                {/* <Image source={require('../../../assets/images/queen.png')} style={{ width: 58, height: 35, position: 'absolute', left: '81%', top: 10, resizeMode: 'contain' }} /> */}



                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 19, color: '#FFFFFF', marginTop: '40%', marginLeft: '5%', fontWeight: '600' }}>Stellar Cup</Text>
                                    <View style={{ width: 98, height: 22, marginTop: '40%', backgroundColor: '#2596be', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', marginRight: '4%' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Time />
                                            <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>5 mins away</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                                    <Map style={{ marginTop: 5 }} />
                                    <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 3, marginTop: 4 }}>Horizon Stadium, Avalon City</Text>

                                    <View style={{ width: '55%', alignItems: 'flex-end' }}>
                                        <Text style={{ fontSize: 14, color: 'white', marginLeft: 5, marginTop: 5 }}>19th July</Text>
                                    </View>


                                </View>



                            </ImageBackground>


                        )

                    }}

                />
            </View>
        </View>

    );
};





const FirstExample = ({ navigation }) => {
    const [page, setPage] = useState(0);
    const [pageSecond, setPageSecond] = useState(0);
    const [rating, setRating] = useState(0);
    const [selecedTab, setSelectedTabIndex] = useState(0);


    const ref = useRef();

    const ListCategories = () => {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesListStyle} >
                {DATAIMAGE.map((category, index) => (<TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedTabIndex(index)}>
                    <View style={{ width: 80, height: 80, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', borderWidth: 1, borderColor: selecedTab == index ? '#3C45DA' : 'white', justifyContent: 'center' }}>
                        <Image source={category.image} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                        <Text style={{ fontSize: 8, color: '#01073D', textAlign: 'center', marginTop: 3, fontWeight: '500' }}>{category.title}</Text>
                    </View>

                </TouchableOpacity>))}

            </ScrollView>
        )
    }
    return (

        <ImageBackground source={require('../../../assets/images/home.png')} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View style={{ marginTop: 17, marginLeft: 18, height: 70, width: '90%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    {/* <View style={{flexDirection:'row'}}> */}
                    <View style={{ flexDirection: 'row' }}>
                        <Face width={51.61} height={51.61} />
                        <View>
                            <Text style={{ fontSize: 14, color: '#01073D', fontWeight: '600', marginLeft: 8.61, marginTop: 3 }}>Sahil Singh</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12, color: '#787878', marginLeft: 8 }}>#16 S,Pathankot...</Text>
                                <Down style={{ marginTop: 4, marginLeft: 8 }} />
                            </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 2, marginRight: 10 }}>
                        <TouchableOpacity>
                            <Scanner width={20.43} height={20.43} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Bell width={20.43} height={20.43} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Cart width={20.43} height={20.43} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>



                </View>
                <View style={{ marginTop: '4%', alignItems: 'center' }}>
                    <View style={{ width: '90%', height: 50, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image source={require('../../../assets/images/searchs.png')} resizeMode='contain' style={{ width: 18, height: 18, left: 13, marginTop: '3.4%' }} />

                            <TextInput placeholder='Search Products, Gym, Venues' placeholderTextColor='grey' style={{ width: '75%', height: 40, color: 'black', marginTop: 2, marginLeft: '7%', fontSize: 14 }} />
                            <TouchableOpacity>
                                <Image source={require('../../../assets/images/editsimple.png')} resizeMode='contain' style={{ width: 20, height: 22, top: 10, left: 10 }} />
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
                <View style={{ height: 110 }}>
                    <ListCategories />

                </View>
                {selecedTab == 2 && (
                    <View>
                        <View style={{ marginTop: 29, marginLeft: 20 }}>
                            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Newly Opened</Text>
                        </View>


                        <View style={{ height: 290, marginTop: 10 }}>

                            <View >
                                <TouchableOpacity>
                                    <Carousel
                                        ref={ref}
                                        onSnapToItem={(page) => setPage(page)}
                                        layout={"default"}
                                        data={BACKGROUND}
                                        renderItem={renderImages}
                                        sliderWidth={width}
                                        itemWidth={width}
                                        enableSnap={true}
                                        disableIntervalMomentum={true}
                                        removeClippedSubviews={true}
                                        snapToInterval={1}
                                    // loop={true}
                                    // autoplay={true}
                                    // loop={true}
                                    // autoplay={true}

                                    />
                                </TouchableOpacity>
                                <View style={{}}>
                                    <Pagination
                                        activeDotIndex={page}
                                        carouselRef={ref}
                                        tappableDots={true}
                                        inactiveDotOpacity={0.4}
                                        inactiveDotScale={1}
                                        dotsLength={BACKGROUND.length}
                                        dotStyle={{
                                            width: 7,
                                            borderRadius: 100,
                                            backgroundColor: "#3C45DA",
                                        }}
                                        inactiveDotStyle={{
                                            backgroundColor: "#3C45DA",
                                        }}
                                    />
                                </View>
                            </View>

                        </View>


                        <View style={{ marginTop: -10, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Venues Around you</Text>


                                <TouchableOpacity onPress={() => navigation.navigate('venuearoundyou')}>

                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />

                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ width: '100%', height: 360 }}>

                            <FlatList
                                data={NIKE}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ marginLeft: 20 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('VenueDetail', { singh: item })} style={{ width: 223, height: 303, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                            <ImageBackground source={item.plugin} style={{ width: 206, height: 220, alignSelf: 'center', marginTop: 10 }}>
                                                <Image source={item.background} style={{ width: 61, height: 27, position: 'absolute', left: '65%', top: 10 }} />
                                                <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '87%', right: '47%' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Time />
                                                        <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                                    </View>

                                                </View>
                                            </ImageBackground>
                                            <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '600', marginLeft: 10, marginTop: 7 }}>{item.position}</Text>
                                            <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row' }}>
                                                <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                                <Text style={{ fontSize: 20, color: '#787878', marginLeft: 3, marginTop: -1 }}>{item.Downtxt}</Text>
                                            </View>

                                            <View style={{ marginTop: 1, flexDirection: 'row' }}>

                                                <Rating
                                                    type='star'
                                                    ratingColor='#3498db'

                                                    ratingBackgroundColor='#c8c7c8'
                                                    ratingCount={5}
                                                    imageSize={13}
                                                    style={{ paddingVertical: 2, paddingHorizontal: 10 }}
                                                />

                                                <Text style={{ fontSize: 10, color: '#787878', marginTop: 3 }}>(98 reviews)</Text>
                                            </View>

                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ marginTop: -5, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Popular in Adams St</Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={SINGH}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ marginLeft: 19 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={{ width: 280, height: 180, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                            <ImageBackground source={item.brown} style={{ width: 280, height: 180, alignSelf: 'center', marginTop: -1 }}>
                                                <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '59%', right: '53.3%' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Time />
                                                        <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                                    </View>

                                                </View>
                                                <View style={{ width: '92%', position: 'absolute', top: '75%', left: 9, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '600', marginLeft: 2 }}>{item.position}</Text>

                                                    <Text style={{ fontSize: 11, color: '#FFFFFF' }}>(89 reviews)</Text>

                                                </View>
                                                <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row', position: 'absolute', top: '83%', width: '92%', justifyContent: 'space-between' }}>
                                                    <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                                    <Text style={{ fontSize: 14, color: '#787878', marginLeft: 3, marginTop: 1, marginRight: '40%' }}>{item.Downtxt}</Text>
                                                    <Image source={item.stars} resizeMode='contain' style={{ width: 66, height: 12 }} />
                                                </View>
                                            </ImageBackground>

                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>

                    </View>
                )}

                {selecedTab == 3 && (
                    <View>
                        <View style={{ marginTop: 29, marginLeft: 20 }}>
                            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Latest Competition</Text>
                        </View>


                        <View style={{ height: 290, marginTop: 10 }}>

                            <View >
                                <TouchableOpacity>
                                    <Carousel
                                        ref={ref}
                                        onSnapToItem={(page) => setPage(page)}
                                        layout={"default"}
                                        data={BACKGROUND}
                                        renderItem={renderImages2}
                                        sliderWidth={width}
                                        itemWidth={width}
                                        enableSnap={true}
                                        disableIntervalMomentum={true}
                                        removeClippedSubviews={true}
                                        snapToInterval={1}
                                    // loop={true}
                                    // autoplay={true}
                                    // loop={true}
                                    // autoplay={true}

                                    />
                                </TouchableOpacity>
                                <View style={{}}>
                                    <Pagination
                                        activeDotIndex={page}
                                        carouselRef={ref}
                                        tappableDots={true}
                                        inactiveDotOpacity={0.4}
                                        inactiveDotScale={1}
                                        dotsLength={BACKGROUND.length}
                                        dotStyle={{
                                            width: 7,
                                            borderRadius: 100,
                                            backgroundColor: "#3C45DA",
                                        }}
                                        inactiveDotStyle={{
                                            backgroundColor: "#3C45DA",
                                        }}
                                    />
                                </View>
                            </View>

                        </View>


                        <View style={{ marginTop: -10, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Competitions around you</Text>


                                <TouchableOpacity>

                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />

                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ width: '100%', height: 360 }}>

                            <FlatList
                                data={NIKES}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ marginLeft: 20 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity onPress={()=>navigation.navigate('Competitionaroundyou',{ abhi: item })} style={{ width: width / 1.4, height: height / 4.5, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={item.plugin} style={{ width: width / 1.4, height: height / 4.5, alignSelf: 'center' }}>
                                                <Image source={item.background} style={{ width: 58, height: 30, marginLeft: '76%', marginTop: 10 }} />

                                                <View style={{ width: 98, height: 22, marginTop: '25%', backgroundColor: '#2596be', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', marginLeft: '5%' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Time />
                                                        <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>10 AM - 4 PM</Text>
                                                    </View>

                                                </View>
                                                <View>
                                                <Text style={{ fontSize: 19, color: '#FFFFFF', marginLeft: '5%', fontWeight: '600',marginTop:'2%' }}>{item.position}</Text>


                                                </View>
                                                <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                                    <Map style={{ marginTop: 5 }} />
                                    <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 3, marginTop: 4 }}>{item.Downtxt}</Text>

                                    <View style={{ width: '55%', alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 14, color: 'white', marginTop: 5,marginRight:10 }}>{item.date}</Text>
                                    </View>


                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ marginTop:'-30%', marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Popular Competitions</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('popularseeall')}>
                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>
                                    

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />
                                        

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={SINGHS}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ marginLeft: 19 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={{ width:width/1.7, height:height/2.9, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                            <ImageBackground imageStyle={{borderRadius:10}} source={item.brown} style={{ width:width/1.7, height:height/2.9, alignSelf: 'center'}}>
                                            <Image source={item.background} style={{ width: 58, height: 30, marginLeft: '72%', marginTop: 10 }} />
                                            <View style={{ width: 98, height: 22, marginTop: '78%', backgroundColor: '#2596be', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', marginLeft: '5%' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Time />
                                                        <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.Timer}</Text>
                                                    </View>

                                                    </View>
                                                    <View>
                                                <Text style={{ fontSize: 19, color: '#FFFFFF', marginLeft: '5%', fontWeight: '600',marginTop:'2%' }}>{item.position}</Text>


                                                </View>

                                                <View style={{flexDirection:'row',marginLeft:'5%',alignItems:'center'}}>
                                                    <Map style={{marginTop:2}}/>
                                                    <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.80)', marginLeft: 3, marginTop: 4 }}>{item.Downtxt}</Text>


                                                </View>

                                
                                            </ImageBackground>

                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>

                    </View>
                )}


                {selecedTab == 4 && (
                    <View>
                        <View style={{ marginTop: 29, marginLeft: 20 }}>
                            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Latest Events</Text>
                        </View>

                        <View style={{ height: 290, marginTop: 10 }}>
                            <View >
                                <TouchableOpacity onPress={() => navigation.navigate('eventdetail', { sahil: RICH[0] })}>
                                    <Carousel
                                        ref={ref}
                                        onSnapToItem={(pageSecond) => setPageSecond(pageSecond)}
                                        layout={"default"}
                                        data={BACKGROUND}
                                        renderItem={renderImages1}
                                        sliderWidth={width}
                                        itemWidth={width}
                                        enableSnap={true}
                                        disableIntervalMomentum={true}
                                        removeClippedSubviews={true}
                                        snapToInterval={1}
                                    // loop={true}
                                    // autoplay={true}
                                    // loop={true}
                                    // autoplay={true}

                                    />
                                </TouchableOpacity>
                                <View style={{}}>
                                    <Pagination
                                        activeDotIndex={pageSecond}
                                        carouselRef={ref}
                                        tappableDots={true}
                                        inactiveDotOpacity={0.4}
                                        inactiveDotScale={1}
                                        dotsLength={BACKGROUND.length}
                                        dotStyle={{
                                            width: 7,
                                            borderRadius: 100,
                                            backgroundColor: "#3C45DA",
                                        }}
                                        inactiveDotStyle={{
                                            backgroundColor: "#3C45DA",
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: -10, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Events Around you</Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: 360 }}>

                            <FlatList
                                data={Reebok}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ marginLeft: 20 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={{ width: 223, height: 285, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                            <ImageBackground source={item.images} style={{ width: 206, height: 220, alignSelf: 'center', marginTop: 10 }}>
                                                <Image source={item.background} style={{ width: 46, height: 27.76, position: 'absolute', left: '72%', top: 10 }} />
                                                <View style={{ flexDirection: 'row', marginTop: '92%' }}>
                                                    <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: 10, borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Time />
                                                            <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                                        </View>

                                                    </View>
                                                    <View style={{ alignItems: 'flex-end', width: 95 }}>
                                                        <Text style={{ fontSize: 12, fontWeight: '700', color: 'white', marginTop: 5 }}>12th July</Text>
                                                    </View>
                                                </View>







                                            </ImageBackground>
                                            <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '600', marginLeft: 10, marginTop: 7 }}>{item.position}</Text>
                                            <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row' }}>
                                                <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                                <Text style={{ fontSize: 13, color: '#787878', marginLeft: 5, marginTop: 1 }}>{item.Downtxt}</Text>
                                            </View>



                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ marginTop: -5, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Popular in Adams St</Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={SINGHIS}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ marginLeft: 19 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={{ width: 280, height: 180, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                            <ImageBackground source={item.brown} style={{ width: 280, height: 180, alignSelf: 'center', marginTop: -1 }}>
                                                <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '59%', right: '53.3%' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Time />
                                                        <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                                    </View>

                                                </View>
                                                <View style={{ width: '92%', position: 'absolute', top: '75%', left: 9, justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '600', marginLeft: 2 }}>{item.position}</Text>



                                                </View>
                                                <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row', position: 'absolute', top: '83%', width: '92%', justifyContent: 'space-between' }}>
                                                    <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                                    <Text style={{ fontSize: 14, color: '#787878', marginLeft: 3, marginTop: 1, marginRight: '40%' }}>{item.Downtxt}</Text>
                                                    <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>{item.date}</Text>
                                                </View>
                                            </ImageBackground>

                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>

                    </View>

                )}

                {/* {selecedTab == 1 && (
                    <View>
                        <View style={{ marginTop: 29, marginLeft: 20 }}>
                            <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Latest Events</Text>
                        </View>

                        <View style={{ height: 290, marginTop: 10 }}>
                            <View >

                                <Carousel
                                    ref={ref}
                                    onSnapToItem={(page) => setPage(page)}
                                    layout={"default"}
                                    data={BACKGROUND}
                                    renderItem={renderImages1}
                                    sliderWidth={width}
                                    itemWidth={width}
                                    enableSnap={true}
                                    disableIntervalMomentum={true}
                                    removeClippedSubviews={true}
                                    snapToInterval={1}
                                // loop={true}
                                // autoplay={true}
                                // loop={true}
                                // autoplay={true}

                                />
                                <View style={{}}>
                                    <Pagination
                                        activeDotIndex={page}
                                        carouselRef={ref}
                                        tappableDots={true}
                                        inactiveDotOpacity={0.4}
                                        inactiveDotScale={1}
                                        dotsLength={BACKGROUND.length}
                                        dotStyle={{
                                            width: 7,
                                            borderRadius: 100,
                                            backgroundColor: "#3C45DA",
                                        }}
                                        inactiveDotStyle={{
                                            backgroundColor: "#3C45DA",
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: -10, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Events Around you</Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: 360 }}>

                            <FlatList
                                data={Reebok}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                style={{ marginLeft: 20 }}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={{ width: 223, height: 285, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                            <ImageBackground source={item.images} style={{ width: 206, height: 220, alignSelf: 'center', marginTop: 10 }}>
                                                <Image source={item.background} style={{ width: 46, height: 27.76, position: 'absolute', left: '72%', top: 10 }} />
                                                <View style={{ flexDirection: 'row', marginTop: '92%' }}>
                                                    <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: 10, borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Time />
                                                            <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                                        </View>

                                                    </View>
                                                    <View style={{ alignItems: 'flex-end', width: 95 }}>
                                                        <Text style={{ fontSize: 12, fontWeight: '700', color: 'white', marginTop: 5 }}>12th July</Text>
                                                    </View>
                                                </View>







                                            </ImageBackground>
                                            <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '600', marginLeft: 10, marginTop: 7 }}>{item.position}</Text>
                                            <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row' }}>
                                                <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                                <Text style={{ fontSize: 13, color: '#787878', marginLeft: 5, marginTop: 1 }}>{item.Downtxt}</Text>
                                            </View>



                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                        <View style={{ marginTop: -5, marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, color: '#01073D', fontWeight: '700' }}>Popular in Adams St</Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', marginRight: 19 }}>

                                        <Text style={{ fontSize: 14, color: '#01073D' }}>See all</Text>


                                        <Lessser style={{ marginLeft: 4, marginTop: 2 }} />

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                    <FlatList
                        data={SINGHIS}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{ marginLeft: 19 }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ width: 280, height: 180, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                    <ImageBackground source={item.brown} style={{ width: 280, height: 180, alignSelf: 'center', marginTop: -1 }}>
                                        <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '59%', right: '53.3%' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Time />
                                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                            </View>

                                        </View>
                                        <View style={{ width: '92%', position: 'absolute', top: '75%', left: 9, justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '600', marginLeft: 2 }}>{item.position}</Text>

                                           

                                        </View>
                                        <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row', position: 'absolute', top: '83%', width: '92%', justifyContent: 'space-between' }}>
                                            <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                            <Text style={{ fontSize: 14, color: '#787878', marginLeft: 3, marginTop: 1, marginRight: '40%' }}>{item.Downtxt}</Text>
                                          <Text style={{fontSize:12,color:'white',fontWeight:'bold'}}>{item.date}</Text>
                                        </View>
                                    </ImageBackground>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                    </View>

                )} */}



                {/* <View style={{ width: '100%', height: 360 }}>

                    <FlatList
                        data={NIKE}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{ marginLeft: 20 }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ width: 223, height: 303, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                    <ImageBackground source={item.plugin} style={{ width: 206, height: 220, alignSelf: 'center', marginTop: 10 }}>
                                        <Image source={item.background} style={{ width: 61, height: 27, position: 'absolute', left: '65%', top: 10 }} />
                                        <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '87%', right: '47%' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Time />
                                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                            </View>

                                        </View>
                                    </ImageBackground>
                                    <Text style={{ fontSize: 16, color: '#01073D', fontWeight: '600', marginLeft: 10, marginTop: 7 }}>{item.position}</Text>
                                    <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row' }}>
                                        <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                        <Text style={{ fontSize: 20, color: '#787878', marginLeft: 3, marginTop: -1 }}>{item.Downtxt}</Text>
                                    </View>

                                    <View style={{ marginTop: 1, flexDirection: 'row' }}>

                                        <Rating
                                            type='star'
                                            ratingColor='#3498db'

                                            ratingBackgroundColor='#c8c7c8'
                                            ratingCount={5}
                                            imageSize={13}
                                            style={{ paddingVertical: 2, paddingHorizontal: 10 }}
                                        />

                                        <Text style={{ fontSize: 10, color: '#787878', marginTop: 3 }}>(98 reviews)</Text>
                                    </View>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View> */}



                {/* <View>
                    <FlatList
                        data={SINGH}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{ marginLeft: 19 }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ width: 280, height: 180, borderRadius: 10, marginTop: 20, marginRight: 20, backgroundColor: 'white', marginBottom: '60%' }}>
                                    <ImageBackground source={item.brown} style={{ width: 280, height: 180, alignSelf: 'center', marginTop: -1 }}>
                                        <View style={{ width: 88, height: 24, backgroundColor: '#2596be', marginLeft: '36%', borderRadius: 3, opacity: 0.9, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '59%', right: '53.3%' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Time />
                                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 5 }}>{item.title}</Text>
                                            </View>

                                        </View>
                                        <View style={{ width: '92%', position: 'absolute', top: '75%', left: 9, flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '600', marginLeft: 2 }}>{item.position}</Text>

                                            <Text style={{ fontSize: 11, color: '#FFFFFF' }}>(89 reviews)</Text>

                                        </View>
                                        <View style={{ marginTop: 2, marginLeft: 9, flexDirection: 'row', position: 'absolute', top: '83%', width: '92%', justifyContent: 'space-between' }}>
                                            <Image source={item.maapss} style={{ width: 12, height: 14, tintColor: 'grey', marginTop: 3 }} />
                                            <Text style={{ fontSize: 14, color: '#787878', marginLeft: 3, marginTop: 1, marginRight: '40%' }}>{item.Downtxt}</Text>
                                            <Image source={item.stars} resizeMode='contain' style={{ width: 66, height: 12 }} />
                                        </View>
                                    </ImageBackground>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View> */}


            </ScrollView>
        </ImageBackground>

    )
}
export default FirstExample;
const styles = StyleSheet.create({


    categoriesListStyle: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20
    },

})