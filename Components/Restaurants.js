import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  ActivityIndicator,
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

function Restaurant({navigation}) {
  const [data, setData] = useState([]);
  const [dumdata, setDumData] = useState([]);
  const [search, setSearch] = useState('');
  const [m, setM] = useState('');

  useEffect(() => {
    fetch('https://kktechpartner.com/eleate/dashboard/getdata.php')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
        setDumData(json);
      });
  }, []);

  const find = t => {
    const words = [...data];
    setSearch(t);
    if (t === '') {
      setM('');
      setData(dumdata);
    } else {
      const newData = words.filter(item => {
        const itemData = `${item.item.toUpperCase()} ${item.item.toUpperCase()} ${item.item.toUpperCase()}`;
        const textData = t.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setData(newData);

      if (newData[0] == null) {
        setM('1');
      } else {
        setM('');
      }
    }
  };

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
                    flexDirection: 'row',
                  }}>
                  <View style={{width: wp('45%')}}>
                    <View
                      style={{
                        width: '90%',
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
                          value={search}
                          onChangeText={e => {
                            find(e);
                          }}
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
                  <View
                    style={{
                      width: wp('45%'),
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                    }}>
                    {/* <AntDesign size={wp(6)} color="#EFF0F2" name={'filter'} /> */}
                    <Text
                      style={{
                        fontSize: RFValue(12, 580),
                        color: '#fff',
                        lineHeight: 22,
                        marginTop: hp(0.5),
                      }}>
                      Filter Search Results
                    </Text>
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
                      fontSize: RFValue(18, 580),
                      fontWeight: 'bold',
                      color: '#fff',
                      letterSpacing: 1.2,
                      textAlign: 'center',
                    }}>
                    What do you want to eat today?
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(11, 580),
                      color: '#fff',
                      textAlign: 'center',
                      lineHeight: 22,
                      marginTop: hp(0.5),
                    }}>
                    Save 15% at these retaurants with your exclusive {'\n'}ELEAT
                    membership card
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
                        width: wp('13%'),
                        padding: 10,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}>
                      <Image
                        source={require('../assets/image/chickenImg.png')}
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
                        fontWeight: 'bold',
                        marginVertical: hp(1),
                        textAlign: 'center',
                      }}>
                      CHICKEN
                    </Text>
                  </View>
                  {/*dessert*/}
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
                        source={require('../assets/image/icecreamImg.png')}
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
                        fontWeight: 'bold',
                        marginVertical: hp(1),
                        textAlign: 'center',
                      }}>
                      DESSERT
                    </Text>
                  </View>
                  {/*salad*/}
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
                        source={require('../assets/image/salidImg.png')}
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
                        fontWeight: 'bold',
                        marginVertical: hp(1),
                        textAlign: 'center',
                      }}>
                      SALAD
                    </Text>
                  </View>
                  {/*sushi*/}
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
                        source={require('../assets/image/suchiImg.png')}
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
                      SUSHI
                    </Text>
                  </View>
                  {/*burger*/}
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
                        source={require('../assets/image/burgerImg.png')}
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
                        fontWeight: 'bold',
                        marginVertical: hp(1),
                        textAlign: 'center',
                      }}>
                      BURGER
                    </Text>
                  </View>
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
                        source={require('../assets/image/iceImg.png')}
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
                      ICE CREAM
                    </Text>
                  </View>
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
                        source={require('../assets/image/smoothieImg.jpg')}
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
                      SMOOTHIE
                    </Text>
                  </View>
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
                        source={require('../assets/image/tacoImg.jpg')}
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
                      TACO
                    </Text>
                  </View>
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
                        source={require('../assets/image/coffeeImg.jpg')}
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
                      COFFEE
                    </Text>
                  </View>
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
                        source={require('../assets/image/fishImg.jpg')}
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
                      SEAFOOD
                    </Text>
                  </View>
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
                        source={require('../assets/image/pastryImg.jpg')}
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
                      PASTRY
                    </Text>
                  </View>
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
                        source={require('../assets/image/comboImg.jpg')}
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
                      COMBO
                    </Text>
                  </View>
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
                        source={require('../assets/image/soupImg.png')}
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
                      SOUP
                    </Text>
                  </View>
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
                        source={require('../assets/image/sandwichImg.jpg')}
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
                      SANDWICH
                    </Text>
                  </View>
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
                        source={require('../assets/image/bbqImg.jpg')}
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
                      BARBEQUE
                    </Text>
                  </View>
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
                        source={require('../assets/image/gyroImg.jpg')}
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
                      GYRO
                    </Text>
                  </View>
                </ScrollView>
              </View>

              {/*products*/}

              {data[0] == null ? (
                <ActivityIndicator
                  size="large"
                  color="#fff"
                  style={{marginTop: hp(2)}}
                />
              ) : null}

              {m == '1' ? (
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    color: '#fff',
                  }}>
                  No data found
                </Text>
              ) : null}

              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                {/*start*/}
                {data.map((data, i) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetail', {data: data})
                    }
                    key={i}>
                    <View
                      style={{
                        width: wp('92%'),
                        backgroundColor: '#fff',
                        borderRadius: 16,
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
                            source={{
                              uri:
                                'https://kktechpartner.com/eleate/dashboard/uploads/' +
                                data.photo,
                            }}
                            resizeMode="contain"
                            style={{
                              width: wp('29.7%'),
                              height: hp(16.6),
                              borderRadius: 55,
                            }}></Image>
                        </View>
                        <View style={{width: wp('69%')}}>
                          <Text
                            style={{
                              fontSize: RFValue(15, 580),
                              paddingHorizontal: wp(1.5),
                              color: '#f4591c',
                              fontWeight: 'bold',
                              marginTop: hp(2),
                            }}>
                            {data.title}
                          </Text>
                          <Text
                            style={{
                              fontSize: RFValue(11.5, 580),
                              paddingHorizontal: wp(1.5),
                              color: '#595c5a',
                              marginVertical: hp(1),
                            }}>
                            {data.item}
                          </Text>
                          <Text
                            style={{
                              fontSize: RFValue(11, 580),
                              paddingHorizontal: wp(1.5),
                              color: '#F7931E',
                            }}>
                            {data.address}
                          </Text>
                          <Text
                            style={{
                              fontSize: RFValue(12, 580),
                              paddingHorizontal: wp(5),
                              color: '#595c5a',
                              alignSelf: 'flex-end',
                            }}>
                            more...
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
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
    width: '100%',
    height: hp('5%'),
    paddingHorizontal: wp(3),
    fontSize: RFValue(12, 580),
    justifyContent: 'flex-start',
    color: '#fff',
  },
});

export default Restaurant;
