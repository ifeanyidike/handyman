import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { colors } from '../../utils/generalUtils';
import MinusIcon from '../../assets/icons/MinusIcon';
import PlusIcon from '../../assets/icons/PlusIcon';

type Props = {
  children: ReactNode;
  count: number;
  decrementCount: () => void;
  incrementCount: () => void;
  verticalPadding?: number;
};
const ToggleBookingCount = (props: Props) => {
  const {
    children,
    count,
    decrementCount,
    incrementCount,
    verticalPadding = 10,
  } = props;
  return (
    <View style={[style.container, { paddingVertical: verticalPadding }]}>
      <Text style={style.text}>{children}</Text>
      <View style={style.action}>
        <TouchableOpacity onPress={decrementCount}>
          <MinusIcon size="40" />
        </TouchableOpacity>
        <Text style={style.actionText}>{count}</Text>
        <TouchableOpacity onPress={incrementCount}>
          <PlusIcon size="40" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleBookingCount;

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
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
