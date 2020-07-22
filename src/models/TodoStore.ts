import { createContext } from 'react';
import { computed, observable } from 'mobx';
import {
  model,
  Model,
  modelAction,
  prop,
  registerRootStore,
} from 'mobx-keystone';
import TextInputModel from './TextInput';
import Item from './Item';

@model('todoApp/CheckListModel')
class CheckListModel extends Model({
  items: prop<Item[]>(() => []),
  textInput: prop<TextInputModel>(),
}) {
  @observable
  isEditing = false;

  @computed
  get isTextValid() {
    return this.textInput.value.trim().length !== 0;
  }

  @modelAction
  add = () => {
    this.items = [new Item({}), ...this.items];
    this.isEditing = true;
    console.log('Added new item! : ' + this.items.length);
  };

  @modelAction
  save = (item: Item) => {
    if (!this.isTextValid) {
      return;
    }

    item.text = this.textInput.value;
    item.isToModify = false;
    item.isNew = false;
    this.textInput.value = '';
    this.isEditing = false;
  };

  @modelAction
  edit = (item: Item) => {
    item.isToModify = true;
    this.textInput.value = item.text;
    this.isEditing = true;
  };

  @modelAction
  cancelEdit = (item: Item) => {
    item.isToModify = false;
    this.textInput.value = '';
    this.isEditing = false;
  };

  @modelAction
  delete = (toDeleteItem: Item, confirm: boolean) => {
    if (confirm) {
      const conf = window.confirm(
        'Are you sure you want to delete \n "' + toDeleteItem.text + '"? ',
      );
      if (!conf) {
        return;
      }
    }

    this.items = this.items.filter((item) => {
      return item !== toDeleteItem;
    });
    this.isEditing = false;
    this.textInput.value = '';
  };

  @modelAction
  check = (toCheckItem: Item) => {
    toCheckItem.done = !toCheckItem.done;
  };
}

const createAppStore = (): CheckListModel => {
  const store = new CheckListModel({
    items: [],
    textInput: new TextInputModel({}),
  });

  registerRootStore(store);
  return store;
};

const appContext = createContext(createAppStore());
export default appContext;
