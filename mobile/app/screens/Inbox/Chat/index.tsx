import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import { RootStackParamsList } from '../../../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { defaultContainer } from '../../../utils/general';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallIcon from '../../../assets/icons/CallIcon';
import CircleSelect from '../../../assets/icons/CircleSelect';
import MessageArea from './MessageArea';
import MessageInput from './MessageInput';

// type ChatProps = NativeStackScreenProps<
//   RootStackParamsList,
//   'BookingDetails'
// >;
const Chat = (props: any) => {
  const { navigation, route } = props;
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
        <MessageArea />
        <MessageInput />
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
