import { ViewStyle } from "react-native";

export default interface homeTypes {
  navigation: any,
  show: boolean,
}

//Checkbox component types
export interface CheckboxProps {
  backgroundViewActiveColor?: string,
  backgroundViewInActiveColor?: string,
  viewHeight?: number
  onValueChange?: Function,
  labelStyles?: object,
  label?: string
}
//Switch component types
export interface SwitchProps {
  parentViewActiveColor?: string,
  parentViewInActiveColor?: string,
  childViewActiveColor?: string,
  childViewInActiveColor?: string,
  parentViewHeight?: number | undefined,
  parentViewWidth?: number | undefined,
  onValueChange?: Function
}
export interface ModalSheetProps {
  visible: boolean,
  onClose: Function,
  parentContinerView: ViewStyle,
  parentSheetView: ViewStyle
}
export interface CustomDropdownProps {
  dropdownData: Array<any>
  dropdownBtnStyle?: ViewStyle
  dropdownDataStyle?: ViewStyle
  setSelectedValueParent: (item: string) => void
}
export interface CustomDropdownCheckboxProps {
  dropdownData: Array<any>
  dropdownBtnStyle?: ViewStyle
  dropdownDataStyle?: ViewStyle
  maxSelect?: number
  selectAll?: boolean
}
export interface InputTypes {
  placeholder: string
  value: string,
  isFloatingText: boolean,
  onChangeText: (item: string) => void
  parentContainerStyle: ViewStyle
  parentTextInputStyle: ViewStyle
  otherTextInputProps: ViewStyle
  borderColor: ViewStyle
}
export interface ButtonTypes {
  onPress: Function
  title: string
  titleStyle: ViewStyle
  btnStyle: ViewStyle
  rightIcon: Number
  leftIcon: Number
  rightIconStyle: ViewStyle
  leftIconStyle: ViewStyle

  placeholder: string
  value: string,
  isFloatingText: boolean,
  onChangeText: (item: string) => void
  parentContainerStyle: ViewStyle
  parentTextInputStyle: ViewStyle
  otherTextInputProps: ViewStyle
  borderColor: ViewStyle
}
export interface DummyDataProps {
  id: number;
  name: string;
  checked: boolean;
}