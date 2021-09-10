import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 3,
        borderWidth: 1,
        marginVertical: 10,
        flexDirection: 'row',
    },
    textInput: {
        fontSize: 15,
        color: COLORS.black,
        paddingStart: 10,
        paddingVertical: 15,
        width: '85%'
    },
    titleStyles: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        paddingHorizontal: 3,
        paddingRight: 4,
    },
    onEdit: {
        borderColor: COLORS.blue,
    },
    showPassword: {
        alignSelf: 'center',
    }
});

const titleActiveSize = 11.5,
    titleInActiveSize = 15;

export const returnAnimatedTitleStyles = (
    position,
    isFieldActive,
    activeBorderColor,
    value,
) => {
    return {
        top: position.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 0],
        }),
        fontSize: isFieldActive || value ? titleActiveSize : titleInActiveSize,
        color: activeBorderColor,
        left: 8,
    };
};

export default styles;
