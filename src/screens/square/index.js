import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
const { width, height } = Dimensions.get('screen');

import Face from '../../../assets/images/face.svg';
import Down from '../../../assets/images/down.svg';
import Scanner from '../../../assets/images/scanner.svg';
import Time from '../../../assets/images/time.svg';
import Lessser from '../../../assets/images/less.svg';
import Map from '../../../assets/images/maps.svg';
import Bell from '../../../assets/images/bell.svg';
import Cart from '../../../assets/images/cart.svg';
import BUY from '../../../assets/images/buy.svg';
import HEART from '../../../assets/images/heart.svg';
import PROFILE from '../../../assets/images/profile.svg';
import HEAD from '../../../assets/images/headphone.svg';
import PHOTO from '../../../assets/images/abhi.svg';
import PHOTO1 from '../../../assets/images/rohit.svg';
import PHOTO2 from '../../../assets/images/sahil.svg';
import GREATER from '../../../assets/images/frrr.svg';
import STADIUM from '../../../assets/images/stadium.svg';
import HOME from '../../../assets/images/homes.svg';
import MYPRODUCT from '../../../assets/images/myproduct.svg';
import Contact from '../../../assets/images/contact.svg';
import Blocked from '../../../assets/images/blocked.svg';
import Request from '../../../assets/images/request.svg';




const BOXES = () => {
  return (
    <View>
      <View style={styles.ORDERVIEW}>
        <TouchableOpacity style={styles.ORDERMYPROFILE_TOUCH}>
          <BUY />
          <Text style={styles.ORDERTXT}>Orders</Text>


        </TouchableOpacity>
        <TouchableOpacity style={styles.WISHLISTVIEW}>
          <HEART />
          <Text style={styles.WISHLISTXT}>Wishlist</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.MYPROFILEVIEW}>

        <TouchableOpacity style={styles.PROFILEVIEW}>
          <HEAD />
          <Text style={styles.PROFILETXT}>My Profile</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.HELPCENTER}>
          <PROFILE />
          <Text style={styles.HELPTXT}>Help Center</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const CardView = () => {
  return (
    <View>
      <View style={styles.CARDVIEW_MAIN}>
        <Text style={styles.SESSIONSTXT}>Sessions</Text>

        <View>
          <View style={styles.PHOTO_VIEW}>
            <View style={{ flexDirection: 'row' }}>
              <PHOTO />
              <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>Physiotherapist</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <PHOTO1 />
              <Text style={{ marginTop: 4, marginLeft: '8%', fontSize: 14, color: '#515151' }}>Dietician</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <PHOTO2 />
              <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>Coach</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

        </View>
      </View>

      <View style={styles.EVENTIVIEW_MAIN}>
        <Text style={styles.SESSIONSTXT}>Events</Text>
        <View>
          <View style={styles.PHOTO_VIEW}>
            <View style={{ flexDirection: 'row' }}>
              <PHOTO />
              <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>Physiotherapist</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <PHOTO1 />
              <Text style={{ marginTop: 4, marginLeft: '8%', fontSize: 14, color: '#515151' }}>Dietician</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <PHOTO2 />
              <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>Coach</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

        </View>

      </View>
      <View style={styles.EVENTIVIEW_MAIN}>
        <Text style={styles.SESSIONSTXT}>Bookings</Text>
        <View>
          <View style={{ flexDirection: 'row', marginTop: '6%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <STADIUM />
              <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>Venue</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <HOME />
              <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>Events</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <PHOTO2 />
              <Text style={{ marginTop: 4, marginLeft: '8%', fontSize: 14, color: '#515151' }}>Competitions</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

        </View>
      </View>

      <View style={styles.EVENTIVIEW_MAIN}>
        <Text style={styles.SESSIONSTXT}>Community</Text>
        <View>
          <View style={{ flexDirection: 'row', marginTop: '6%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Contact />
              <Text style={{ marginTop: 4, marginLeft: '8%', fontSize: 14, color: '#515151' }}>Followers</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Request />
              <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>Requests</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '4%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Blocked />
              <Text style={{ marginTop: 4, marginLeft: '8%', fontSize: 14, color: '#515151' }}>Blocked</Text>

            </View>
            <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
          </View>

        </View>
      </View>

      <View style={styles.REFURBISHED_MAIN}>
        <Text style={styles.SESSIONSTXT}>Refurbished</Text>
        <View style={{ flexDirection: 'row', marginTop: '6%', marginLeft: '4%', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <MYPRODUCT />
            <Text style={{ marginTop: 4, marginLeft: '10%', fontSize: 14, color: '#515151' }}>My Products</Text>

          </View>
          <GREATER style={{ marginRight: '7%', marginTop: 3 }} />
        </View>
      </View>
      <View style={{ marginBottom: '30%' }}>
      </View>
    </View>
  )
}

const SquareIndex = () => {

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
      <BOXES />
      <CardView />
    </ScrollView>
  )
}
export default SquareIndex

const styles = StyleSheet.create({
  MAINCONTAINER: {
    height: height, backgroundColor: '#FFFFFF'
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
  ORDERVIEW: {
    marginTop: '10%', marginLeft: '6%', flexDirection: 'row'
  },
  MYPROFILEVIEW: {
    marginTop: '4%', marginLeft: '6%', flexDirection: 'row'
  },

  ORDERMYPROFILE_TOUCH: { width: width / 2.3, height: 50, backgroundColor: '#FFF7E9', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },

  ORDERTXT: { fontSize: 12, color: '#FEB020', margin: '8%', fontWeight: '600' },
  WISHLISTVIEW: { width: width / 2.3, height: 50, backgroundColor: '#FFF0F5', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '3%' },


  WISHLISTXT: { fontSize: 12, color: '#FD4685', margin: '8%', fontWeight: '600' },
  PROFILEVIEW: { width: width / 2.3, height: 50, backgroundColor: '#F7F0FF', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },

  PROFILETXT: { fontSize: 12, color: '#FEB020', margin: '8%', fontWeight: '600' },
  HELPCENTER: { width: width / 2.3, height: 50, backgroundColor: '#E2FFFA', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '3%' },
  HELPTXT: { fontSize: 12, color: '#FEB020', margin: '8%', fontWeight: '600' },
  CARDVIEW_MAIN: { width: '90%', height: height / 4.5, backgroundColor: '#ffff', borderWidth: 1, borderColor: '#fff', elevation: 1, borderRadius: 10, marginTop: '10%', alignSelf: 'center' },
  EVENTIVIEW_MAIN: { width: '90%', height: height / 4.5, backgroundColor: '#ffff', borderWidth: 1, borderColor: '#fff', elevation: 1, borderRadius: 10, marginTop: '4%', alignSelf: 'center' },
  REFURBISHED_MAIN: { width: '90%', height: height / 8, backgroundColor: '#ffff', borderWidth: 1, borderColor: '#fff', elevation: 1, borderRadius: 10, marginTop: '4%', alignSelf: 'center', marginBottom: '10%' },
  SESSIONSTXT: { fontSize: 18, color: '#01073D', fontWeight: '600', marginTop: '4%', marginLeft: '5%' },
  PHOTO_VIEW: { flexDirection: 'row', marginTop: '6%', marginLeft: '4%', justifyContent: 'space-between' }
})