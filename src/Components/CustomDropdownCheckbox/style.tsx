import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: '85%',
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignSelf: 'center'
  },
  openDropdown: {
    width: '85%',
    height: 200,
    position: 'absolute',
    zIndex: 1,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    borderRadius: 1,
    borderColor: COLORS.sky,
    alignSelf: 'center'
  },
  arrowIcon: {
    width: 10,
    height: 10,
  },
  dropdownItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  tickContainer: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: COLORS.sky,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  tickIcon: {
    width: 9,
    height: 9,
  },
  textInput: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.sky
  },
  textStyle: {
    marginVertical: 15,
  },
  selectedDataContainer: {
    backgroundColor: COLORS.lightBtn,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  flatlistView: {
    height: 30,
    width: '85%'
  },
  dropdownBtn: {
    width: '15%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkText: {
    fontSize: 15
  }
});

export default styles;
