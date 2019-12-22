import React, { Component } from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import { Button } from 'react-native-elements';

const speakers = require('../ressources/speakers.json')

export default class SpeakersView extends Component {
  static navigationOptions = {
    title: 'Speakers',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  changeView(e){
    Alert.alert(e);
    this.props.navigation.navigate('Speaker', {
      id: e
    });
  }
  render(){ 
    return(
      <View>
      {
        Object.keys(speakers).map((e, i) => { 
          return <Button 
            onPress={ () => this.changeView(e) } 
            title={ speakers[e].name } 
            type='outline'/>; 
          })
      }
      </View>
    )
  }
}