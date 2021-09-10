import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundVisible,
  },
  sheet: {
    borderRadius: 20,
    height: '80%',
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
  },
});

export default styles;
