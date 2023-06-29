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
import CustomInput from '../CustomInput';
import Button from '../Button';
import { RootStackParamsList } from '../../types/basic';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import CurrentLoc from '../../assets/icons/CurrentLoc';
import DestLoc from '../../assets/icons/DestLoc';
import DottedLine from '../../assets/icons/DottedLine';

enum HouseShiftingEnum {
  table = 'Table',
  chair = 'Chair',
  television = 'Television',
  carpet = 'Carpet',
  washingMachine = 'Washing Machine',
  sofa = 'Sofa',
  cupboard = 'Cupboard',
}

type HouseShiftingItem = {
  text: HouseShiftingEnum;
  count: number;
};

type BookingStartProps = NativeStackNavigationProp<
  RootStackParamsList,
  'BookingStart'
>;
type Props = {
  navigation: BookingStartProps;
};

const HouseShiftingLanding = (props: Props) => {
  const { navigation } = props;
  const [clickCount, setClickCount] = useState(0);
  const handlePress = () => {
    switch (clickCount) {
      case 0:
        setClickCount(1);
        return;
      case 1:
        setClickCount(0);
        return;
      default:
        return;
    }
  };
  return (
    <>
      <View style={styles.container}>
        {clickCount === 0 ? <SelectType /> : <SelectDestination />}
      </View>
      <Button text="Continue" onPress={handlePress} />
    </>
  );
};

const SelectDestination = () => {
  return (
    <>
      <Text style={styles.actionText}>
        Select the origin & destination of the shifting.
      </Text>

      <View style={subStyle.navigStack}>
        <CurrentLoc />
        <View style={subStyle.input}>
          <CustomInput placeholder="From" />
        </View>
      </View>

      <View style={subStyle.line}>
        <DottedLine />
      </View>

      <View style={subStyle.navigStack}>
        <DestLoc />
        <View style={subStyle.input}>
          <CustomInput placeholder="Destination" />
        </View>
      </View>
    </>
  );
};

const SelectType = () => {
  const _HOUSE_SHIFTING_TYPES = Object.values(HouseShiftingEnum).map(c => ({
    text: c,
    count: 0,
  }));
  const [houseShiftingTypes, setHouseShiftingTypes] = useState(
    _HOUSE_SHIFTING_TYPES
  );
  return (
    <>
      <Text style={styles.actionText}>
        Enter the number of items you want to shift.
      </Text>

      <FlatList
        data={houseShiftingTypes}
        renderItem={({ item, index }) => (
          <CleaningType
            key={item.text}
            text={item.text}
            houseShiftingTypes={houseShiftingTypes}
            setHouseShiftingTypes={setHouseShiftingTypes}
          />
        )}
        snapToAlignment="center"
        showsVerticalScrollIndicator={true}
        style={{ flex: 1 }}
      />
    </>
  );
};

type TypeProps = {
  text: string;
  houseShiftingTypes: HouseShiftingItem[];
  setHouseShiftingTypes: Dispatch<SetStateAction<HouseShiftingItem[]>>;
};

const CleaningType = (props: TypeProps) => {
  const { text, houseShiftingTypes, setHouseShiftingTypes } = props;
  const idx = houseShiftingTypes.findIndex(e => e.text === text);
  const item = idx !== -1 ? houseShiftingTypes[idx] : null;

  const incrementCount = () => {
    if (!item) return;

    const newHouseShiftingTypes = [...houseShiftingTypes];
    newHouseShiftingTypes[idx].count = newHouseShiftingTypes[idx].count + 1;

    setHouseShiftingTypes(newHouseShiftingTypes);
  };

  const decrementCount = () => {
    if (!item) return;
    const newHouseShiftingTypes = [...houseShiftingTypes];

    if (newHouseShiftingTypes[idx].count > 0) {
      newHouseShiftingTypes[idx].count = newHouseShiftingTypes[idx].count - 1;
    }

    setHouseShiftingTypes(newHouseShiftingTypes);
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

export default HouseShiftingLanding;

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
  content: {
    gap: 5,
    marginBottom: 25,
  },
  contentTitle: {
    fontFamily: 'Urbanist_600SemiBold',
  },
  navigStack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 0.97,
  },
  line: {
    marginLeft: 15,
  },
});
