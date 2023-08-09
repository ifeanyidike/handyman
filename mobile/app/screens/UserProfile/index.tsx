import { Image, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../../utils/general';
import LogoTitle from '../../components/LogoTitle';
import PickImage from '../../components/PickImage';
import HrLine from '../../components/HrLine';
import Profile from '../../assets/icons/Profile';
import ArrowRight from '../../assets/icons/ArrowRight';
import Notification from '../../assets/icons/Notification';
import Payment from '../../assets/icons/Payment';
import Security from '../../assets/icons/Security';
import Language from '../../assets/icons/Language';
import Eye from '../../assets/icons/Eye';
import Lock from '../../assets/icons/Lock';
import Help from '../../assets/icons/Help';
import Persons from '../../assets/icons/Persons';
import Logout from '../../assets/icons/Logout';
import { colors } from '../../utils/generalUtils';
import SimpleToggle from '../../components/SimpleToggle';

const UserProfile = () => {
  const defaultImage = require('../../assets/Person3.png');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <LogoTitle title="Profile" />
        <View style={styles.info}>
          <PickImage defaultImage={defaultImage} size={120} />
          <Text style={styles.name}>Ifeanyi Dike</Text>
          <Text style={[styles.text, styles.email]}>
            ifeanyidike87@gmail.com
          </Text>
        </View>
        <HrLine space={20} />
        <View style={styles.contentContainer}>
          <Item text="Edit Profile">
            <Profile fillColor="#212121" width="28" height="26" />
          </Item>
          <Item text="Notification">
            <Notification />
          </Item>
          <Item text="Payment">
            <Payment />
          </Item>
          <Item text="Security">
            <Security />
          </Item>
          <Item text="Language" textRight="English(US)">
            <Language />
          </Item>
          <Item text="Dark Mode" IconRight={<SimpleToggle />}>
            <Eye />
          </Item>
          <Item text="Privacy Policy">
            <Lock />
          </Item>
          <Item text="Help Center">
            <Help />
          </Item>
          <Item text="Invite Friends">
            <Persons />
          </Item>
          <Item text="Logout" textColor={colors.status} hideIconRight={true}>
            <Logout />
          </Item>
        </View>
      </View>
    </SafeAreaView>
  );
};

type ItemType = {
  children: ReactNode;
  text: string;
  textRight?: string;
  textColor?: string;
  hideIconRight?: boolean;
  IconRight?: ReactNode;
};

const Item = ({
  children,
  text,
  textRight,
  textColor,
  hideIconRight,
  IconRight = <ArrowRight />,
}: ItemType) => (
  <View style={styles.content}>
    <View style={styles.iconLeft}>{children}</View>
    <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    {!hideIconRight && (
      <View style={styles.arrowRight}>
        <Text style={styles.text}>{textRight}</Text>
        {IconRight}
      </View>
    )}
  </View>
);

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    paddingHorizontal: 20,
  },
  navigator: {
    fontSize: 13,
    textTransform: 'none',
    fontFamily: 'Urbanist_500Medium',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 5,
    marginTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  name: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 18,
  },
  text: {
    fontFamily: 'Urbanist_500Medium',
  },
  email: {
    fontSize: 12,
  },
  contentContainer: {
    gap: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowRight: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconLeft: {
    marginRight: 15,
  },
});
