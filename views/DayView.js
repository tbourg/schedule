import React, { Component } from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import { Button } from 'react-native-elements';

const schedule = require('../ressources/schedule.json')

export default class DayView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: schedule[navigation.getParam('id', null)].name,
      headerTitleStyle: {
        fontWeight: 'bold',
      }};
  }
  changeView(i){
    this.props.navigation.navigate('Day', {
      id: this.props.navigation.getParam('id',null),
      idx: i
    });
  }
  render(){ 
    return(
      <View>
      {
        schedule[this.props.navigation.getParam('id', null)].planning.map((e, i) => { 
          return <Button 
            onPress={ () => this.changeView(i) } 
            title={ e.time } 
            type='outline'/>; 
          })
      }
      </View>
    )
  }
}