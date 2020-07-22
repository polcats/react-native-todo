import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Detail: { id: string };
};

type HomeStackProp = StackScreenProps<StackParamList, 'Home'>;
type DetailStackProp = StackScreenProps<StackParamList, 'Detail'>;
type HomeNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

export type {
  HomeStackProp,
  DetailStackProp,
  HomeNavigationProp,
  StackParamList,
};
