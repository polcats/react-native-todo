import { model, Model, modelAction, prop } from 'mobx-keystone';
import { computed } from 'mobx';

const newId = () => {
  const newKey: any = Math.random() * 999999;
  return `${newKey}`;
};

@model('todoApp/Item')
class Item extends Model({
  id: prop<string>(() => newId()),
  isToModify: prop<boolean>(true),
  isDone: prop<boolean>(false),
  text: prop<string>('New task...'),
}) {
  @computed
  get validText() {
    return this.text.trim().length !== 0;
  }

  @modelAction
  toggleCheck = () => {
    this.isDone = !this.isDone;
  };

  @modelAction
  toggleModify = () => {
    this.isToModify = !this.isToModify;
  };

  @modelAction
  setText = (text: string) => {
    this.text = text;
  };
}

export default Item;
