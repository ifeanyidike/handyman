import {
  GestureResponderEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Slider from '../components/Slider';
import { sampleServiceHeroImages } from '../utils/pagesUtils';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import { RootStackParamsList } from '../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Bookmark from '../assets/icons/Bookmark';
import { colors } from '../utils/generalUtils';
import BookmarkAlt from '../assets/icons/BookmarkAlt';

type ServiceProps = NativeStackScreenProps<RootStackParamsList, 'Service'>;
const Service = (props: ServiceProps) => {
  const [bookmarkToggled, setBookmarkToggled] = useState<boolean>(false);
  const { navigation, route } = props;
  const customImageStyle = {
    height: 350,
  };
  const parentStyle = {
    height: 350,
  };

  const customPaginationStyle = {
    bottom: 5,
  };

  const handleToggleBookmark = (e: GestureResponderEvent) => {
    setBookmarkToggled(!bookmarkToggled);
  };
  return (
    <SafeAreaView>
      <View style={styles.backButton}>
        <BackButton arrowColor="white" title="" navigation={navigation} />
      </View>
      <Slider
        data={sampleServiceHeroImages}
        customImageStyle={customImageStyle}
        parentStyle={parentStyle}
        customPaginationStyle={customPaginationStyle}
        disableAnimation={true}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{route.params?.serviceName}</Text>
          {bookmarkToggled ? (
            <Pressable onPress={e => handleToggleBookmark(e)}>
              <BookmarkAlt fillColor={colors.buttonPrimaryColor} />
            </Pressable>
          ) : (
            <Pressable onPress={handleToggleBookmark}>
              <Bookmark strokeColor={colors.buttonPrimaryColor} />
            </Pressable>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Service;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 2,
    top: 60,
    left: 0,
  },
  scrollContainer: {
    backgroundColor: colors.backgroundColor,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 24,
  },
});
