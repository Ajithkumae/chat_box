import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  openDropdown: {
    width: '85%',
    height: 100,
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
  select: {
    paddingVertical: 7
  }
});

export default styles;
