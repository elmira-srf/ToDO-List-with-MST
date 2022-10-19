import {
    castToSnapshot,
    flow, Instance, SnapshotIn, SnapshotOut, types,
  } from 'mobx-state-tree';
import { todoItem } from './TodoItem';

  const todoList = types
    .model("todoList", {
        list: types.array(todoItem)

    })

    .actions(self => {
        return {
            getList(){
                fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(response => response.json())
                .then(json => console.log(json))
            }
        }
    }