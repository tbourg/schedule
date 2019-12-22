import React, { Component } from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import { Button } from 'react-native-elements';

const speakers = require('../ressources/speakers.json')

export default class SpeakersView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: speakers[navigation.getParam('id', null)].name,
      headerTitleStyle: {
        fontWeight: 'bold',
      }};
  }
  render(){ 
    return(
      <View>
        <Text>{ speakers[this.props.navigation.getParam('id', null)].bio }</Text>
      </View>
    )
  }
}