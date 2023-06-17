import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ReviewStar from './ReviewStar';
import LikeIcon from '../assets/icons/LikeIcon';
import NavButton from './NavButton';

type Props = {
  img: number;
  name: string;
  stars: string;
  text: string;
  reviewCount: number;
  createdAt: string;
};
const ReviewComment = (props: Props) => {
  const { img, name, stars, text } = props;
  return (
    <View style={styles.container}>
      <View style={styles.desc}>
        <Image source={img} style={styles.img} />
        <Text style={styles.name}>{name}</Text>
        <NavButton customWidth={70}>
          <ReviewStar item={stars} />
        </NavButton>
      </View>
      <Text style={styles.content}>{text}</Text>
      <View style={styles.perf}>
        <View style={styles.reviews}>
          <LikeIcon size="20" />
          <Text style={styles.reviewCount}>{props.reviewCount}</Text>
        </View>
        <Text style={styles.when}>{props.createdAt}</Text>
      </View>
    </View>
  );
};

export default ReviewComment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 40,
    height: 40,
  },
  name: {
    fontFamily: 'Urbanist_600SemiBold',
  },
  content: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 13,
    marginTop: 8,
  },
  perf: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 8,
    alignItems: 'center',
  },
  reviews: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  reviewCount: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 13,
  },
  when: {
    fontFamily: 'Urbanist_300Light',
    fontSize: 12,
  },
});
