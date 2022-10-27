import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  Linking,
  Image,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from 'react-native-geolocation-service';

function ProductDetail({navigation, route}) {
  const [modalVisiblex, setModalVisiblex] = useState(false);
  const {data} = route.params;
  console.log(data);

  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');

  useEffect(() => {
    requestLocationPermission();
  });

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getLoc();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getLoc();
        } else {
          alert(
            'Permission Access denied. Pease Make Sure GPS Permission is enabled and then exit app and run again',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getLoc = async () => {
    // here location code start
    await Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        console.log(position);
        setLong(position.coords.latitude);
        setLat(position.coords.latitude);
      },
      error => {
        getLoc();
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#f7931e" />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.main}>
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
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={{width: wp('20%'), justifyContent: 'center'}}>
                    <Ionicons
                      size={wp(7)}
                      color="#f4591c"
                      style={{top: hp(1.5)}}
                      name={'arrow-back'}
                    />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: wp('75%'),
                    paddingHorizontal: wp(2),
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Restaurants')}>
                    <View
                      style={{
                        width: wp('35%'),
                        alignItems: 'center',
                        paddingVertical: hp(1),
                        borderRadius: 6,
                        borderColor: '#f4591c',
                        borderWidth: 1,
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14, 580),
                          paddingHorizontal: wp(2.5),
                          color: '#f4591c',
                        }}>
                        Search Food
                      </Text>
                    </View>
                  </TouchableOpacity>
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
                source={require('../assets/image/productDetailScreenLogo.png')}
                resizeMode="contain"
                style={{
                  width: '50%',
                  height: 60,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                }}></Image>
            </View>
            {/*product images*/}
            <View style={{width: wp('100%'), alignItems: 'center'}}>
              <View style={{width: wp('95%')}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{paddingRight: '30%'}}>
                  {data.items.map((item, i) => (
                    <Image
                      source={{
                        uri:
                          'https://kktechpartner.com/eleate/dashboard/uploads/' +
                          item.photo,
                      }}
                      resizeMode="contain"
                      style={{
                        width: wp('30.7%'),
                        margin: wp(1),
                        height: hp(20),
                      }}></Image>
                  ))}
                </ScrollView>
              </View>
            </View>
            {/*title & sub title texts*/}
            <View
              style={{
                width: wp('100%'),
                alignItems: 'center',
              }}>
              {/*start*/}
              <View style={{width: wp('100%')}}>
                <View style={{width: wp('100%'), flexDirection: 'row'}}>
                  <View
                    style={{
                      width: wp('60%'),
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(16, 580),
                        paddingHorizontal: wp(2.5),
                        color: '#f4591c',
                        fontWeight: 'bold',
                      }}>
                      {data.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('40%'),
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(10, 580),
                        paddingHorizontal: wp(2),
                        color: '#000',
                      }}>
                      {data.address}
                    </Text>
                  </View>
                </View>
              </View>
              {/*start*/}
              <View style={{width: wp('100%')}}>
                <View style={{width: wp('100%'), flexDirection: 'row'}}>
                  <View
                    style={{
                      width: wp('60%'),
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(11, 580),
                        paddingHorizontal: wp(2.5),
                        color: '#595c5a',
                      }}>
                      {data.item}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('40%'),
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                    }}>
                    {/* <Text
                      style={{
                        fontSize: RFValue(11.5, 580),
                        paddingHorizontal: wp(2),
                        color: '#000',
                      }}>
                      Curepe
                    </Text> */}
                    {data.openlink === '' ? (
                      <Text
                        style={{
                          fontSize: RFValue(12, 580),
                          paddingHorizontal: wp(2),
                          color: 'lightgrey',
                          fontWeight: 'bold',
                        }}>
                        Open
                      </Text>
                    ) : (
                      <TouchableOpacity
                        onPress={() => Linking.openURL(`${data.openlink}`)}>
                        <Text
                          style={{
                            fontSize: RFValue(12, 580),
                            paddingHorizontal: wp(2),
                            color: '#00B050',
                            fontWeight: 'bold',
                          }}>
                          Open
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: wp('100%'),
                  paddingHorizontal: wp(2),
                  marginTop: hp(1.5),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(12, 580),
                    textAlign: 'justify',
                    color: '#595c5a',
                  }}>
                  {data.des}
                </Text>
              </View>
            </View>
            {/*tabs type buttons*/}
            <View
              style={{
                width: wp('100%'),
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <View style={{width: wp('98%')}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{paddingRight: '30%'}}>
                  {/*start*/}
                  {data.phone === '' ? (
                    <View
                      style={{
                        alignItems: 'center',
                        borderWidth: 3,
                        paddingHorizontal: wp(3),
                        paddingVertical: hp(0.5),
                        justifyContent: 'center',
                        borderColor: 'lightgrey',
                        borderRadius: 22,
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11, 580),
                          textAlign: 'justify',
                          color: 'lightgrey',
                        }}>
                        CALL
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => Linking.openURL(`tel:${data.phone}`)}>
                      <View
                        style={{
                          alignItems: 'center',
                          borderWidth: 3,
                          paddingHorizontal: wp(3),
                          paddingVertical: hp(0.5),
                          justifyContent: 'center',
                          borderColor: '#f4591c',
                          borderRadius: 22,
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
                  )}
                  {/*start*/}
                  {data.lat === '' ? (
                    <View
                      style={{
                        alignItems: 'center',
                        borderWidth: 3,
                        paddingHorizontal: wp(3),
                        paddingVertical: hp(0.5),
                        justifyContent: 'center',
                        borderColor: 'lightgrey',
                        borderRadius: 22,
                        marginLeft: wp(2),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11, 580),
                          textAlign: 'justify',
                          color: 'lightgrey',
                        }}>
                        DIRECTIONS
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(
                          `https://www.google.es/maps/dir/'${lat},${long}'/'${data.lat},${data.long}'`,
                        );
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          borderWidth: 3,
                          paddingHorizontal: wp(3),
                          paddingVertical: hp(0.5),
                          justifyContent: 'center',
                          borderColor: '#f4591c',
                          borderRadius: 22,
                          marginLeft: wp(2),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11, 580),
                            textAlign: 'justify',
                            color: '#f4591c',
                          }}>
                          DIRECTIONS
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {/*start*/}
                  {data.menu === '' ? (
                    <View
                      style={{
                        alignItems: 'center',
                        borderWidth: 3,
                        paddingHorizontal: wp(3),
                        paddingVertical: hp(0.5),
                        justifyContent: 'center',
                        borderColor: 'lightgrey',
                        borderRadius: 22,
                        marginLeft: wp(2),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11, 580),
                          textAlign: 'justify',
                          color: 'lightgrey',
                        }}>
                        MENU
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          'https://kktechpartner.com/eleate/dashboard/uploads/' +
                            data.menu,
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
                          marginLeft: wp(2),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11, 580),
                            textAlign: 'justify',
                            color: '#f4591c',
                          }}>
                          MENU
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {/*start*/}
                  {data.del === '' ? (
                    <View
                      style={{
                        alignItems: 'center',
                        borderWidth: 3,
                        paddingHorizontal: wp(3),
                        paddingVertical: hp(0.5),
                        justifyContent: 'center',
                        borderColor: 'lightgrey',
                        borderRadius: 22,
                        marginLeft: wp(2),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11, 580),
                          textAlign: 'justify',
                          color: 'lightgrey',
                        }}>
                        DELIVERY
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisiblex(true);
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          borderWidth: 3,
                          paddingHorizontal: wp(3),
                          paddingVertical: hp(0.5),
                          justifyContent: 'center',
                          borderColor: '#f4591c',
                          borderRadius: 22,
                          marginLeft: wp(2),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11, 580),
                            textAlign: 'justify',
                            color: '#f4591c',
                          }}>
                          DELIVERY
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  {/*start*/}
                  {data.social === '' ? (
                    <View
                      style={{
                        alignItems: 'center',
                        borderWidth: 3,
                        paddingHorizontal: wp(3),
                        paddingVertical: hp(0.5),
                        justifyContent: 'center',
                        borderColor: 'lightgrey',
                        borderRadius: 22,
                        marginLeft: wp(2),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11, 580),
                          textAlign: 'justify',
                          color: 'lightgrey',
                        }}>
                        SOCIAL
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => Linking.openURL(`${data.social}`)}>
                      <View
                        style={{
                          alignItems: 'center',
                          borderWidth: 3,
                          paddingHorizontal: wp(3),
                          paddingVertical: hp(0.5),
                          justifyContent: 'center',
                          borderColor: '#f4591c',
                          borderRadius: 22,
                          marginLeft: wp(2),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11, 580),
                            textAlign: 'justify',
                            color: '#f4591c',
                          }}>
                          SOCIAL
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </ScrollView>
              </View>
            </View>
            {/*Ameneties*/}
            <View style={{width: wp('100%'), marginTop: hp(3)}}>
              <View style={{width: wp('100%'), flexDirection: 'row'}}>
                <View style={{width: wp('50%')}}>
                  <Text
                    style={{
                      fontSize: RFValue(16, 580),
                      paddingHorizontal: wp(2),
                      color: '#f4591c',
                      fontWeight: 'bold',
                    }}>
                    Amenities
                  </Text>
                </View>
                <View
                  style={{
                    width: wp('50%'),
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(10, 580),
                      paddingHorizontal: wp(2),
                      color: '#f4591c',
                    }}>
                    <MaterialCommunityIcons
                      size={wp(6)}
                      color="#f4591c"
                      name={'chevron-right'}
                    />
                  </Text>
                </View>
              </View>
              <View style={{width: wp('100%'), marginTop: hp(2.5)}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{paddingRight: '30%'}}>
                  {/*start*/}

                  <View
                    style={{
                      alignItems: 'center',
                      width: wp('16%'),
                    }}>
                    {data.dine_in === 'yes' ? (
                      <>
                        <FontAwesome5
                          size={wp(6)}
                          color="#000"
                          name={'utensils'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Dine In
                        </Text>
                      </>
                    ) : (
                      <>
                        <FontAwesome5
                          size={wp(6)}
                          color="lightgrey"
                          name={'utensils'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Dine In
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('20%')}}>
                    {data.parking === 'yes' ? (
                      <>
                        <MaterialCommunityIcons
                          size={wp(6)}
                          color="#000"
                          name={'car-hatchback'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Parking
                        </Text>
                      </>
                    ) : (
                      <>
                        <MaterialCommunityIcons
                          size={wp(6)}
                          color="lightgrey"
                          name={'car-hatchback'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Parking
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('20%')}}>
                    {data.washroom === 'yes' ? (
                      <>
                        <MaterialCommunityIcons
                          size={wp(6)}
                          color="#000"
                          name={'human-male-female'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Washroom
                        </Text>
                      </>
                    ) : (
                      <>
                        <MaterialCommunityIcons
                          size={wp(6)}
                          color="lightgrey"
                          name={'human-male-female'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Washroom
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('20%')}}>
                    {data.curbside === 'yes' ? (
                      <>
                        <Feather
                          size={wp(6)}
                          color="#000"
                          name={'shopping-bag'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Curbside Pickup
                        </Text>
                      </>
                    ) : (
                      <>
                        <Feather
                          size={wp(6)}
                          color="lightgrey"
                          name={'shopping-bag'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Curbside Pickup
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('20%')}}>
                    {data.credit_card === 'yes' ? (
                      <>
                        <Ionicons
                          size={wp(6)}
                          color="#000"
                          name={'card-outline'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Credit Card Linx
                        </Text>
                      </>
                    ) : (
                      <>
                        <Ionicons
                          size={wp(6)}
                          color="lightgrey"
                          name={'card-outline'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Credit Card Linx
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('20%')}}>
                    {data.wifi === 'yes' ? (
                      <>
                        <Ionicons size={wp(6)} color="#000" name={'wifi'} />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Free WiFi
                        </Text>
                      </>
                    ) : (
                      <>
                        <Ionicons
                          size={wp(6)}
                          color="lightgrey"
                          name={'wifi'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Free WiFi
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('20%')}}>
                    {data.wheelchair === 'yes' ? (
                      <>
                        <FontAwesome
                          size={wp(6)}
                          color="#000"
                          name={'wheelchair-alt'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Wheelchair Access
                        </Text>
                      </>
                    ) : (
                      <>
                        <FontAwesome
                          size={wp(6)}
                          color="lightgrey"
                          name={'wheelchair-alt'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Wheelchair Access
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('24%')}}>
                    {data.reservation === 'yes' ? (
                      <>
                        <SimpleLineIcons
                          size={wp(6)}
                          color="#000"
                          name={'clock'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Reservation
                        </Text>
                      </>
                    ) : (
                      <>
                        <SimpleLineIcons
                          size={wp(6)}
                          color="lightgrey"
                          name={'clock'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Reservation
                        </Text>
                      </>
                    )}
                  </View>
                  {/*start*/}
                  <View style={{alignItems: 'center', width: wp('25%')}}>
                    {data.entertain === 'yes' ? (
                      <>
                        <MaterialCommunityIcons
                          size={wp(6)}
                          color="#000"
                          name={'human-handsup'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: '#000',
                            textAlign: 'center',
                          }}>
                          Entertainment
                        </Text>
                      </>
                    ) : (
                      <>
                        <MaterialCommunityIcons
                          size={wp(6)}
                          color="lightgrey"
                          name={'human-handsup'}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11.5, 580),
                            marginVertical: hp(0.4),
                            color: 'lightgrey',
                            textAlign: 'center',
                          }}>
                          Entertainment
                        </Text>
                      </>
                    )}
                  </View>
                </ScrollView>
              </View>
            </View>
            {/*Business hours*/}
            <View style={{width: wp('100%')}}>
              <View style={{width: wp('90%')}}>
                <Text
                  style={{
                    fontSize: RFValue(16, 580),
                    paddingHorizontal: wp(2),
                    color: '#f4591c',
                    fontWeight: 'bold',
                  }}>
                  Business Hours
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(11.5, 580),
                    paddingHorizontal: wp(2),
                    marginVertical: hp(0.4),
                    color: '#595c5a',
                  }}>
                  {data.business_hours}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {/*Modal Start*/}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisiblex}
            onRequestClose={() => {
              setModalVisiblex(false);
            }}>
            <View style={styles.centeredViewx}>
              <View style={styles.modalViewx}>
                <View
                  style={{
                    width: wp('95%'),
                    paddingBottom: hp(1.8),
                    paddingTop: hp(1.8),
                    marginTop: 1,
                    paddingHorizontal: wp(3),
                    borderColor: 'lightgrey',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(13, 580),
                      color: '#232426',
                    }}>
                    {data.del}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisiblex(false);
                  }}>
                  <View
                    style={{
                      width: wp('95%'),
                      paddingBottom: hp(1.8),
                      marginTop: 1,
                      alignItems: 'flex-end',
                      paddingHorizontal: wp(3),
                      borderColor: 'lightgrey',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(13, 580),
                        color: '#f4591c',
                      }}>
                      Cancel
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        {/* Modal End*/}
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
    width: wp('55%'),
    borderWidth: 1,
    paddingTop: hp(0.5),
  },
  textArea: {
    width: '85%',
    height: hp('5.3%'),
    paddingHorizontal: wp(3),
    fontSize: RFValue(12, 580),
    justifyContent: 'flex-start',
    color: '#f4591c',
  },
  centeredViewx: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    opacity: 0.9,
  },
  modalViewx: {
    margin: 0,
    width: wp('95%'),
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
  },
});

export default ProductDetail;
