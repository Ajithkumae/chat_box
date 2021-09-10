import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import InputPassword from '../../Components/InputPassword';
import InputText from '../../Components/InputText';

const LoginScreen = (props: any) => {
  const [textValueOne, setTextValueOne] = useState('');
  const [textValueTwo, setTextValueTwo] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.loginView}>
        <TouchableOpacity
        //  onPress={() => login()}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => ForgotPassword()}
        >
          <Text style={styles.text}>ForgotPassword</Text>
        </TouchableOpacity>
      </View>
      <InputText
        isFloatingText
        placeholder={'Enter The UserName'}
        value={textValueOne}
        onChangeText={(text: any) => setTextValueOne(text)}
        otherTextInputProps={{maxLength: 5}}
        parentContainerStyle={styles.inputText}
        borderColor={styles.borderColor}
      />
      <InputPassword
        placeholder={'Enter The Password'}
        value={textValueTwo}
        onChangeText={(text: any) => setTextValueTwo(text)}
        parentContainerStyle={styles.inputText}
        borderColor={styles.borderColor}
      />
    </View>
  );
};

export default LoginScreen;
