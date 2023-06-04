import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { colors, validateStorageObj } from '../utils/generalUtils';
import HrLine from './HrLine';
import { SearchTextType } from '../types/basic';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('screen');
type Props = {
  triggerSearch: number;
  setTriggerSearch: (e: number) => void;
};
const SearchBlock = ({ triggerSearch, setTriggerSearch }: Props) => {
  const [items, setItems] = useState<SearchTextType[]>([]);

  useEffect(() => {
    (async () => {
      const textObj: SearchTextType[] = await validateStorageObj(
        '@searchItems'
      );
      if (!textObj) return;
      textObj.sort((a: SearchTextType, b: SearchTextType) => b.count - a.count);
      setItems(textObj.slice(0, 10));
    })();
  }, [triggerSearch]);

  const handleClearAll = async (e: GestureResponderEvent) => {
    await AsyncStorage.removeItem('@searchItems');
    setItems([]);
  };

  const handleRemoveItem = async (item: SearchTextType) => {
    const textObj: SearchTextType[] = await validateStorageObj('@searchItems');
    if (!textObj) return;
    const filteredObj = textObj.filter(
      (t: SearchTextType) => t.text !== item.text
    );
    await AsyncStorage.setItem('@searchItems', JSON.stringify(filteredObj));
    setItems(filteredObj);

    setTriggerSearch(triggerSearch + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <HrLine space={10} />

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <Text style={styles.contentText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Fontisto
                name="close"
                size={24}
                color={colors.buttonPrimaryColor}
              />
            </TouchableOpacity>
          </View>
        )}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
      {/* <View style={styles.content}>
        <Text style={styles.contentText}>SearchBlock</Text>
        <Fontisto name="close" size={24} color={colors.buttonPrimaryColor} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>SearchBlock</Text>
        <Fontisto name="close" size={24} color={colors.buttonPrimaryColor} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>SearchBlock</Text>
        <Fontisto name="close" size={24} color={colors.buttonPrimaryColor} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>SearchBlock</Text>
        <Fontisto name="close" size={24} color={colors.buttonPrimaryColor} />
      </View> */}
    </View>
  );
};

export default SearchBlock;

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 2,
    backgroundColor: colors.backgroundColor,
    width: width - 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 18,
  },
  clearAll: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 14,
    color: colors.buttonPrimaryColor,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  contentText: {
    fontFamily: 'Urbanist_500Medium',
    fontSize: 16,
    color: colors.grayScale,
  },
});
