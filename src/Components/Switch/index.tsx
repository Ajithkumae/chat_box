import React, { useRef, useState, useMemo, useEffect } from "react";
import { Animated, TouchableOpacity } from "react-native";
import styles from "./styles";
import { COLORS } from "../../Utils/theme";
import { SwitchProps } from "../../Model/types";

/**
 *
 * @param {props} parentViewActiveColor - switch parent view active color
 * @param {props} parentViewInActiveColor - switch parent view inactive color
 * @param {props} childViewActiveColor - switch child view active color
 * @param {props} childViewInActiveColor - switch child view inactive color
 * @param {props} parentViewHeight - switch parent view height
 * @param {props} parentViewWidth - switch child view width
 * @param {props} onValueChange - returns value on switch toggles operation
 * @returns
 */
const { lightGreen, lightGray, white } = COLORS;
const SwitchComponent = (props: SwitchProps) => {
  const {
    parentViewActiveColor,
    parentViewInActiveColor,
    childViewActiveColor,
    childViewInActiveColor,
    onValueChange,
  } = props;

  const [value, setValue] = useState<boolean>(false);
  const [parentViewHeight, setParentViewHeight] = useState<number | undefined>(props.parentViewHeight);
  const [parentViewWidth, setParentViewWidth] = useState<number | undefined>(props.parentViewWidth);
  const animatedSwitchButton = useRef(new Animated.Value(0));

  const onSwitchToggle = () => {
    Animated.timing(animatedSwitchButton.current, {
      toValue: value ? 0 : 1,
      duration: 150,
    }).start(() => {
      setValue(!value);
    });
  };

  useEffect(() => {
    onValueChange && onValueChange(value);
  }, [value]);

  useMemo(() => {
    const { parentViewHeight, parentViewWidth } = props;
    if (parentViewHeight < 33 || parentViewWidth < 50) {
      setParentViewWidth(50);
      setParentViewHeight(33);
    } else if (parentViewWidth - parentViewHeight <= 17) {
      setParentViewWidth(parentViewHeight + 17);
      setParentViewHeight(parentViewHeight);
    }
  }, [props.parentViewHeight, props.parentViewWidth]);

  const shiftInterpolateMotion = animatedSwitchButton.current.interpolate({
    inputRange: [0, 1],
    outputRange: [1, parentViewWidth - (parentViewHeight - 5) - 1],
  });
  const shiftAnimatedStyle = {
    marginLeft: shiftInterpolateMotion,
  };
  const parentViewStyle = {
    backgroundColor: value ? parentViewActiveColor : parentViewInActiveColor,
    height: parentViewHeight - 17,
    width: parentViewWidth - 5,
    borderRadius: parentViewHeight - 13,
  };

  const childButtonViewStyle = {
    backgroundColor: value ? childViewActiveColor : childViewInActiveColor,
    height: parentViewHeight - 17,
    width: parentViewHeight - 5,
    borderRadius: parentViewHeight - 5 - 8,
  };
  return (
    <TouchableOpacity
      onPress={onSwitchToggle}
      style={[styles.wholeViewStyle, parentViewStyle]}
      activeOpacity={0.99}
    >
      <Animated.View
        style={[
          styles.movingButtonStyle,
          childButtonViewStyle,
          shiftAnimatedStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default SwitchComponent;

SwitchComponent.defaultProps = {
  parentViewHeight: 33,
  parentViewWidth: 50,
  parentViewActiveColor: lightGreen,
  parentViewInActiveColor: lightGray,
  childViewActiveColor: white,
  childViewInActiveColor: white,
};
