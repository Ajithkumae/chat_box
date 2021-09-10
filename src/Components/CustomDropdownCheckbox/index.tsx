import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomDropdownCheckboxProps, DummyDataProps } from '../../Model/types';
import { down, tickIcon, up } from '../../Utils/images';
import { COLORS } from '../../Utils/theme';
import styles from './style';

/**
 *
 * @param {props} dropdownData - List of dropdown data
 * @param {props} dropdownBtnStyle - style of selected dropdown data
 * @param {props} dropdownDataStyle - style of dropdown list data
 * @param {props} maxSelect - maximum possible selection | can omit for all selection
 * @param {props} selectAll - if ture all checkbox tick & untick functionality will be there
 * @returns
 */

const CustomDropdownCheckbox = (props: CustomDropdownCheckboxProps) => {
  const {
    dropdownData,
    dropdownBtnStyle,
    dropdownDataStyle,
    maxSelect,
    selectAll
  } = props;
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [visibleData, setVisibleData] = useState(dropdownData);
  const [allData, setAllData] = useState(dropdownData);
  const [textInputValue, setTextInputValue] = useState('');
  const [isSelectAll, setIsSelectAll] = useState(false)
  const [isCheckboxDisable, setCheckboxDisable] = useState(false);
  const [show, setShow] = useState(0);

  const _onChangeText = (data: string) => {   // For Search
    setTextInputValue(data);
    if (data) {
      let arr: Array<any> = [];
      dropdownData.map(item => {
        if (item.name.toUpperCase().includes(data.toUpperCase())) {
          arr.push(item);
        }
      });
      setVisibleData(arr);
    } else {
      setVisibleData(dropdownData);
    }
  };

  const _onValueSelected = (index: number) => {   // For checkbox selection
    let arr = [...visibleData];
    arr[index].checked = !arr[index].checked;
    setVisibleData(arr);
  };

  useEffect(() => {
    setAllData([...dropdownData])
    selectAll && _checkManualSelection();
    _toDisableButton();
  }, [visibleData]);

  const _removeSelectedValue = (index: number) => {
    let arr = [...allData];
    arr[index].checked = !arr[index].checked;
    setAllData(arr);
    _toDisableButton();
  }

  const _checkManualSelection = () => {   // Select checkbox "All" after manually section of all data
    if (isSelectAll) {
      allData.find(item => {
        if (!item.checked) {
          setIsSelectAll(false)
        }
      })
    } else {
      let count = 0;
      allData.map(item => {
        if (item.checked) {
          count++;
        }
      })
      if (count == allData.length) {
        setIsSelectAll(true)
      }
    }
  }

  const _onSelectAll = () => {      // When hit on "All" checkbox, all checbox should be checked or unchecked
    if (isSelectAll) {
      allData.map(item => item.checked = false)
    } else {
      allData.map(item => item.checked = true)
    }
    setAllData(allData)
    setIsSelectAll(!isSelectAll)
  }

  const _toDisableButton = () => {
    // To diable all checboex when maxSelect overpass
    if (maxSelect) {
      let noOfSelecteddata = 0;
      allData.map(item => {
        if (item.checked) {
          noOfSelecteddata++;
        }
      })
      setShow(noOfSelecteddata)
      if (noOfSelecteddata >= maxSelect) {
        setCheckboxDisable(true)
      } else {
        setCheckboxDisable(false)
      }
    }
  }

  const _renderItem = ({    //    render dropdown element
    item,
    index,
  }: {
    item: DummyDataProps;
    index: number;
  }) => {
    return (
      <>
        {index == 0 &&
          <TextInput
            placeholder={'Search'}
            style={styles.textInput}
            value={textInputValue}
            onChangeText={_onChangeText}
          />}
        {
          selectAll && index == 0 && <View style={styles.dropdownItemContainer}>
            <TouchableOpacity
              disabled={maxSelect ? true : false}
              style={[styles.tickContainer, { backgroundColor: maxSelect ? COLORS.gray : COLORS.white }]}
              onPress={() => _onSelectAll()}>
              {isSelectAll && <Image source={tickIcon} style={styles.tickIcon} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _onSelectAll()}>
              <Text style={styles.checkText}>All</Text>
            </TouchableOpacity>
          </View>
        }
        <View style={styles.dropdownItemContainer}>
          <TouchableOpacity
            disabled={isCheckboxDisable}
            style={[styles.tickContainer, { backgroundColor: isCheckboxDisable ? COLORS.gray : COLORS.white }]}
            onPress={() => _onValueSelected(index)}>
            {item.checked && <Image source={tickIcon} style={styles.tickIcon} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => _onValueSelected(index)}
          >
            <Text style={styles.checkText}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const _renderSelectedData = ({ item, index }: { item: DummyDataProps, index: number }) => {
    if (item.checked) {
      return (
        <View style={styles.selectedDataContainer} >
          <Text>{item.name}</Text>
          <TouchableOpacity onPress={() => _removeSelectedValue(index)} ><Text>   X</Text></TouchableOpacity>
        </View>
      )
    }
    else {
      return null;
    }
  }
  return (
    <>
      <View
        style={[styles.container, dropdownBtnStyle]}>
        {dropdownVisibility || show != 0 ? (
          <View style={styles.flatlistView} >
            <FlatList
              data={allData}
              renderItem={_renderSelectedData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )
          : (
            <Text style={styles.textStyle}> --SELECT-- </Text>
          )
        }
        <TouchableOpacity
          onPress={() => setDropdownVisibility(!dropdownVisibility)}
          style={styles.dropdownBtn}
        >
          <Image
            style={styles.arrowIcon}
            source={dropdownVisibility ? up : down}
          />
        </TouchableOpacity>
      </View>
      <View>
        {dropdownVisibility && (
          <View style={[styles.openDropdown, dropdownDataStyle]}>
            <FlatList
              data={visibleData}
              renderItem={_renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default CustomDropdownCheckbox;
