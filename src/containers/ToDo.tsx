import React, { useContext, useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  StyleSheet,
  CheckBox,
  View,
  FlatList,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import Item from '../models/Item';
import appContext from '../models/ToDoStore';

type RenderProps = {
  item: Item;
};

const ToDoItem: React.FC<RenderProps> = observer(({ item }) => {
  const appStore = useContext(appContext);

  const renderModify = () => {
    return (
      <View key={item.id} style={[styles.displayItem]}>
        <TextInput
          autoFocus={true}
          value={item.text}
          style={[styles.displayText, styles.editText]}
          onChangeText={(text) => item.setText(text)}
          onBlur={() => {
            if (item.validText) {
              item.toggleModify();
              return;
            }
            appStore.delete(item.id);
          }}
        />
        <Button
          color="green"
          title="S"
          onPress={() => {
            if (item.validText) {
              item.toggleModify();
              return;
            }
            appStore.delete(item.id);
          }}
        />
      </View>
    );
  };

  const renderDisplay = () => {
    return (
      <View key={item.id} style={[styles.displayItem]}>
        <CheckBox
          value={item.isDone}
          onValueChange={() => {
            item.toggleCheck();
          }}
          style={styles.checkbox}
        />
        <Text
          onPress={() => {
            item.toggleModify();
          }}
          style={[styles.displayText, item.isDone ? styles.doneText : {}]}
        >
          {item.text}
        </Text>
        <Button
          color="rgb(218, 59, 59)"
          title="D"
          onPress={() => {
            Alert.alert(
              'Delete',
              'Are you sure you want to delete?',
              [
                {
                  text: 'Cancel',
                },
                { text: 'OK', onPress: () => appStore.delete(item.id) },
              ],
              { cancelable: false },
            );
          }}
        />
      </View>
    );
  };

  return item.isToModify ? renderModify() : renderDisplay();
});

const ToDoList: React.FC = () => {
  const appStore = useContext(appContext);
  return (
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
        <FlatList
          style={styles.list}
          data={appStore.items}
          renderItem={({ item }) => {
            return <ToDoItem item={item} />;
          }}
        />
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
  list: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },
  checkbox: {
    borderColor: '#fff',
  },
  displayText: {
    flex: 1,
    color: '#555',
    fontSize: 25,
    padding: 5,
    marginRight: 5,
  },
  editText: {
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 31,
    padding: 4,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  displayItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {},
});

export default observer(ToDoList);
