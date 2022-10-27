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

function AllResturant({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#f7931e" />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.main}>
            <LinearGradient
              colors={['#f7931e', '#f2291a']}
              style={styles.linearGradient}>
              {/*search input rect*/}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(3),
                }}>
                <View
                  style={{
                    width: wp('90%'),
                    alignItems: 'flex-end',
                  }}>
                  <View
                    style={{
                      width: '45%',
                      flexDirection: 'row',
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
                      <Ionicons size={wp(4)} color="#EFF0F2" name={'search'} />
                    </View>
                  </View>
                </View>
              </View>
              {/*logo*/}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <Image
                  source={require('../assets/image/allresLogoImg.png')}
                  resizeMode="contain"
                  style={{
                    width: '50%',
                    height: 60,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}></Image>
              </View>
              {/*title and sub title*/}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(2),
                }}>
                <View style={{width: wp('94%'), alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: RFValue(20, 580),
                      fontWeight: 'bold',
                      color: '#fff',
                      letterSpacing: 1.2,
                      textAlign: 'center',
                    }}>
                    What do you want to eat today?
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(11.5, 580),
                      color: '#fff',
                      textAlign: 'center',
                      lineHeight: 22,
                      marginTop: hp(0.5),
                    }}>
                    Save 15% at these retaurants with your exclusive membership
                    ELEAT card
                  </Text>
                </View>
              </View>
              {/*categories*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: hp(2),
                }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{paddingRight: '30%'}}>
                  {/*piza*/}
                  <View style={{width: wp('18%'), alignItems: 'center'}}>
                    <View
                      style={{
                        width: wp('13%'),
                        padding: 10,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/pizaImg.png')}
                        resizeMode="contain"
                        style={{
                          width: 30,
                          height: 30,
                        }}></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(10.5, 580),
                        color: '#fff',
                        marginVertical: hp(1),
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      PIZZA
                    </Text>
                  </View>
                  {/*chicken*/}
                  <View style={{width: wp('18%'), alignItems: 'center'}}>
                    <View
                      style={{
                        width: wp('14%'),
                        padding: 8,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/chickenImg.png')}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 40,
                        }}></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11.5, 580),
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      CHICKEN
                    </Text>
                  </View>
                  {/*dessert*/}
                  <View style={{width: wp('18%'), alignItems: 'center'}}>
                    <View
                      style={{
                        width: wp('14%'),
                        padding: 8,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/icecreamImg.png')}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 40,
                        }}></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11.5, 580),
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      DESSERT
                    </Text>
                  </View>
                  {/*salad*/}
                  <View style={{width: wp('18%'), alignItems: 'center'}}>
                    <View
                      style={{
                        width: wp('14%'),
                        padding: 8,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/salidImg.png')}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 40,
                        }}></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11.5, 580),
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      SALAD
                    </Text>
                  </View>
                  {/*sushi*/}
                  <View style={{width: wp('18%'), alignItems: 'center'}}>
                    <View
                      style={{
                        width: wp('14%'),
                        padding: 8,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/suchiImg.png')}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 40,
                        }}></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11.5, 580),
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      SUSHI
                    </Text>
                  </View>
                  {/*burger*/}
                  <View style={{width: wp('18%'), alignItems: 'center'}}>
                    <View
                      style={{
                        width: wp('14%'),
                        padding: 8,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/burgerImg.png')}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 40,
                        }}></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11.5, 580),
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      BURGER
                    </Text>
                  </View>
                  <View style={{width: wp('18%'), alignItems: 'center'}}>
                    <View
                      style={{
                        width: wp('14%'),
                        padding: 8,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/iceImg.png')}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 40,
                        }}></Image>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11.5, 580),
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      ICE CREAM
                    </Text>
                  </View>
                </ScrollView>
              </View>
              {/*products*/}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                {/*start*/}
                <View
                  style={{
                    width: wp('92%'),
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    paddingTop: hp(1),
                    marginTop: hp(2),
                    paddingBottom: hp(1),
                  }}>
                  <View style={{width: wp('92%'), flexDirection: 'row'}}>
                    <View
                      style={{
                        width: wp('26%'),
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/p1.jpg')}
                        resizeMode="contain"
                        style={{
                          width: wp('29.7%'),
                          height: hp(16.6),
                          borderRadius: 20,
                        }}></Image>
                    </View>
                    <View style={{width: wp('69%')}}>
                      <Text
                        style={{
                          fontSize: RFValue(16, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#f4591c',
                          fontWeight: 'bold',
                          marginTop: hp(2),
                        }}>
                        Alex Creamery
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#595c5a',
                          marginVertical: hp(1),
                        }}>
                        Ice Cream, Cakes, Snacks, Lays
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#595c5a',
                        }}>
                        Curepe
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ProductDetail')}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            paddingHorizontal: wp(5),
                            color: '#595c5a',
                            alignSelf: 'flex-end',
                          }}>
                          more...
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/*end*/}
                {/*start*/}
                <View
                  style={{
                    width: wp('92%'),
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    paddingTop: hp(1),
                    marginTop: hp(2),
                    paddingBottom: hp(1),
                  }}>
                  <View style={{width: wp('92%'), flexDirection: 'row'}}>
                    <View
                      style={{
                        width: wp('26%'),
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/p2.jpg')}
                        resizeMode="contain"
                        style={{
                          width: wp('29.7%'),
                          height: hp(16.6),
                          borderRadius: 5,
                        }}></Image>
                    </View>
                    <View style={{width: wp('69%')}}>
                      <Text
                        style={{
                          fontSize: RFValue(16, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#f4591c',
                          fontWeight: 'bold',
                          marginTop: hp(2),
                        }}>
                        Chimichanga Mexican Grill
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#595c5a',
                          marginVertical: hp(1),
                        }}>
                        Tacos, Enchiladas & Burritos
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#595c5a',
                        }}>
                        The Crossing, San Fernando
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ProductDetail')}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            paddingHorizontal: wp(5),
                            color: '#595c5a',
                            alignSelf: 'flex-end',
                          }}>
                          more...
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/*end*/}
                {/*start*/}
                <View
                  style={{
                    width: wp('92%'),
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    paddingTop: hp(1),
                    marginTop: hp(2),
                    paddingBottom: hp(1),
                  }}>
                  <View style={{width: wp('92%'), flexDirection: 'row'}}>
                    <View
                      style={{
                        width: wp('26%'),
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/p3.jpg')}
                        resizeMode="contain"
                        style={{
                          width: wp('29.7%'),
                          height: hp(16.6),
                          borderRadius: 12,
                        }}></Image>
                    </View>
                    <View style={{width: wp('69%')}}>
                      <Text
                        style={{
                          fontSize: RFValue(16, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#f4591c',
                          fontWeight: 'bold',
                          marginTop: hp(2),
                        }}>
                        Dolce Vita Gourmet Cafe
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#595c5a',
                          marginVertical: hp(1),
                        }}>
                        Cakes, Pastries, Coffee, Salads & More
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          paddingHorizontal: wp(1.5),
                          color: '#595c5a',
                        }}>
                        Movie Towne, POS & C3 Centre
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ProductDetail')}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            paddingHorizontal: wp(5),
                            color: '#595c5a',
                            alignSelf: 'flex-end',
                          }}>
                          more...
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/*end*/}
              </View>
              <View style={{width: wp('100%'), marginVertical: hp(2)}}></View>
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
    paddingTop: hp(0.5),
  },
  textArea: {
    width: '85%',
    height: hp('5.3%'),
    paddingHorizontal: wp(3),
    fontSize: RFValue(12, 580),
    justifyContent: 'flex-start',
    color: '#000',
  },
});

export default AllResturant;
