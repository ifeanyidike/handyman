import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { colors } from '../utils/generalUtils';
import HrLine from './HrLine';

const { width } = Dimensions.get('screen');
type Props = {
  searchExists: boolean | undefined;
  searchText: string;
  searchItems: string[];
  setSearchItems: (e: string[]) => void;
};
const SearchBlock = (props: Props) => {
  const { searchText, searchExists, searchItems, setSearchItems } = props;

  const handleClearAll = async (e: GestureResponderEvent) => {
    // await AsyncStorage.removeItem('@searchItems');
    // setItems([]);

    setSearchItems([]);
  };

  const handleRemoveItem = async (item: string) => {
    const _filteredItems = searchItems.filter(el => el !== item);
    setSearchItems(_filteredItems);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {searchExists === undefined ? 'Recent' : `Result for "${searchText}"`}
        </Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <HrLine space={10} />

      <FlatList
        data={searchItems}
        renderItem={({ item }) => (
          <View style={styles.content}>
            <Text style={styles.contentText}>{item}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Fontisto name="close" size={24} color={colors.primaryColor} />
            </TouchableOpacity>
          </View>
        )}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
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
    color: colors.primaryColor,
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
