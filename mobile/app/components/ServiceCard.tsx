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

type Props = {
  Icon: number;
  userName: string;
  serviceName: string;
  serviceCost: string;
  averageRating: number;
  numReviews: number;
  index: number;
};
const ServiceCard = (props: Props) => {
  const [fillColor, setFillColor] = useState();
  const [strokeColor, setStrokeColor] = useState(colors.buttonPrimaryColor);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleBookmark = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsToggled(!isToggled);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={props.Icon} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.tinyGray}>{props.userName}</Text>
        <Text style={styles.serviceName}>{props.serviceName}</Text>
        <Text style={styles.serviceCost}>{props.serviceCost}</Text>
        <View style={styles.review}>
          <FontAwesome name="star-half-o" size={18} color={colors.gold} />
          <Text style={[styles.tinyGray, styles.reviewInfo]}>
            {props.averageRating}
          </Text>
          <Text style={[styles.tinyGray, styles.reviewInfo]}>|</Text>
          <Text style={[styles.tinyGray, styles.reviewInfo]}>
            {props.numReviews} reviews
          </Text>
        </View>
      </View>
      {isToggled ? (
        <Pressable
          style={styles.bookmark}
          onPress={e => handleToggleBookmark(e)}
        >
          <BookmarkAlt fillColor={colors.buttonPrimaryColor} />
        </Pressable>
      ) : (
        <Pressable style={styles.bookmark} onPress={handleToggleBookmark}>
          <Bookmark strokeColor={colors.buttonPrimaryColor} />
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
    color: colors.buttonPrimaryColor,
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
