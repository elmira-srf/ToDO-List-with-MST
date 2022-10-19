import {
    castToSnapshot,
    flow, Instance, SnapshotIn, SnapshotOut, types,
  } from 'mobx-state-tree';

  export const todoItem = types
    .model("todoItem", {
        user_id: types.integer, //userId
        task_id: types.integer, //id
        title: types.string,
        completed: types.boolean,
    })

    .actions(self => {
        return {
            getItem(id){
                fetch('https://jsonplaceholder.typicode.com/todos/' + id)
                .then(response => response.json())
                .then(json => console.log(json))
            }
        }
    }
