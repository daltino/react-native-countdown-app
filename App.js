import React from 'react';
import { YellowBox } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillRecieveProps is deprecated',
]);

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an Event'
    })
  }
});

export default createAppContainer(AppNavigator);
