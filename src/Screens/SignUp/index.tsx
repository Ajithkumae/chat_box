import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {password} from '../../../__mocks__/firebaseMock';
import InputText from '../../Components/InputText';
import {addUser} from '../../Service/firebaseService';
import {COLORS} from '../../Utils/theme';
import styles from './styles';
const SignIn = (props: any) => {
  const [userName, setUserName] = useState('');
  const [phNum, setPhNum] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to chat box</Text>
      <View style={styles.subContainer}>
        <View style={styles.imgView} />

        <InputText
          isFloatingText
          placeholder={'User Name'}
          value={userName}
          onChangeText={(text: any) => setUserName(text)}
          placeholderSty={COLORS.shadGreen}
          borderColor={styles.borderColor}
        />
        <InputText
          isFloatingText
          placeholder={'Enter Phone Number'}
          value={phNum}
          onChangeText={(text: any) => setPhNum(text)}
          placeholderSty={COLORS.shadGreen}
          borderColor={styles.borderColor}
        />
      </View>
      <TouchableOpacity
        onPress={() => addUser(userName, password)}
        style={styles.btn}>
        <Text style={styles.signUpBtn}>SignIn</Text>
      </TouchableOpacity>
      <View style={styles.conditionView}>
        <Text>Already an Register please </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('login')}>
          <Text style={styles.txtLoginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
