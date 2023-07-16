import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../utils/generalUtils';
import Checkmark from '../../assets/icons/Checkmark';

type SelectedPaint = {
  color: string;
  selected: boolean;
};
type Props = {
  backgroundColor: string;
  selectedPaint: SelectedPaint[];
  setSelectedPaint: Dispatch<SetStateAction<SelectedPaint[]>>;
};
const PaintBall = (props: Props) => {
  const { backgroundColor, selectedPaint, setSelectedPaint } = props;
  const isWhiteBg = backgroundColor === colors.white;

  const borderColor = isWhiteBg ? colors.grayScale : colors.backgroundColor;
  const iconColor = isWhiteBg ? colors.primaryColor : colors.white;

  const paintIdx = selectedPaint.findIndex(p => p.color === backgroundColor);
  const handlePress = () => {
    if (paintIdx === -1) return;
    const updatedPaint = [...selectedPaint];
    updatedPaint[paintIdx].selected = !updatedPaint[paintIdx].selected;
    setSelectedPaint(updatedPaint);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, { borderColor, backgroundColor }]}
    >
      {paintIdx > -1 && selectedPaint[paintIdx].selected && (
        <Checkmark color={iconColor} />
      )}
    </TouchableOpacity>
  );
};

export default PaintBall;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
