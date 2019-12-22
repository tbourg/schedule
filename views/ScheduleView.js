import React, { Component } from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import { Button } from 'react-native-elements';

const schedule = require('../ressources/schedule.json')

export default class ScheduleView extends Component {
  static navigationOptions = {
    title: 'Schedule',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  changeView(e){
    Alert.alert(e);
    this.props.navigation.navigate('Day', {
      id: e
    });
  }
  render(){ 
    return(
      <View>
      {
        Object.keys(schedule).map((e, i) => { 
          return <Button 
            onPress={ () => this.changeView(e) } 
            title={ schedule[e].name } 
            type='outline'/>; 
          })
      }
      </View>
    )
  }
}