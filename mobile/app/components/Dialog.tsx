import { StyleSheet, Text, View, Modal, Pressable, Image } from 'react-native';
import React, { ReactNode } from 'react';
import { colors } from '../utils/generalUtils';

type Props = {
  modalOpen: boolean;
  toggleModal?: (e: boolean) => void;
  children?: ReactNode;
  borderTopRadius?: number;
  flatBottom?: boolean;
  fullWidth?: boolean;
  pinToBottom?: boolean;
  grayBackground?: boolean;
};
const Dialog = (props: Props) => {
  const {
    children,
    modalOpen,
    flatBottom,
    fullWidth,
    pinToBottom,
    grayBackground,
  } = props;
  return (
    <Modal
      animationType="slide"
      visible={modalOpen}
      transparent={true}
      onRequestClose={() => {}}
    >
      <View
        style={[
          styles.modalContainer,
          pinToBottom && { justifyContent: 'flex-end' },
          grayBackground && {
            backgroundColor: colors.nearBlack,
            opacity: 0.9,
          },
        ]}
      >
        <View
          style={[
            styles.modalView,
            flatBottom && {
              opacity: 1,
              borderRadius: 50,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
            fullWidth && {
              margin: 0,
            },
          ]}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.backgroundColor,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196f3',
  },
  text: {},
});
