import { model, Model, prop } from 'mobx-keystone';
import Todo from './Todo';

@model('App/TodoStore')
class TodoStore extends Model({
  items: prop<Todo[]>(),
}) {}

export default TodoStore;
