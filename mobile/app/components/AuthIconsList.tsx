import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { authIcons } from '../utils/pagesUtils';
import { colors } from '../utils/generalUtils';

interface AuthIconProps {
  img: number;
}

const AuthIconsList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={authIcons}
      renderItem={({ item }) => <AuthIcon img={item.img} />}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

const AuthIcon = ({ img }: AuthIconProps) => {
  return (
    <Pressable style={styles.content} onPress={() => {}}>
      <Image source={img} resizeMode="contain" />
    </Pressable>
  );
};

export default AuthIconsList;

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 20,
  },
  content: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.lineFaintColor,
    borderWidth: 1,
  },
});
