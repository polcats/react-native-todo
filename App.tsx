import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';
import 'mobx-react-lite/batchingForReactDom';
import appContext from './src/models/ToDoStore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoList from './src/containers/ToDo';
import ToDoDetail from './src/containers/TodoDetail';

const { Navigator, Screen } = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          options={{ title: 'To-do List' }}
          component={ToDoList}
        />
        <Screen name="Detail" component={ToDoDetail} />
      </Navigator>
    </NavigationContainer>
  );
};

export default observer(App);
