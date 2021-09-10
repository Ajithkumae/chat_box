import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { CustomDropdownProps } from '../../Model/types';
import { down, up } from '../../Utils/images';
import styles from './style';

/**
 *
 * @param {props} dropdownData - List of dropdown data
 * @param {props} dropdownBtnStyle - style of selected dropdown data
 * @param {props} dropdownDataStyle - style of dropdown list data
 * @param {props} setSelectedValueParent - send selected dropdown data to parent
 * @returns
 */

const CustomDropdown = (props: CustomDropdownProps) => {
  const {
    dropdownData,
    dropdownBtnStyle,
    dropdownDataStyle,
    setSelectedValueParent,
  } = props;
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState(dropdownData[0]);

  const _onValueSelected = (item: string) => {
    setDropdownVisibility(!dropdownVisibility);
    setSelectedValue(item);
    setSelectedValueParent(item);
  };

  const _renderItem = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity
        style={styles.select}
        onPress={() => _onValueSelected(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setDropdownVisibility(!dropdownVisibility)}
        style={[styles.container, dropdownBtnStyle]}>
        <Text>{selectedValue}</Text>
        <Image
          style={styles.arrowIcon}
          source={dropdownVisibility ? up : down}
        />
      </TouchableOpacity>
      <View>
        {dropdownVisibility && (
          <View style={[styles.openDropdown, dropdownDataStyle]}>
            <FlatList
              data={dropdownData}
              renderItem={_renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default CustomDropdown;
