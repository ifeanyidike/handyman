import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { getFormattedTime, truncateText } from '../../utils/general';
import { colors } from '../../utils/generalUtils';
import { CallType } from '../../types/basic';
import CallIcon from '../../assets/icons/CallIcon';
import IncomingCallIcon from '../../assets/icons/IncomingCallIcon';
import OutgoingCallIcon from '../../assets/icons/OutgoingCallIcon';
import MissedCallIcon from '../../assets/icons/MissedCallIcon';

type Props = {
  pic: number;
  userName: string;
  date: Date;
  type: CallType;
};
const CallCard = (props: Props) => {
  const { type } = props;
  return (
    <View style={styles.container}>
      <Image source={props.pic} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.name}>{truncateText(props.userName, 20)}</Text>
        <View style={styles.desc}>
          {type === CallType.incoming ? (
            <IncomingCallIcon />
          ) : type === CallType.outgoing ? (
            <OutgoingCallIcon />
          ) : type === CallType.missed ? (
            <MissedCallIcon />
          ) : null}
          <Text style={styles.text}>{type}</Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.text}>{getFormattedTime(props.date)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.callIcon} onPress={() => {}}>
        <CallIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CallCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
  },
  content: {
    marginLeft: 12,
  },
  name: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 16,
    marginBottom: 8,
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5,
  },
  text: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 12,
  },

  callIcon: {
    marginLeft: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
