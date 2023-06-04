import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native';
import React, { useRef, useState } from 'react';
import SlideItem from './SlideItem';
import { Item } from '../types/basic';
import Pagination from './Pagination';

interface Props {
  data: Item[];
  customImageStyle?: any;
  disableAnimation?: boolean;
}

interface ViewableItemsChanged {
  viewableItems: ViewToken[];
}

const Slider = (props: Props) => {
  const { data, disableAnimation, customImageStyle } = props;
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const handleOnScroll = (e: unknown) => {
    if (disableAnimation) return;
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(e);
  };

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: ViewableItemsChanged) => {
      const firstViewable = viewableItems[0];
      let index = null;
      if (firstViewable) index = firstViewable.index;
      if (index !== null) setIndex(index);
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SlideItem
            disableAnimation={disableAnimation}
            customImageStyle={customImageStyle}
            item={item}
          />
        )}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={data} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
