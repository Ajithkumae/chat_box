import React, {useState} from 'react';
import {Animated, TextInput, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../../Utils/theme';
import styles, {returnAnimatedTitleStyles} from './styles';
import {InputTypes} from '../../Model/types';
// @ts-ignore

/**
 * Text
 * @description Custom coponent for common InputTextField
 * @param {string} isFloatingText - to enable disable the floating input text view
 * @param {string} placeholder - holdes the place value
 * @param {useCallback(() => {callback},[input],)} onChangeText
 * @param {any} value - holdes the state value
 * @param {styles} parentContainerStyle - main view style from parent class
 * @param {styles} parentTextInputStyle - InputTextView styles from paren class
 * @param {styles} parentContainerStyle - main view style from parent class
 * @param {props} otherTextInputProps - all other props can be added etc keyboardType | editable | maxLength
 * @param {styles} borderColor - changes the border color if true else default color
 */

const InputPassword = (props: InputTypes) => {
  const {
    placeholder,
    value,
    isFloatingText,
    onChangeText,
    parentContainerStyle,
    parentTextInputStyle,
    otherTextInputProps,
    borderColor,
  } = props;
  const [isFieldActive, setIsFieldActive] = useState(false);
  const [animationValue, setAnimationValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const position = new Animated.Value(animationValue ? 1.6 : 0);
  const activeBorderColor =
    isFocus && isFieldActive
      ? borderColor
        ? borderColor.borderColor
        : COLORS.blue
      : COLORS.lightGray;

  const handleFocus = () => {
    setAnimationValue(true);
    setIsFieldActive(true);
    setIsFocus(true);
    Animated.timing(position, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };
  const handleBlur = () => {
    setIsFieldActive(false);
    setAnimationValue(false);
    setIsFocus(false);
    Animated.timing(position, {
      useNativeDriver: false,
      toValue: 0,
      duration: 150,
    }).start();
  };
  return (
    <View
      style={[
        styles.container,
        parentContainerStyle,
        isFocus ? (borderColor ? borderColor : styles.onEdit) : null,
      ]}>
      {isFloatingText && (
        <Animated.Text
          style={[
            styles.titleStyles,
            returnAnimatedTitleStyles(
              position,
              isFieldActive,
              activeBorderColor,
              value,
            ),
          ]}>
          {placeholder}
        </Animated.Text>
      )}
      <TextInput
        secureTextEntry={showPassword}
        value={value}
        style={[styles.textInput, parentTextInputStyle]}
        onFocus={() => !isFieldActive && handleFocus()}
        onBlur={() => {
          isFieldActive && !value ? handleBlur() : setIsFocus(false);
          setIsFieldActive(false);
        }}
        onChangeText={text => onChangeText(text)}
        placeholder={!isFloatingText ? placeholder : null}
        placeholderTextColor={COLORS.lightGray}
        {...otherTextInputProps}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.showPassword}></TouchableOpacity>
    </View>
  );
};

export default InputPassword;
