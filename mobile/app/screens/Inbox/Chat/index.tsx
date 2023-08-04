import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackButton from '../../../components/BackButton';
import {
  MessageData,
  MessageType,
  RootStackParamsList,
} from '../../../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { defaultContainer } from '../../../utils/general';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallIcon from '../../../assets/icons/CallIcon';
import CircleSelect from '../../../assets/icons/CircleSelect';
import MessageArea from './MessageArea';
import MessageInput from './MessageInput';
import useOrganizeMessageData from '../../../hooks/useOrganizeMessageData';

// type ChatProps = NativeStackScreenProps<
//   RootStackParamsList,
//   'BookingDetails'
// >;
const Chat = (props: any) => {
  const { navigation, route } = props;
  const [messages, setMessages] = useState<MessageData[]>([]);
  const data = useOrganizeMessageData(messageData as MessageType[]);

  useEffect(() => {
    setMessages(data);
  }, [data]);

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <BackButton
          title={route.params.receiverName}
          navigation={navigation}
          Icons={
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => {}}>
                <CallIcon stroke="#212121" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <CircleSelect />
              </TouchableOpacity>
            </View>
          }
        />
        <MessageArea messages={messages} />
        <MessageInput messages={messages} setMessages={setMessages} />
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: { ...defaultContainer, paddingBottom: 5 },
  icons: {
    flexDirection: 'row',
    gap: 12,
  },
});

const messageData = [
  {
    userId: 'me',
    text: 'Hi Jenny, good morning 😄',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'me',
    text: 'I have booked your house cleaning service for December 23 at 10 AM 😁',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Hi, morning too Andrew!',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Yes, I have received your order. I will come on that date! 😁😁',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'me',
    text: 'Good, thanks Jenny...',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'me',
    text: 'Here I send a photo of room & my house 😁😁',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Hi, morning too Andrew!',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Yes, I have received your order. I will come on that date! 😁😁',
    type: 'text',
    date: new Date(),
  },
  {
    userId: 'me',
    mediaUrls: [
      'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fapp-37d04349-1c19-4ab7-ae46-f536ee94eb9b/ImagePicker/63aff2ae-deb2-4866-b97f-2bcc8663e88f.png',
      'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fapp-37d04349-1c19-4ab7-ae46-f536ee94eb9b/ImagePicker/948e2098-2f25-48ae-b36d-2a0bbdf16168.png',
    ],
    date: new Date(),
    type: 'media',
  },
];
