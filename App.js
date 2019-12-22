import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SpeakersView from './views/SpeakersView';
import ScheduleView from './views/ScheduleView';
import SpeakerView from './views/SpeakerView';
import DayView from './views/DayView';
import LectureView from './views/LectureView';
import Support from './views/Support';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Conf ***',
    headerTitleStyle: {
      fontWeight: 'bold',
      width : Dimensions.get('window').width
    },
    headerBackTitle : null
  };

  render() {
    return (
      <View>
        <Text style={ style.title }>Welcome to the *** 2020 Conf</Text>
        <Button
          title="Speakers list"
          onPress={() => {
            this.props.navigation.navigate('Speakers');
          }}
          buttonStyle={ style.button }
          titleStyle={ style.btnTitle }
          type='outline'
        />
        <Button
          title="Conf schedule"
          onPress={() => {
            this.props.navigation.navigate('Schedule');
          }}
          buttonStyle={ style.button }
          titleStyle={ style.btnTitle }
          type='outline'
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  button: {
    width : Dimensions.get('window').width,
    height: Dimensions.get('window').height/10,
    backgroundColor: 'white',
    borderColor: 'black'
  },
  btnTitle: {
    color: 'black'
  },
  title: {
    fontSize: 24
  }
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Speakers: SpeakersView,
    Speaker: SpeakerView,
    Schedule: ScheduleView,
    Day: DayView,
    // Lecture: LectureView,
    // Support: Support
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

