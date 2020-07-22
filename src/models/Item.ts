import { model, Model, prop } from 'mobx-keystone';

@model('todoApp/Item')
class Item extends Model({
  id: prop<string>(''),
  isNew: prop<boolean>(true),
  isToModify: prop<boolean>(true),
  done: prop<boolean>(false),
  text: prop<string>('Sample text!'),
}) {}

export default Item;
