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
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { DetailStackProp, TodoItemProps } from './types/Types';

const ToDoDetail: React.FC<DetailStackProp> = ({ route }) => {
  return <Text>Test {route.params?.id}</Text>;
};

export default observer(ToDoDetail);
