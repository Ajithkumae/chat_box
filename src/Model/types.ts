import {ViewStyle} from 'react-native';

export interface InputTypes {
  placeholder: any;
  value: string;
  isFloatingText?: boolean;
  onChangeText: (item: string) => void;
  parentContainerStyle?: ViewStyle;
  parentTextInputStyle?: ViewStyle;
  otherTextInputProps?: ViewStyle;
  borderColor?: ViewStyle;
  placeholderSty?: any;
}
