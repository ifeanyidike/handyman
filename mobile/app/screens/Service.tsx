import {
  GestureResponderEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import StarIcon from '../assets/icons/StarIcon';
import { Ionicons } from '@expo/vector-icons';
import HrLine from '../components/HrLine';
import SectionTitle from '../components/SectionTitle';

const _aboutStr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,possimus consequuntur ducimus labore iure sit accusamus exercitationem voluptas ipsum aliquid veritatis saepe numquam ipsa praesentium nemo natus, hic quidem repellat impedit! Optio inventore, quas atque praesentium hic impedit dolore asperiores reprehenderit enim. Dicta, cupiditate fuga quae quod veritatis quidem ipsum?`;

type ServiceProps = NativeStackScreenProps<RootStackParamsList, 'Service'>;
const Service = (props: ServiceProps) => {
  const [expandAbout, setExpandAbout] = useState(false);
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
    <SafeAreaView style={{ flex: 1 }}>
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
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Jenny Wilson</Text>
          <View style={styles.reviews}>
            <StarIcon size="18" />
            <Text style={styles.ratingText}>4.8 (4,479 reviews)</Text>
          </View>
        </View>

        <View style={styles.locTag}>
          <Text style={styles.tag}>Cleaning</Text>
          <View style={styles.loc}>
            <Ionicons
              name="location-sharp"
              size={23}
              color={colors.buttonPrimaryColor}
            />
            <Text style={styles.locText}>255 Grand Park Avenue, New York</Text>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={styles.amount}>$20</Text>
          <Text style={styles.priceType}>(Floor price)</Text>
        </View>

        <HrLine space={15} />
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About me</Text>
          <View style={styles.aboutDesc}>
            <Text style={styles.aboutDescText}>
              {_aboutStr.length > 100 && !expandAbout
                ? _aboutStr.slice(0, 100) + '...'
                : _aboutStr}
            </Text>
            {_aboutStr.length > 100 && (
              <TouchableOpacity
                style={styles.aboutDescAction}
                onPress={() => setExpandAbout(!expandAbout)}
              >
                <Text style={styles.readMore}>
                  Read {expandAbout ? 'less' : 'more...'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.photosAndVideos}>
          <SectionTitle
            caption="Photos & Videos"
            onPress={() => {}}
            action="See All"
          />
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
  userInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginTop: 25,
  },
  userName: {
    color: colors.buttonPrimaryColor,
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
  },
  reviews: {
    flexDirection: 'row',
    gap: 5,
  },
  ratingText: {
    fontFamily: 'Urbanist_300Light',
    fontSize: 12,
  },
  locTag: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
    alignItems: 'center',
  },
  tag: {
    fontSize: 12,
    fontFamily: 'Urbanist_600SemiBold',
    backgroundColor: '#7210ff14',
    color: colors.buttonPrimaryColor,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
  },
  loc: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  locText: {
    fontSize: 13,
    fontFamily: 'Urbanist_400Regular',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },
  amount: {
    color: colors.buttonPrimaryColor,
    fontFamily: 'Urbanist_700Bold',
    fontSize: 36,
  },
  priceType: {
    fontFamily: 'Urbanist_400Regular',
  },
  about: {},
  aboutTitle: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 20,
  },
  aboutDesc: {
    marginTop: 15,
    position: 'relative',
  },
  aboutDescText: {
    fontFamily: 'Urbanist_400Regular',
  },
  aboutDescAction: {},
  readMore: {
    fontFamily: 'Urbanist_700Bold',
    color: colors.buttonPrimaryColor,
    padding: 5,
  },
  photosAndVideos: {
    marginTop: 20,
  },
});
