import { createContext } from 'react';
import { observable } from 'mobx';
import {
  model,
  Model,
  modelAction,
  prop,
  registerRootStore,
} from 'mobx-keystone';
import Item from './Item';

@model('todoApp/CheckListModel')
class CheckListModel extends Model({
  items: prop<Item[]>(() => []),
}) {
  @modelAction
  add = () => {
    this.items = [new Item({}), ...this.items];
  };

  @modelAction
  delete = (id: string) => {
    this.items = this.items.filter((item) => {
      return item.id !== id;
    });
  };
}

const createAppStore = (): CheckListModel => {
  const store = new CheckListModel({
    items: [],
  });

  registerRootStore(store);
  return store;
};

const appContext = createContext(createAppStore());
export default appContext;
