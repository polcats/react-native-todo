import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';
import 'mobx-react-lite/batchingForReactDom';
import appContext from './src/models/ToDoStore';
import ToDoList from './src/containers/ToDo';

const App: React.FC = () => {
  const appStore = useContext(appContext);
  return (
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
  );
};

export default observer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
  top: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  topButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  middle: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
