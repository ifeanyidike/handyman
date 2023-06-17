import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Slider from '../components/Slider';
import {
  reviewsData,
  sampleServiceHeroImages,
  uris,
} from '../utils/pagesUtils';
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
import NavButton from '../components/NavButton';
import { AntDesign } from '@expo/vector-icons';
import ReviewComment from '../components/ReviewComment';
import ReviewStar from '../components/ReviewStar';
import Button from '../components/Button';
import ButtonGroup from './ButtonGroup';

const { width } = Dimensions.get('window');
const _aboutStr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,possimus consequuntur ducimus labore iure sit accusamus exercitationem voluptas ipsum aliquid veritatis saepe numquam ipsa praesentium nemo natus, hic quidem repellat impedit! Optio inventore, quas atque praesentium hic impedit dolore asperiores reprehenderit enim. Dicta, cupiditate fuga quae quod veritatis quidem ipsum?`;
const stars = ['All', '5', '4', '3', '2', '1'];
type ServiceProps = NativeStackScreenProps<RootStackParamsList, 'Service'>;
const Service = (props: ServiceProps) => {
  const [navClicked, toggleNavClicked] = useState({
    index: 0,
  });
  const [expandAbout, setExpandAbout] = useState(false);
  const [bookmarkToggled, setBookmarkToggled] = useState<boolean>(false);
  const { navigation, route } = props;
  const customImageStyle = {
    height: 300,
  };
  const parentStyle = {
    height: 300,
  };

  const customPaginationStyle = {
    bottom: 5,
  };

  const handleToggleBookmark = (e: GestureResponderEvent) => {
    setBookmarkToggled(!bookmarkToggled);
  };

  const uris_first = uris.slice(0, 3);
  const uris_last = uris.slice(3);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        <View style={styles.scrollContainer}>
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
              <Text style={styles.locText}>
                255 Grand Park Avenue, New York
              </Text>
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
          <View style={styles.section}>
            <SectionTitle
              caption="Photos & Videos"
              onPress={() => {}}
              action="See All"
            />

            <View style={[styles.images, styles.topPhoto]}>
              <Image
                source={{ uri: uris_first[0] }}
                style={[styles.image, styles.fullItem]}
              />

              <View style={styles.otherImages}>
                {uris_first.slice(1).map((uri, idx) => (
                  <Image key={idx} source={{ uri }} style={styles.image} />
                ))}
              </View>
            </View>
            <View style={styles.images}>
              <View style={styles.otherImages}>
                {uris_last.slice(1).map((uri, idx) => (
                  <Image key={idx} source={{ uri }} style={styles.image} />
                ))}
              </View>
              <Image
                source={{ uri: uris_last[0] }}
                style={[styles.image, styles.fullItem]}
              />
            </View>
          </View>

          <View style={styles.section}>
            <SectionTitle onPress={() => {}} action="See All">
              <View style={[styles.reviews]}>
                <StarIcon size="25" />
                <Text style={styles.aboutTitle}>4.8 (4,479 reviews)</Text>
              </View>
            </SectionTitle>
            <FlatList
              style={{ marginVertical: 25 }}
              data={stars}
              renderItem={({ item, index }) => {
                const isClicked = index === navClicked.index;
                return (
                  <NavButton
                    hasBackground={isClicked}
                    index={index}
                    customWidth={75}
                    toggleNavClicked={toggleNavClicked}
                  >
                    <ReviewStar isClicked={isClicked} item={item} />
                  </NavButton>
                );
              }}
              horizontal
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
            />

            {reviewsData.map((data, idx) => (
              <ReviewComment key={idx} {...data} />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.actions}>
        <ButtonGroup
          leftActionBtn={() => {}}
          rightActionBtn={() => {}}
          leftActionText="Message"
          rightActionText="Book Now"
        />
      </View>
    </SafeAreaView>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  backButton: {
    position: 'absolute',
    zIndex: 2,
    top: 50,
    left: 0,
  },
  scrollContainer: {
    backgroundColor: colors.backgroundColor,
    paddingTop: 10,
    paddingHorizontal: 12,
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
  section: {
    marginTop: 20,
  },
  topPhoto: {
    marginTop: 15,
  },
  images: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  image: {
    width: width / 2 - 22,
    height: 150,
    borderRadius: 20,
  },
  otherImages: {
    gap: 15,
  },
  fullItem: {
    height: 315,
  },
  actions: {
    paddingVertical: 20,
  },
});
