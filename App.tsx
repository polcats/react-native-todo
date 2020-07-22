import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';
import 'mobx-react-lite/batchingForReactDom';
import appContext from './src/models/ToDoStore';
import ToDoList from './src/containers/ToDo';

const App: React.FC = () => {
  const appStore = useContext(appContext);
  return <ToDoList />;
};

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

/*
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topText}>To-do List</Text>
          <Text
            style={styles.topButton}
            onPress={() => {
              appStore.add();
            }}
          >
            +
          </Text>
        </View>
        <View style={styles.middle}>
          <ToDoList />
        </View>
      </View>
    </>
*/

export default observer(App);
