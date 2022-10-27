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
  Linking,
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
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

function About({navigation}) {
  const [sta, setSta] = React.useState('fb');
  const [stp, setStp] = React.useState('no');
  const [stm, setStm] = React.useState('no');
  const [stc, setStc] = React.useState('no');

  return (
    <>
      <StatusBar backgroundColor="#f7931e" />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.main}>
            <LinearGradient
              colors={['#f7931e', '#f2291a']}
              style={styles.linearGradient}>
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <ImageBackground
                  source={require('../assets/image/aboutHeadImg.png')}
                  resizeMode="contain"
                  style={{
                    width: wp('100%'),
                    height: hp('36%'),
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}>
                  <View
                    style={{
                      width: wp('100%'),
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: wp('95%'),
                        alignItems: 'flex-end',
                      }}>
                      <View
                        style={{
                          width: '45%',
                          flexDirection: 'row',
                          marginHorizontal: wp(4),
                          borderRadius: 6,
                          borderColor: '#EFF0F2',
                          borderWidth: 1,
                        }}>
                        <View style={styles.inputrect}>
                          <TextInput
                            style={styles.textArea}
                            placeholder="Search Food"
                            placeholderTextColor="#EFF0F2"
                          />
                        </View>
                        <View
                          style={{
                            width: '15%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Ionicons
                            size={wp(4)}
                            color="#EFF0F2"
                            name={'search'}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              {/*Disount and tabs box rect*/}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
                  paddingTop: hp(1.5),
                  paddingBottom: hp(16),
                  backgroundColor: '#fff',
                  marginTop: hp(-15),
                }}>
                <View style={{width: wp('100%'), alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: RFValue(16, 580),
                      color: '#F3591C',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    15% DISCOUNT ON 400+ MENU ITEMS
                  </Text>
                </View>
                <View style={{width: wp('100%'), alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: RFValue(14, 580),
                      color: '#F3591C',
                      textAlign: 'center',
                    }}>
                    Make every meal a big deal!
                  </Text>
                </View>
                <View
                  style={{
                    width: wp('100%'),
                    alignItems: 'flex-end',
                    paddingHorizontal: wp(4),
                  }}>
                  <Ionicons size={30} color="#F3591C" name={'share-social'} />
                  <Text
                    style={{
                      fontSize: RFValue(11, 580),
                      color: '#F3591C',
                      textAlign: 'center',
                    }}>
                    Share
                  </Text>
                </View>
                {/*tabs*/}
                <View
                  style={{
                    width: wp('100%'),
                    marginTop: hp(1),
                    flexDirection: 'row',
                  }}>
                  {sta === 'fb' ? (
                    <TouchableOpacity
                      onPress={() => {
                        setSta('fb');
                        setStp('no');
                        setStm('no');
                        setStc('no');
                      }}>
                      <View style={{width: wp('22%')}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),

                            paddingHorizontal: wp(2),
                            fontWeight: 'bold',
                            color: '#F3591C',
                            textDecorationLine: 'underline',
                          }}>
                          About
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setSta('fb');
                        setStp('no');
                        setStm('no');
                        setStc('no');
                      }}>
                      <View style={{width: wp('22%')}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            color: '#A7A6A6',
                            paddingHorizontal: wp(2),
                            fontWeight: 'bold',
                          }}>
                          About
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {stp == 'fb' ? (
                    <TouchableOpacity
                      onPress={() => {
                        setStp('fb');
                        setSta('no');
                        setStm('no');
                        setStc('no');
                      }}>
                      <View style={{width: wp('27%')}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            color: '#F3591C',
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                          }}>
                          Partnership
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setStp('fb');
                        setSta('no');
                        setStm('no');
                        setStc('no');
                      }}>
                      <View style={{width: wp('27%')}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            color: '#A7A6A6',
                            fontWeight: 'bold',
                          }}>
                          Partnership
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {stm == 'fb' ? (
                    <TouchableOpacity
                      onPress={() => {
                        setStm('fb');
                        setStp('no');
                        setSta('no');
                        setStc('no');
                      }}>
                      <View style={{width: wp('26%')}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            color: '#F3591C',
                            textDecorationLine: 'underline',
                            fontWeight: 'bold',
                          }}>
                          Membership
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setStm('fb');
                        setStp('no');
                        setSta('no');
                        setStc('no');
                      }}>
                      <View style={{width: wp('26%')}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            color: '#A7A6A6',
                            fontWeight: 'bold',
                          }}>
                          Membership
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {stc == 'fb' ? (
                    <TouchableOpacity
                      onPress={() => {
                        setStc('fb');
                        setSta('no');
                        setStm('no');
                        setStp('no');
                      }}>
                      <View style={{width: wp('25%'), alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            color: '#F3591C',
                            textDecorationLine: 'underline',
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}>
                          Contact
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setStc('fb');
                        setSta('no');
                        setStm('no');
                        setStp('no');
                      }}>
                      <View style={{width: wp('25%'), alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            color: '#A7A6A6',
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}>
                          Contact
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
                {/*About content view*/}
                {sta === 'fb' ? (
                  <View
                    style={{
                      width: wp('100%'),
                      paddingHorizontal: wp(2),
                      marginTop: hp(5),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12, 580),
                        textAlign: 'justify',
                        color: '#525252',
                      }}>
                      Eleat Rewards Club is T&T’s first Food Discount Network
                      for members to SAVE 15% ON MEALS from our restaurant
                      partners. We make it very simple for you to get instant
                      savings on every food purchase with no points, vouchers or
                      coupons to redeem.{'\n'}
                      {'\n'}
                      With our fast-growing food network, members are always
                      getting exclusive access to even more deals and discounts.
                      So, if you like to save and you like to eat, you should be
                      a member of Eleat!
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL('https://eleatrewards.com/')
                      }>
                      <View
                        style={{
                          marginTop: hp(5),
                          width: wp('60%'),
                          borderRadius: 6,
                          backgroundColor: '#F3591C',
                          paddingVertical: hp(1.3),
                          alignSelf: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(13, 580),
                            color: '#fff',
                            textAlign: 'center',
                          }}>
                          See Website For Details
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}
                {/*partner ship view*/}
                {stp === 'fb' ? (
                  <View
                    style={{
                      width: wp('100%'),
                      paddingHorizontal: wp(2),
                      marginTop: hp(5),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12, 580),
                        textAlign: 'justify',
                        color: '#525252',
                      }}>
                      Being an Eleat Rewards partner is a FREE and simple
                      process to help restaurants gain more loyal customers.
                      Partners can submit their contact information via our
                      website for FREE AND UNLIMITED PROMOTIONS of your
                      restaurant on social media and other platforms.
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL('https://eleatrewards.com/')
                      }>
                      <View
                        style={{
                          marginTop: hp(8),
                          width: wp('60%'),
                          borderRadius: 6,
                          backgroundColor: '#F3591C',
                          paddingVertical: hp(1.3),
                          alignSelf: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(13, 580),
                            color: '#fff',
                            textAlign: 'center',
                          }}>
                          See Website For Details
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}
                {/*Member ship*/}
                {stm === 'fb' ? (
                  <View
                    style={{
                      width: wp('100%'),
                      paddingHorizontal: wp(2),
                      marginTop: hp(5),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12, 580),
                        textAlign: 'justify',
                        color: '#525252',
                      }}>
                      Eleat Rewards membership is valid for 12 months starting
                      at only $40 USD with free delivery of your personalized
                      membership card. Present your card with valid ID to
                      receive an instant 15% discount at participating
                      restaurants and that’s it!{'\n'}
                      {'\n'}Eat. Save. Repeat. with Eleat!
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL('https://eleatrewards.com/')
                      }>
                      <View
                        style={{
                          marginTop: hp(6),
                          width: wp('60%'),
                          borderRadius: 6,
                          backgroundColor: '#F3591C',
                          paddingVertical: hp(1.3),
                          alignSelf: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(13, 580),
                            color: '#fff',
                            textAlign: 'center',
                          }}>
                          See Website For Details
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}
                {/*contact view*/}
                {stc === 'fb' ? (
                  <View
                    style={{
                      width: wp('100%'),

                      marginTop: hp(5),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12, 580),
                        textAlign: 'justify',
                        color: '#525252',
                        paddingHorizontal: wp(2),
                      }}>
                      Got a question, comment of suggestion? We’d love to hear
                      from you:
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(12, 580),
                        textAlign: 'justify',
                        fontWeight: 'bold',
                        color: '#525252',
                        paddingHorizontal: wp(2),
                      }}>
                      Our business hours are Mon-Fri from 10am to 4pm
                    </Text>
                    {/*tabs type buttons*/}
                    <View
                      style={{
                        width: wp('100%'),
                        alignItems: 'center',
                        marginTop: hp(2.5),
                      }}>
                      <View style={{width: wp('98%'), flexDirection: 'row'}}>
                        {/*start*/}
                        <TouchableOpacity
                          onPress={() =>
                            Linking.openURL('mailto:admin@eleatrewards.com')
                          }>
                          <View
                            style={{
                              alignItems: 'center',
                              borderWidth: 3,
                              paddingHorizontal: wp(3),
                              paddingVertical: hp(0.5),
                              justifyContent: 'center',
                              borderColor: '#f4591c',
                              borderRadius: 22,
                              marginLeft: wp(1),
                            }}>
                            <Text
                              style={{
                                fontSize: RFValue(11, 580),
                                textAlign: 'justify',
                                color: '#f4591c',
                              }}>
                              EMAIL
                            </Text>
                          </View>
                        </TouchableOpacity>
                        {/*start*/}
                        <TouchableOpacity
                          onPress={() => Linking.openURL(`tel:${373 - 5328}`)}>
                          <View
                            style={{
                              alignItems: 'center',
                              borderWidth: 3,
                              paddingHorizontal: wp(3),
                              paddingVertical: hp(0.5),
                              justifyContent: 'center',
                              borderColor: '#f4591c',
                              borderRadius: 22,
                              marginLeft: wp(4),
                            }}>
                            <Text
                              style={{
                                fontSize: RFValue(11, 580),
                                textAlign: 'justify',
                                color: '#f4591c',
                              }}>
                              CALL
                            </Text>
                          </View>
                        </TouchableOpacity>
                        {/*start*/}
                        <TouchableOpacity
                          onPress={() =>
                            Linking.openURL(
                              'https://www.instagram.com/eleatrewards/',
                            )
                          }>
                          <View
                            style={{
                              alignItems: 'center',
                              borderWidth: 3,
                              paddingHorizontal: wp(3),
                              paddingVertical: hp(0.5),
                              justifyContent: 'center',
                              borderColor: '#f4591c',
                              borderRadius: 22,
                              marginLeft: wp(4),
                            }}>
                            <Text
                              style={{
                                fontSize: RFValue(11, 580),
                                textAlign: 'justify',
                                color: '#f4591c',
                              }}>
                              INSTAGRAM
                            </Text>
                          </View>
                        </TouchableOpacity>
                        {/*start*/}
                        <TouchableOpacity
                          onPress={() =>
                            Linking.openURL(
                              'https://www.facebook.com/eleatrewardsclub ',
                            )
                          }>
                          <View
                            style={{
                              alignItems: 'center',
                              borderWidth: 3,
                              paddingHorizontal: wp(3),
                              paddingVertical: hp(0.5),
                              justifyContent: 'center',
                              borderColor: '#f4591c',
                              borderRadius: 22,
                              marginLeft: wp(4),
                            }}>
                            <Text
                              style={{
                                fontSize: RFValue(11, 580),
                                textAlign: 'justify',
                                color: '#f4591c',
                              }}>
                              FACEBOOK
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL('https://eleatrewards.com/')
                      }>
                      <View
                        style={{
                          marginTop: hp(6),
                          width: wp('60%'),
                          borderRadius: 6,
                          backgroundColor: '#F3591C',
                          paddingVertical: hp(1.3),
                          alignSelf: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(13, 580),
                            color: '#fff',
                            textAlign: 'center',
                          }}>
                          See Website For Details
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}
                {/*end*/}
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    width: wp('100%'),
  },
  linearGradient: {
    alignItems: 'center',
    width: wp('100%'),
  },
  inputrect: {
    width: '85%',
    paddingTop: hp(0.2),
  },
  textArea: {
    width: '100%',
    height: hp('5%'),
    paddingHorizontal: wp(3),
    top: 2,
    fontSize: RFValue(12, 580),
    justifyContent: 'flex-start',
    color: '#000',
  },
});

export default About;
