import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

function Welcome({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#f7931e" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.main}>
            <LinearGradient
              colors={['#f7931e', '#f2291a']}
              style={styles.linearGradient}>
              <View style={{width: wp('100%'), marginTop: hp(2)}}>
                <Image
                  source={require('../assets/image/whiteLogo.png')}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: 80,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}></Image>
              </View>
              <View style={{width: wp('100%')}}>
                <ImageBackground
                  source={require('../assets/image/burgerBg.png')}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '97%',
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}>
                  <View
                    style={{
                      width: wp('100%'),
                      marginTop: hp('50%'),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        padding: wp(2),
                        width: wp('52%'),
                        opacity: 0.8,
                        backgroundColor: '#fff',
                        borderRadius: 18,
                        paddingBottom: hp(3),
                        paddingTop: hp(2),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(15, 580),
                          marginTop: hp(1),
                          paddingHorizontal: wp(4),
                          lineHeight: 25,
                          color: '#F3591C',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Welcome to {'\n'} Eleat Rewards!
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(14, 580),
                          paddingHorizontal: wp(6),
                          lineHeight: 25,
                          marginTop: hp(1),
                          color: '#000',
                          textAlign: 'center',
                        }}>
                        Good Deals on Great Meals
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Tabb')}>
                        <View
                          style={{
                            width: wp('30%'),
                            textAlign: 'center',
                            marginTop: hp(2),
                            borderRadius: 18,
                            paddingVertical: hp(0.8),
                            alignSelf: 'center',
                            backgroundColor: '#f7931e',
                          }}>
                          <Text
                            style={{
                              fontSize: RFValue(12, 580),
                              color: '#fff',
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}>
                            Get Started
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: wp('100%'),
  },
  main: {
    width: wp('100%'),
  },
  linearGradient: {
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%'),
  },
});

export default Welcome;
