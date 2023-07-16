import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../utils/generalUtils';
import Bookmark from '../assets/icons/Bookmark';
import BookmarkAlt from '../assets/icons/BookmarkAlt';
import type { CardItem, Navigation, RootStackParamsList } from '../types/basic';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ServiceNavigation = NativeStackNavigationProp<
  RootStackParamsList,
  'ServiceProviders'
>;
type Props = {
  item: CardItem;
  index?: number;
  isBookmarked?: boolean;
  noShadow?: boolean;
  toggleBookmarkModal?: (e: CardItem) => void;
  navigation?: ServiceNavigation;
};
const ServiceCard = (props: Props) => {
  const { isBookmarked, toggleBookmarkModal, noShadow, item } = props;
  const [isToggled, setIsToggled] = useState(isBookmarked ?? false);

  const handleToggleBookmark = (e: GestureResponderEvent) => {
    e.stopPropagation();
    if (isBookmarked) return;
    setIsToggled(!isToggled);
  };

  const handlePress = (e: GestureResponderEvent) => {
    if (props.navigation) {
      props.navigation.navigate('Service', {
        serviceName: item.serviceName,
        serviceKey: item.serviceKey,
      });
    }
    if (!isBookmarked || !toggleBookmarkModal) return;
    toggleBookmarkModal(item);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        noShadow && { elevation: 0, backgroundColor: colors.transparent },
      ]}
      onPress={handlePress}
    >
      <Image style={styles.image} source={item.Icon} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.tinyGray}>{item.userName}</Text>
        <Text style={styles.serviceName}>{item.serviceName}</Text>
        <Text style={styles.serviceCost}>{item.serviceCost}</Text>
        <View style={styles.review}>
          <FontAwesome name="star-half-o" size={18} color={colors.gold} />
          <Text style={[styles.tinyGray, styles.reviewInfo]}>
            {item.averageRating}
          </Text>
          <Text style={[styles.tinyGray, styles.reviewInfo]}>|</Text>
          <Text style={[styles.tinyGray, styles.reviewInfo]}>
            {item.numReviews} reviews
          </Text>
        </View>
      </View>
      {isToggled ? (
        <Pressable
          style={styles.bookmark}
          onPress={e => handleToggleBookmark(e)}
        >
          <BookmarkAlt fillColor={colors.primaryColor} />
        </Pressable>
      ) : (
        <Pressable style={styles.bookmark} onPress={handleToggleBookmark}>
          <Bookmark strokeColor={colors.primaryColor} />
        </Pressable>
      )}
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
    fontFamily: 'Urbanist_400Regular',
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {},
  content: {},
  tinyGray: {
    fontSize: 12,
    color: colors.grayScale,
    fontFamily: 'Urbanist_500Medium',
  },
  serviceName: {
    fontSize: 18,
    fontFamily: 'Urbanist_700Bold',
    marginVertical: 10,
  },
  serviceCost: {
    color: colors.primaryColor,
    fontFamily: 'Urbanist_700Bold',
    fontSize: 18,
    marginBottom: 10,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  reviewInfo: {},

  bookmark: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
