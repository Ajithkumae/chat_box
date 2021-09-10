import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { COLORS } from '../../Utils/theme';

const Loader = (props: any) => {
  const { show } = props;
  if (!show) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.black} />
      </View>
    );
  }
};

export default Loader;
