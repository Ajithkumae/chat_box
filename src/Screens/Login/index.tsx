import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import InputPassword from '../../Components/InputPassword';
import InputText from '../../Components/InputText';
import {login} from '../../Service/firebaseService';
import {COLORS} from '../../Utils/theme';
import Loader from '../../Components/Loader';
import {useSelector} from 'react-redux';

const LoginScreen = (props: any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {loaderState} = useSelector(state => state.loaderReducer);

  const checkLogin = async () => {
    if (userName && password) {
      await login(userName, password);
    }
  };
  const Header = ({title}: any) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.headerTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <Loader show={loaderState} />
      <Header title={'Back'} />
      <View style={styles.container}>
        <View style={styles.loginView}>
          <Text style={styles.headerText}>Login To Start Chat</Text>
        </View>
        <InputText
          isFloatingText
          placeholder={'Enter The UserName'}
          value={userName}
          onChangeText={(text: any) => setUserName(text)}
          parentContainerStyle={styles.inputText}
          borderColor={styles.borderColor}
          placeholderSty={COLORS.shadGreen}
        />
        <InputPassword
          placeholder={'Enter The Password'}
          value={password}
          onChangeText={(text: any) => setPassword(text)}
          parentContainerStyle={styles.inputText}
          borderColor={styles.borderColor}
          placeholderSty={COLORS.shadGreen}
        />
        <TouchableOpacity
          onPress={() => checkLogin()}
          testID={'clickLogin'}
          style={styles.loginBtn}>
          <Text style={styles.text} testID={'Login'}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginScreen;
