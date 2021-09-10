import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../Utils/theme';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modalView: {
        height: hp(80),
        width: wp(80),
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderRadius: 5,
        alignItems: "center",
    },
    modalText: {
        fontSize: 20,
        textAlign: "center"
    }
});