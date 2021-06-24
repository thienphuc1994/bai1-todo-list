import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';

interface Props {}

const TodoList = (props: Props) => {
  const {data, onEdit, onDelete} = {...props};

  function _handleDelete(index: number) {
    if (onDelete) {
      onDelete(index);
    }
  }

  function _handleEdit(item) {
    if (onEdit) {
      onEdit(item);
    }
  }

  function _renderItem(params) {
    const {index, item} = params;
    return (
      <View
        style={{
          backgroundColor: index % 2 === 0 ? 'green' : 'blue',
          width: '100%',
          padding: 16,
          marginBottom: 16,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'white',
          }}
          key={index}>
          {params.index + 1}. {params.item.text}
        </Text>
        <View>
          <Button color="white" title="Sửa" onPress={() => _handleEdit(item)} />
          <Button
            color="red"
            title="Xoá"
            onPress={() => _handleDelete(index)}
          />
        </View>
      </View>
    );
  }

  return (
    <View>
      {data && (
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default TodoList;
