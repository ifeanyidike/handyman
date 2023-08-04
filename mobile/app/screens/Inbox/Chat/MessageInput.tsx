import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import CustomInput from '../../../components/CustomInput';
import CircleMicIcon from '../../../assets/icons/CircleMicIcon';
import ImagePlaceholderIcon from '../../../assets/icons/ImagePlaceholderIcon';
import * as DocumentPicker from 'expo-document-picker';
import { FileType, MessageData, MessageTypeEnum } from '../../../types/basic';
import { getDateTag } from '../../../utils/date';
import * as ImagePicker from 'expo-image-picker';

type Props = {
  messages: MessageData[];
  setMessages: Dispatch<SetStateAction<MessageData[]>>;
};

const MessageInput: FC<Props> = props => {
  const [singleFile, setSingleFile] = useState<FileType | null>(null);
  async function selectFile() {
    try {
      // const result = await DocumentPicker.getDocumentAsync({
      //   copyToCacheDirectory: false,
      //   multiple: true,
      //   type: ['image/*', 'application/pdf', 'text/plain', 'video/*'],
      // });

      // if (result.type === 'success') {
      //   const mediaMessage = {
      //     userId: 'me',
      //     date: new Date(),
      //     mediaUrls: [result.uri],
      //     type: MessageTypeEnum.media,
      //   } as MessageData;
      //   props.setMessages([...props.messages, mediaMessage]);
      //   setSingleFile(result);
      // }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        allowsMultipleSelection: true,
        aspect: [3, 3],
        quality: 1,
      });
      const assets = result.assets;
      const uri = assets?.length ? assets[0].uri : null;
      console.log('uri', uri);
      if (uri) {
        const mediaMessage = {
          userId: 'me',
          date: new Date(),
          mediaUrls: [uri],
          type: MessageTypeEnum.media,
        } as MessageData;
        props.setMessages([...props.messages, mediaMessage]);
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <CustomInput
          placeholder="Message..."
          SuffixIcon={
            <TouchableOpacity
              onPress={async e => {
                e.stopPropagation();
                await selectFile();
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
