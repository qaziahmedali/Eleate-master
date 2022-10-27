import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  Image,
  Icon,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
import Home from './Home';
import Restaurants from './Restaurants';
import About from './About';

function Tabb({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Restaurants') {
            iconName = focused ? 'utensils' : 'utensils';
          } else if (route.name === 'About') {
            iconName = focused ? 'info-circle' : 'info-circle';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={wp(6)} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFBF9F',
        inactiveTintColor: '#fff',
        style: {backgroundColor: '#F2291A', height: 60},
        labelStyle: {
          fontSize: RFValue(10, 580),
          top: -5,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Restaurants" component={Restaurants} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});

export default Tabb;
