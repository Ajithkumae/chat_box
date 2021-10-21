import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.shadGreen,
  },
  loginView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  headerText: {
    fontSize: 18,
    color: COLORS.white,
  },
  inputText: {
    color: COLORS.gray,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 15,
  },
  textInputContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 30,
    marginVertical: '3%',
    lineHeight: 21,
    borderRadius: 5,
    backgroundColor: COLORS.gray,
    fontSize: 18,
  },
  borderColor: {
    borderColor: COLORS.white,
  },
  example: {
    alignSelf: 'center',
    fontSize: 20,
  },
  header: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.darkBlue,
    paddingLeft: 20,
  },
  loginBtn: {
    width: '40%',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  headerTitle: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 10,
  },
});
