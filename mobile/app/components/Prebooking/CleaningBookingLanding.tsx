import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { colors } from '../../utils/generalUtils';
import MinusIcon from '../../assets/icons/MinusIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import Button from '../Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../types/basic';

enum CleaningEnum {
  livingRoom = 'Living Room',
  terrace = 'Terrace',
  bedroom = 'Bedroom',
  bathroom = 'Bathroom',
  kitchen = 'Kitchen',
  diningRoom = 'Dining Room',
  garage = 'Garage',
}

type CleaningItem = {
  text: CleaningEnum;
  count: number;
};

type BookingStartProps = NativeStackNavigationProp<
  RootStackParamsList,
  'BookingStart'
>;
type Props = {
  navigation: BookingStartProps;
};

const CleaningBookingLanding = (props: Props) => {
  const { navigation } = props;
  const _CLEANING_TYPES = Object.values(CleaningEnum).map(c => ({
    text: c,
    count: 0,
  }));
  const [cleaningTypes, setCleaningTypes] = useState(_CLEANING_TYPES);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.actionText}>
          Enter the number of items to be cleaned.
        </Text>

        <FlatList
          data={cleaningTypes}
          renderItem={({ item, index }) => (
            <CleaningType
              key={item.text}
              text={item.text}
              cleaningTypes={cleaningTypes}
              setCleaningTypes={setCleaningTypes}
            />
          )}
          snapToAlignment="center"
          showsVerticalScrollIndicator={true}
          style={{ flex: 1 }}
        />
      </View>
      <Button
        text="Continue"
        onPress={() => navigation.navigate('BookingDetails')}
      />
    </>
  );
};

type TypeProps = {
  text: string;
  cleaningTypes: CleaningItem[];
  setCleaningTypes: Dispatch<SetStateAction<CleaningItem[]>>;
};

const CleaningType = (props: TypeProps) => {
  const { text, cleaningTypes, setCleaningTypes } = props;
  const idx = cleaningTypes.findIndex(e => e.text === text);
  const item = idx !== -1 ? cleaningTypes[idx] : null;

  const incrementCount = () => {
    if (!item) return;

    const newCleaningTypes = [...cleaningTypes];
    newCleaningTypes[idx] = {
      ...newCleaningTypes[idx],
      count: newCleaningTypes[idx].count + 1,
    };

    setCleaningTypes(newCleaningTypes);
  };

  const decrementCount = () => {
    if (!item) return;
    const newCleaningTypes = [...cleaningTypes];

    newCleaningTypes[idx] = {
      ...newCleaningTypes[idx],
      count:
        newCleaningTypes[idx].count > 0 ? newCleaningTypes[idx].count - 1 : 0,
    };
    setCleaningTypes(newCleaningTypes);
  };

  return (
    <View style={subStyle.container}>
      <Text style={subStyle.text}>{text}</Text>
      <View style={subStyle.action}>
        <TouchableOpacity onPress={decrementCount}>
          <MinusIcon size="40" />
        </TouchableOpacity>
        <Text style={subStyle.actionText}>{item?.count}</Text>
        <TouchableOpacity onPress={incrementCount}>
          <PlusIcon size="40" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CleaningBookingLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  actionText: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 12,
    marginVertical: 20,
  },
});

const subStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  text: {
    fontFamily: 'Urbanist_600SemiBold',
  },
  action: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginLeft: 'auto',
  },
  actionText: {
    fontFamily: 'Urbanist_600SemiBold',
  },
});
