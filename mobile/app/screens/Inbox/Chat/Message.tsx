import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../utils/generalUtils';
import { getTime } from '../../../utils/date';
import { MessageData, MessageTypeEnum } from '../../../types/basic';

const { width, height } = Dimensions.get('window');

const Message = (props: MessageData) => {
  const { type } = props;
  const [expandImage, setExpandImage] = useState(false);

  if (type === MessageTypeEnum.tag) {
    return (
      <View style={styles.tagContainer}>
        <Text style={styles.tag}>{props.tag}</Text>
      </View>
    );
  }

  const { userId, text, date, mediaUrls } = props;

  return (
    <>
      {type === MessageTypeEnum.text ? (
        <View
          style={[
            styles.commonContainer,
            userId === 'me' ? styles.userContainer : styles.receiverContainer,
          ]}
        >
          <>
            <Text
              style={[
                styles.commonText,
                userId === 'me' ? styles.userText : styles.receiverText,
              ]}
            >
              {text}
            </Text>
            <Text
              style={[
                styles.commonText,
                styles.date,
                userId === 'me' ? styles.userText : styles.receiverText,
              ]}
            >
              {getTime(date, ':')}
            </Text>
          </>
        </View>
      ) : (
        <View
          style={[
            styles.commonContainer,
            userId === 'me' ? styles.userContainer : styles.receiverContainer,
            styles.assets,
            expandImage && { flexDirection: 'column' },
          ]}
        >
          {mediaUrls?.map((uri, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => setExpandImage(!expandImage)}
            >
              <Image
                source={{ uri }}
                style={[
                  styles.asset,
                  expandImage && {
                    width,
                  },
                ]}
                resizeMode={expandImage ? 'contain' : 'stretch'}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  commonContainer: {
    borderRadius: 15,
    padding: 16,
    maxWidth: width * 0.72,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end',
  },
  commonText: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 13,
    flexWrap: 'wrap',
    width: '90%',
  },
  userContainer: {
    marginLeft: 'auto',
    backgroundColor: colors.primaryColor,
    borderTopRightRadius: 0,
  },
  userText: {
    color: colors.white,
  },
  receiverContainer: {
    marginRight: 'auto',
    backgroundColor: colors.dim,
    borderTopLeftRadius: 0,
  },
  receiverText: {
    color: colors.textColor,
  },
  date: {
    fontSize: 12,
  },
  tagContainer: {
    backgroundColor: colors.dim,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderRadius: 10,
  },
  tag: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 10,
  },
  assets: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  asset: {
    width: 200,
    height: 200,
  },
});
