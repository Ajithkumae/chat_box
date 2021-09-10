import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  loginView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
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
    borderColor: COLORS.red,
  },
  example: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
