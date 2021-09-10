import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    width: '60%',
    height: 60,
    alignSelf: 'center',
    paddingHorizontal: '6%',
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  leftAling: {
    flex: 1,
    left: '2%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginHorizontal: 10,
  },
  rightAling: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    width: '10%',
    right: '4%',
  },
  iconSize: {
    height: 20,
    width: 20,
  },
});

export default styles;
