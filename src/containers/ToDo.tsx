import React, { useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { HomeStackProp } from './types/Types';
import appContext from '../models/ToDoStore';
import ToDoItem from '../components/ToDoItem';

const ToDoList: React.FC<HomeStackProp> = ({ navigation }) => {
  const appStore = useContext(appContext);
  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <FlatList
          style={styles.list}
          data={appStore.items}
          renderItem={({ item }) => {
            return <ToDoItem item={item} navigation={navigation} />;
          }}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            appStore.add();
          }}
          style={styles.addButtonTouch}
        >
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  addButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  addButtonTouch: {
    backgroundColor: 'skyblue',
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 50,
    marginRight: 20,
    marginBottom: 20,
  },
  middle: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    marginBottom: 10,
  },
});

export default observer(ToDoList);
