import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomInput from '../../../components/CustomInput';
import CircleMicIcon from '../../../assets/icons/CircleMicIcon';
import ImagePlaceholderIcon from '../../../assets/icons/ImagePlaceholderIcon';

const MessageInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <CustomInput
          placeholder="Message..."
          SuffixIcon={
            <TouchableOpacity
              onPress={e => {
                e.stopPropagation();
              }}
            >
              <ImagePlaceholderIcon />
            </TouchableOpacity>
          }
        />
      </View>
      <CircleMicIcon />
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
});
