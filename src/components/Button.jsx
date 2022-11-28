import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function Button({title, onPress, disabled}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '95%',
        backgroundColor: '#d4ad41',
        height: 50,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: '800',
          color: 'white',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export {Button};
const ButtonStyle = {
  width: '80%',
  padding: 10,
  borderRadius: 10,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  constaner: {
    ...ButtonStyle,
    backgroundColor: 'green',
  },
  disabledconstainer: {
    ...ButtonStyle,
    backgroundColor: 'gray',
  },
});
