import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: '6%',
    backgroundColor: COLORS.shadGreen,
  },
  borderColor: {
    borderColor: COLORS.white,
  },
  titleText: {
    fontSize: 15,
    color: COLORS.white,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  imgView: {
    height: 130,
    width: 130,
    borderRadius: 70,
    marginBottom: 20,
  },
  btn: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  signUpBtn: {
    fontSize: 19,
  },
  conditionView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  txtLoginBtn: {
    color: COLORS.blue,
  },
});
