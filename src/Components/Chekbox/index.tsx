import React, { useState, useMemo, useEffect } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { tickIcon } from "../../Utils/images";
import styles from "./styles";
import { COLORS } from "../../Utils/theme";
import { CheckboxProps } from "../../Model/types";

/**
 *
 * @param {props} backgroundViewActiveColor - checkbox background view active color
 * @param {props} backgroundViewInActiveColor - checkbox background view Inactive color
 * @param {props} viewHeight - checkbox view height
 * @param {props} onValueChange - returns current checkbox value operation
 * @param {props} label - checkbox label text
 * @param {props} labelStyles - checlbox custom label styles
 * @returns
 */
const { white, black } = COLORS;
const Checkbox = (props: CheckboxProps) => {
  const [value, setValue] = useState<boolean>(true);
  const {
    backgroundViewActiveColor,
    backgroundViewInActiveColor,
    onValueChange,
    label,
    labelStyles
  } = props;
  var viewHeight = props.viewHeight ? props.viewHeight : 40;
  const onChekboxToggle = () => {
    setValue(!value);
  };

  useEffect(() => {
    onValueChange && onValueChange(value);
  }, [value]);

  useMemo(() => {
    if (viewHeight < 15) {
      viewHeight = 15;
    }
  }, [viewHeight]);

  const backgroundViewWrapperStyle = {
    backgroundColor: value
      ? backgroundViewActiveColor
      : backgroundViewInActiveColor,
    height: viewHeight,
    width: viewHeight,
    borderRadius: viewHeight / 10
  };

  const imageStyle = {
    height: viewHeight - 15,
    width: viewHeight - 15,
    tintColor: (backgroundViewActiveColor == black || backgroundViewActiveColor == 'black') && white
  };

  return (
    <View style={styles.wholeViewStyle}>
      <TouchableOpacity
        style={[styles.containerViewStyle, backgroundViewWrapperStyle]}
        activeOpacity={0.99}
        onPress={onChekboxToggle}
      >
        {value && <Image source={tickIcon} style={imageStyle} />}
      </TouchableOpacity>
      {
        label &&
        <View style={styles.labelViewStyle}>
          <Text style={labelStyles && labelStyles}>{label}</Text>
        </View>
      }
    </View>
  );
};

export default Checkbox;

Checkbox.defaultProps = {
  backgroundViewActiveColor: white,
  backgroundViewInActiveColor: white,
  viewHeight: 40,
};
