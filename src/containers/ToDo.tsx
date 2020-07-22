import React, { useContext } from 'react';
import { Text, StyleSheet, CheckBox, View, FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import Item from '../models/Item';
import appContext from '../models/ToDoStore';

// const renderToDo = (item: Item, key: number) => {
//   return renderDisplay(item, key);
// };

const renderDisplay = ({ item }: { item: Item }) => {
  console.log(item);
  return (
    <View style={[styles.displayItem]}>
      <CheckBox />
      <Text style={[styles.displayText]}>{item.text}</Text>
    </View>
  );
};

const ToDoList: React.FC = () => {
  const appStore = useContext(appContext);
  // return <>{appStore.items.map((item, key) => renderToDo(item, key))}</>;
  return (
    <FlatList
      data={appStore.items}
      renderItem={renderDisplay}
      // keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  displayText: {
    flex: 1,
    color: '#fff',
    fontSize: 25,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  displayItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  flex: {},
  flexColumn: {},
});

export default observer(ToDoList);
