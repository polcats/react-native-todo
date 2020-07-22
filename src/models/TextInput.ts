import { model, Model, prop } from 'mobx-keystone';

@model('todoApp/TextInputModel')
class TextInputModel extends Model({
  validLabel: prop<boolean>(false),
  placeholder: prop<string>('Enter text here'),
  value: prop<string>(''),
}) {}

export default TextInputModel;
