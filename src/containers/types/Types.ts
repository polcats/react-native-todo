import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import Item from '../../models/Item';

type StackParamList = {
  Home: undefined;
  Detail: { id: string };
};

type HomeStackProp = StackScreenProps<StackParamList, 'Home'>;
type DetailStackProp = StackScreenProps<StackParamList, 'Detail'>;

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;
type TodoItemProps = {
  item: Item;
  navigation: HomeScreenNavigationProp;
};

export type {
  HomeStackProp,
  DetailStackProp,
  StackParamList,
  HomeScreenNavigationProp,
  TodoItemProps,
};
