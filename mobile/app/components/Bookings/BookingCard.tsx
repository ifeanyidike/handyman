import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/generalUtils';
import ChatAlt from '../../assets/icons/ChatAlt';
import { shadowElevation } from '../../utils/general';
import HrLine from '../HrLine';
import ArrowDown from '../../assets/icons/ArrowDown';

type Props = {
  Icon: number;
  serviceName: string;
  userName: string;
  status: string;
};
const BookingCard = (props: Props) => {
  const { Icon, serviceName, userName, status } = props;
  const tag = status?.toLowerCase();
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image style={styles.image} source={Icon} resizeMode="contain" />
        <View style={styles.content}>
          <Text style={styles.title}>{serviceName}</Text>
          <Text style={styles.user}>{userName}</Text>
          <View
            style={[
              styles.status,
              {
                backgroundColor:
                  tag === 'upcoming'
                    ? colors.primaryColor
                    : tag === 'completed'
                    ? colors.green
                    : colors.status,
              },
            ]}
          >
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.action}>
          <ChatAlt />
        </TouchableOpacity>
      </View>
      <HrLine space={20} bg={colors.secondaryColor} />
      <TouchableOpacity style={styles.toggle}>
        <ArrowDown size="25" />
      </TouchableOpacity>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 8,
    ...shadowElevation,
  },
  topContent: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  content: {
    gap: 10,
  },
  title: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
  },
  user: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 11,
  },
  status: {
    borderRadius: 8,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  statusText: {
    fontFamily: 'Urbanist_500Medium',
    fontSize: 10,
    color: colors.white,
  },
  action: {
    position: 'absolute',
    right: 10,
    bottom: 25,
  },
  toggle: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
