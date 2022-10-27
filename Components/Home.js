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
import {url} from './url';

function Home({navigation}) {
  const [data, setData] = useState([]);
  const [dumdata, setDumData] = useState([]);
  const [search, setSearch] = useState('');
  const [m, setM] = useState('');
  const [an, setAn] = useState('');

  useEffect(() => {
    fetch('https://kktechpartner.com/eleate/dashboard/getlat.php')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json);
        setDumData(json);
      });

    fetch('https://kktechpartner.com/eleate/dashboard/getan.php')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        console.log(json);
        setAn(json[0].photo);
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
              {/*main head*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: hp(3),
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: wp('95%'),
                    backgroundColor: '#fff',
                    borderRadius: 16,
                  }}>
                  <View style={{width: wp('95%'), flexDirection: 'row'}}>
                    <View
                      style={{
                        width: wp('55%'),
                        alignItems: 'flex-start',
                        padding: wp(2),
                      }}>
                      <Image
                        source={require('../assets/image/blackLogo.png')}
                        resizeMode="contain"
                        style={{
                          width: '70%',
                          height: 70,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        }}></Image>
                      <Text
                        style={{
                          fontSize: RFValue(16, 580),
                          marginTop: hp(1),
                          color: '#f4591c',
                          fontWeight: 'bold',
                        }}>
                        15% Discount
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(14, 580),
                          marginTop: hp(0.5),
                          color: '#000',
                        }}>
                        off your favourite foods!
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL('https://www.eleatrewards.com/')
                        }>
                        <Text
                          style={{
                            fontSize: RFValue(14, 580),
                            marginTop: hp(0.2),
                            color: '#f7931e',
                          }}>
                          eleatrewards.com
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{width: wp('40%')}}>
                      <Image
                        source={require('../assets/image/man.png')}
                        resizeMode="contain"
                        style={{
                          width: wp(46),
                          top: 2,
                          height: hp(23.5),
                        }}></Image>
                    </View>
                  </View>
                </View>
              </View>
              {/*Search inout box*/}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <View
                  style={{
                    width: wp('95%'),
                    flexDirection: 'row',
                    borderRadius: 6,
                    backgroundColor: '#fff',
                  }}>
                  <View style={styles.inputrect}>
                    <TextInput
                      style={styles.textArea}
                      placeholder="Search restaurants, food"
                      placeholderTextColor="#000"
                      value={search}
                      onChangeText={e => {
                        find(e);
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: wp('12%'),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Ionicons size={18} color="#000" name={'search'} />
                  </View>
                </View>
              </View>
              {/*Announcement image*/}
              {an == '' ? (
                <ActivityIndicator size="large" color="#fff" />
              ) : null}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <Image
                  source={{
                    uri:
                      'https://kktechpartner.com/eleate/dashboard/uploads/' +
                      an,
                  }}
                  resizeMode="contain"
                  style={{
                    width: wp('95%'),
                    height: hp(28.5),
                    borderRadius: 22,
                  }}></Image>
              </View>
              {/*View all resturants rect*/}
              <View
                style={{
                  width: wp('100%'),
                  alignItems: 'center',
                  marginTop: hp(2),
                }}>
                <View style={{width: wp('95%'), flexDirection: 'row'}}>
                  <View style={{width: wp('65%'), justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: RFValue(18, 580),
                        color: '#fff',
                        fontWeight: 'bold',
                      }}>
                      New Restaurants
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp('30%'),
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Restaurants')}>
                      <View
                        style={{
                          width: wp('20%'),
                          backgroundColor: '#fff',
                          alignItems: 'center',
                          paddingVertical: hp(1.2),
                          borderTopLeftRadius: 22,
                          borderBottomLeftRadius: 22,
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(14, 580),
                            color: '#000',
                          }}>
                          All
                          {/* <Entypo
                            size={18}
                            color="#f7931e"
                            name={'arrow-right'}
                          /> */}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/*Resturants products*/}

              {data[0] == null ? (
                <>
                  {m == '' ? (
                    <ActivityIndicator
                      size="large"
                      color="#fff"
                      style={{marginTop: hp(2)}}
                    />
                  ) : null}
                </>
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
                  marginTop: hp(1.5),
                }}>
                <View style={{width: wp('97%')}}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingRight: '30%'}}>
                    {/*start*/}
                    {data.map((data, i) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('ProductDetail', {data: data})
                        }
                        key={i}>
                        <View
                          style={{
                            width: wp('90%'),
                            margin: 4,
                            backgroundColor: '#fff',
                            paddingTop: hp(1),
                            paddingBottom: hp(1),
                            borderRadius: 16,
                          }}>
                          <View
                            style={{width: wp('90%'), flexDirection: 'row'}}>
                            <View
                              style={{
                                width: wp('60%'),
                                paddingHorizontal: wp(1),
                              }}>
                              <Text
                                style={{
                                  fontSize: RFValue(16, 580),
                                  paddingHorizontal: wp(1.5),
                                  color: '#f4591c',
                                  marginVertical: hp(1),
                                  fontWeight: 'bold',
                                }}>
                                {data.title}
                              </Text>
                              <Text
                                style={{
                                  fontSize: RFValue(12, 580),
                                  paddingHorizontal: wp(1.5),
                                  color: '#000',
                                }}>
                                {data.item}
                              </Text>
                              <Text
                                style={{
                                  fontSize: RFValue(12, 580),
                                  marginVertical: hp(1),
                                  paddingHorizontal: wp(1.5),
                                  color: '#f7931e',
                                }}>
                                {data.address}
                              </Text>
                            </View>
                            <View style={{width: wp('30%')}}>
                              <Image
                                source={{
                                  uri:
                                    'https://kktechpartner.com/eleate/dashboard/uploads/' +
                                    data.photo,
                                }}
                                resizeMode="contain"
                                style={{
                                  width: wp('29%'),
                                  left: 5,
                                  height: hp(16.6),
                                  borderRadius: wp(14),
                                }}></Image>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                    {/*end*/}
                  </ScrollView>
                </View>
              </View>
              {/*space rect*/}
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
    height: hp('100%'),
  },
  inputrect: {
    width: wp('83%'),
  },
  textArea: {
    width: wp('83%'),
    paddingHorizontal: wp(3),
    fontSize: RFValue(14, 580),
    justifyContent: 'flex-start',
    color: '#000',
  },
});

export default Home;
