import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../Utils/theme';
const sliderWidth = Dimensions.get('window').width - wp('5%');
const sliderHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: sliderHeight - hp(9),
  },
  inViewPortContainer: {
    height: sliderWidth + hp(1),
    margin: 10,
    backgroundColor: 'red',
  },
  videoContainer: {
    borderColor: COLORS.gray,
    borderWidth: 0.6,
    marginBottom: wp('2%'),
    marginTop: 15,
  },
  imageView: {
    width: sliderWidth - wp(1),
    height: sliderWidth + hp(2),
  },
  paginationDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  paginationStyle: {
    paddingVertical: 1,
  },
});

export default styles;
