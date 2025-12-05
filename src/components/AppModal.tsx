import React from 'react';
import { StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

interface ModalProps {
  isVisible: boolean;
  onBackdropPress?: () => void;
  onBackButtonPress?: () => void;
  style?: any;
  hasBackdrop?: boolean;
  coverScreen?: boolean;
  statusBarTranslucent?: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  children?: React.ReactNode;
  onModalHide?: () => void;
}

const AppModal = (props: ModalProps) => {
  return (
    <View style={styles.androidFix}>
      {/* @ts-ignore  */}
      <ReactNativeModal onModalHide={props?.onModalHide} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  androidFix: {
    position: 'absolute',
    inset: 0,
    flex: 1,
  },
});

export default AppModal;
