import React, {useState} from 'react';
import {Animated, TextInput, View} from 'react-native';
import {COLORS} from '../../Utils/theme';
import styles, {returnAnimatedTitleStyles} from './styles';
import {InputTypes} from '../../Model/types';

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

const InputText = (props: InputTypes) => {
  const {
    placeholder,
    value,
    isFloatingText,
    onChangeText,
    parentContainerStyle,
    parentTextInputStyle,
    otherTextInputProps,
    borderColor,
    placeholderSty,
  } = props;
  const [isFieldActive, setIsFieldActive] = useState(false);
  const [animationValue, setAnimationValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const position = new Animated.Value(animationValue ? 1.6 : 0);
  const activeBorderColor =
    isFocus && isFieldActive
      ? borderColor
        ? borderColor.borderColor
        : COLORS.blue
      : COLORS.lightGray;

  const handleFocus = () => {
    if (!isFieldActive) {
      setAnimationValue(true);
      setIsFieldActive(true);
      setIsFocus(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };
  const handleBlur = () => {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
      setAnimationValue(false);
      setIsFocus(false);
      Animated.timing(position, {
        useNativeDriver: false,
        toValue: 0,
        duration: 150,
      }).start();
    } else {
      setIsFocus(false);
      setIsFieldActive(false);
    }
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
            placeholderSty && {backgroundColor: placeholderSty},
          ]}>
          {placeholder}
        </Animated.Text>
      )}
      <TextInput
        value={value}
        style={[styles.textInput, parentTextInputStyle]}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        onChangeText={text => onChangeText(text)}
        placeholder={!isFloatingText ? placeholder : null}
        placeholderTextColor={COLORS.lightGray}
        {...otherTextInputProps}
      />
    </View>
  );
};

export default InputText;
