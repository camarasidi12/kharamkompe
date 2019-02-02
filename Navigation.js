// Navigation/Navigations.js

import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Acceuil from '../Components/Acceuil'
import Teacher from '../Components/Teacher'

const SearchStackNavigator = createStackNavigator({
  Acceuil: {
    screen: Acceuil,
    navigationOptions: {
      title: 'Acceuil'
    }
  },
  Teacher: {
    screen: Teacher,
    navigationOptions: {
      title: 'Teacher'
    }
  },
})




const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default SearchStackNavigator
