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
import CheckBox from '../CheckBox';
import Button from '../Button';

enum ApplianceEnum {
  washingMachine = 'Washing Machine',
  refrigerator = 'Refrigerator',
  dispenser = 'Dispenser',
  airConditioner = 'Air Conditioner',
  grillingMachine = 'Grilling Machine',
  washersDryers = 'Washers & Dryers',
}

type ApplianceItem = {
  text: ApplianceEnum;
  selected: boolean;
};

const ApplianceLanding = () => {
  const _APPLIANCE_TYPES = Object.values(ApplianceEnum).map(c => ({
    text: c,
    selected: false,
  }));
  const [applianceType, setApplianceType] = useState(_APPLIANCE_TYPES);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.actionText}>
          Choose the appliance service you need.
        </Text>

        <FlatList
          data={applianceType}
          renderItem={({ item, index }) => (
            <ApplianceType
              key={item.text}
              text={item.text}
              applianceType={applianceType}
              setApplianceType={setApplianceType}
            />
          )}
          snapToAlignment="center"
          showsVerticalScrollIndicator={true}
          style={{ flex: 1 }}
        />
      </View>
      <Button text="Continue" onPress={() => {}} />
    </>
  );
};

type TypeProps = {
  text: string;
  applianceType: ApplianceItem[];
  setApplianceType: Dispatch<SetStateAction<ApplianceItem[]>>;
};

const ApplianceType = (props: TypeProps) => {
  const { text, applianceType, setApplianceType } = props;

  const idx = applianceType.findIndex(e => e.text === text);
  const item = idx !== -1 ? applianceType[idx] : null;

  const handleToggleSelect = () => {
    if (!item) return;

    const newApplianceType = [...applianceType];
    newApplianceType[idx].selected = !newApplianceType[idx].selected;

    setApplianceType(newApplianceType);
  };

  return (
    <View style={subStyle.container}>
      <Text style={subStyle.text}>{text}</Text>
      <View style={subStyle.action}>
        <CheckBox
          isChecked={!!item?.selected}
          handleCustomToggle={handleToggleSelect}
          size={22}
        />
      </View>
    </View>
  );
};

export default ApplianceLanding;

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
    paddingVertical: 25,
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
