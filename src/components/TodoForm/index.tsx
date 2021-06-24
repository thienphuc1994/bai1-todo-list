import React, {useState, useEffect} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

interface Props {}

const TodoForm = (props: Props) => {
  const [text, setText] = useState('');
  const {onSubmit, textProps} = {...props};

  useEffect(() => {
    if (textProps) {
      setText(textProps);
    }
  }, [textProps]);

  function _handleTextChange(value: string) {
    setText(value);
  }

  function _handleSubmit() {
    if (onSubmit && text && text.trim().toString() !== '') {
      onSubmit(text);
      setText('');
    }
  }

  return (
    <View style={rootStyle}>
      <View style={inputStyle}>
        <TextInput
          value={text}
          onChangeText={_handleTextChange}
          placeholder="Nhập tên công việc"></TextInput>
      </View>
      <View>
        <Button color="red" title="Lưu" onPress={_handleSubmit} />
      </View>
    </View>
  );
};

const rootStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const inputStyle = {
  marginRight: 16,
  width: '80%',
};

export default TodoForm;
