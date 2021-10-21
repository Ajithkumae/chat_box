import {StyleSheet} from 'react-native';
import {COLORS} from '../../../Utils/theme';

const styles = StyleSheet.create({
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
    backgroundColor: COLORS.darkGreen,
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
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.darkBlue,
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
  msgView: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    width: '80%',
    borderRadius: 7,
    borderBottomRightRadius: 40,
  },
  txtMsg: {
    fontSize: 17,
    width: '80%',
    fontWeight: '400',
  },
  userMsgView: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0,
  },
  userTxtMsf: {
    textAlign: 'right',
  },
  sendMsgView: {
    flex: 1,
    color: COLORS.white,
    fontWeight: '500',
  },
  sendMsg: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  backBtn: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '400',
  },
  bkImg: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  imgTxt: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
