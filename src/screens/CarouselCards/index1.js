import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { WELCOMESCREENDATA } from "../../utils/mocks";
// import { STRINGS } from "../../utils/strings";
const { height, width } = Dimensions.get("screen")

const renderItem1 = ({ item }) => {
    return (

        <View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: width / 2.6 }}>
                <Image source={item?.image} style={styles.renderItem1_img} />
            </View>
        </View>

    );
};

const Onbording = ({ navigation }) => {
    const [page, setPage] = useState(0);
    const ref = useRef();
    const handleNext = () => {
        if (page < 3) {
            setPage(page + 1)
            ref.current.snapToNext(page + 1)
        }
        else {
            navigation.replace("Login")
        }
    }

    return (
        <ImageBackground resizeMethod="contain" source={page == 0 ? WELCOMESCREENDATA[0].background : page == 1 ? WELCOMESCREENDATA[1].background : page == 2 ? WELCOMESCREENDATA[2].background : WELCOMESCREENDATA[3].background} style={{ height: height, width: width }}>
            <View style={{}}>
                <View style={styles.renderItem1_view1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.renderItem1_text2}>{page == 0 ? WELCOMESCREENDATA[0].title : page == 1 ? WELCOMESCREENDATA[1].title : page == 2 ? WELCOMESCREENDATA[2].title : WELCOMESCREENDATA[3].title}</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text style={{ fontSize: 18, color: '#FFFFFF', textDecorationLine: 'underline', marginLeft: 50, marginTop:20 }}>{page == 0 ? WELCOMESCREENDATA[0].adder : page == 1 ? WELCOMESCREENDATA[1].adder : page == 2 ? WELCOMESCREENDATA[2].adder:page==3}</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <Text style={styles.renderItem1_text3}>{page == 0 ? WELCOMESCREENDATA[0].discription : page == 1 ? WELCOMESCREENDATA[1].discription : page == 2 ? WELCOMESCREENDATA[2].discription : WELCOMESCREENDATA[3].discription}</Text>
                    </View>
                </View>
                <Carousel
                    ref={ref}
                    onSnapToItem={(page) => setPage(page)}
                    layout={"default"}
                    data={WELCOMESCREENDATA}
                    renderItem={renderItem1}
                    sliderWidth={width}
                    itemWidth={width}
                    enableSnap={true}
                    disableIntervalMomentum={true}
                    removeClippedSubviews={true}
                    snapToInterval={1}
                // loop={true}
                //autoplay={true}

                />
                <View style={{ marginTop: 10 }}>
                    <Pagination
                        activeDotIndex={page}
                        carouselRef={ref}
                        tappableDots={true}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={1}
                        dotsLength={WELCOMESCREENDATA.length}
                        dotStyle={{
                            width: 7,
                            borderRadius: 100,
                            backgroundColor: "#FFFFFF",
                        }}
                        inactiveDotStyle={{
                            backgroundColor: "#FFFFFF",
                        }}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={handleNext}>
                        <View style={styles.Up}>
                            <Text style={styles.signUP}>
                                NEXT
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    );
};

export default Onbording;

const styles = StyleSheet.create({
    renderItem1_parentView: {
        // height: height,
        // width: width,
        justifyContent: "center",
        alignItems: "center",
        overflow: "scroll",
    },
    renderItem1_view1: {
        width: width / 1.5,
        fontSize: 20,
        top: "10%",
        left: 20,
        borderRadius: 18,

    },
    renderItem1_img: {
        width: width / 1.5,
        height: height / 2.5,
        resizeMode: "contain",
        // position:"absolute",


    },
    renderItem1_text1: {
        fontWeight: "700",
        color: "#000000",
    },
    renderItem1_text2: {
        marginVertical: 10,
        fontSize: 35,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    renderItem1_text3: {
        marginVertical: 12,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    Up: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        height: 50,
        width: width - 50,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: "20%",
        alignSelf: "center",
        marginBottom: '10%'
    },
    signUP: {
        fontSize: 18,
        fontWeight: "600",
        color: "rgba(48, 48, 48, 1)"
    },
});