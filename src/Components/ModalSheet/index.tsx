import React from 'react';
import {
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { ModalSheetProps } from '../../Model/types';

/**
 *
 * @param {prop} visible - Enable modal view
 * @param {prop} onClose - disabe modal view
 * @param {prop} children - content of modal view
 * @param {style} parentContinerView - parent container style
 * @param {style} parentSheetView - parent sheet style
 * @returns
 */

const ModalSheetView = (props: ModalSheetProps) => {
  const { visible, onClose, children, parentContinerView, parentSheetView } =
    props;
  return (
    <Modal animationType="slide" transparent={true} visible={visible ?? false}>
      <TouchableOpacity
        style={[styles.container, parentContinerView]}
        onPress={() => {
          onClose?.();
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={[styles.sheet, parentSheetView]}>{children}</View>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalSheetView;
