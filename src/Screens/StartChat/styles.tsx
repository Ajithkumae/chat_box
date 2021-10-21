import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  tabView: {
    backgroundColor: COLORS.red,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
  },
  fotter: {
    backgroundColor: COLORS.red,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '3%',
    borderRadius: 22,
    paddingHorizontal: '6%',
    marginBottom: 10,
  },
  flex1: {
    flex: 1,
  },
  header: {
    height: 60,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: '4%',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgTxt: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '600',
  },
  headerText: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700',
  },
  contactTxt: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 17,
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.lightGreen,
    margin: 10,
    borderRadius: 8,
  },
  bkImg: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  contactContainer: {
    marginTop: 25,
  },
});

export default styles;
