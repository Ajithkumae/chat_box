import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import styles from './styles';
import { ButtonTypes } from '../../Model/types';
/**
 *
 * @param {props} onPress - onclick operation
 * @param {props} title - button title
 * @param {props} titleStyle - button title styles
 * @param {props} btnStyle - button parent view styles
 * @param {props} rightIcon - right icon
 * @param {props} leftIcon - left icon
 * @param {props} rightIconStyle - right icon style
 * @param {props} leftIconStyle - left icon style
 * @returns
 */

const Button = (props: ButtonTypes) => {
  const {
    onPress,
    title,
    titleStyle,
    btnStyle,
    rightIcon,
    leftIcon,
    rightIconStyle,
    leftIconStyle,
  } = props;
  return (
    <TouchableOpacity style={[styles.container, btnStyle]} onPress={onPress}>
      {leftIcon && (
        <View style={[leftIconStyle ? leftIconStyle : styles.leftAling]}>
          <Image source={leftIcon} style={styles.iconSize} />
        </View>
      )}
      <View style={styles.centerView}>
        <Text style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
      </View>
      {rightIcon && (
        <View style={rightIconStyle ? rightIconStyle : styles.rightAling}>
          <Image source={rightIcon} style={styles.iconSize} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
