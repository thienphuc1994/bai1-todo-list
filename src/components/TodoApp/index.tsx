import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

interface Props {}

const TodoApp = (props: Props) => {
  const [list, setList] = useState([]);
  const [itemEditing, setItemEditing] = useState(null);

  function _handleSubmit(value: string) {
    // case add or edit - separate by id
    if (itemEditing) {
      const index = list.findIndex(item => item.id === itemEditing.id);
      const updatedItem = {
        ...itemEditing,
        text: value,
      };
      const newList = [
        ...list.slice(0, index),
        updatedItem,
        ...list.slice(index + 1),
      ];
      setList(newList);
      setItemEditing(null);
    } else {
      // add
      setList([
        ...list,
        {
          id: list.length,
          text: value,
        },
      ]);
    }
  }

  function _handleDelete(deletingIndex) {
    const newList = list.filter((_, index) => index !== deletingIndex);
    setList(newList);
  }

  function _handleSetItemEditing(item) {
    setItemEditing(item);
  }

  return (
    <View style={rootStyle}>
      <View style={itemStyle}>
        <Text style={titleStyle}>Todo App</Text>
      </View>
      <View style={itemStyle}>
        <TodoForm
          textProps={itemEditing ? itemEditing.text : null}
          onSubmit={_handleSubmit}
        />
      </View>
      <View style={listStyle}>
        <TodoList
          data={list}
          onDelete={_handleDelete}
          onEdit={_handleSetItemEditing}
        />
      </View>
    </View>
  );
};

const rootStyle = {
  flex: 1,
  justifyContent: 'center',
  marginLeft: 16,
  marginRight: 16,
};

const itemStyle = {
  marginBottom: 16,
};

const listStyle = {
  height: '50%',
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: 24,
  textAlign: 'center',
};

export default TodoApp;
