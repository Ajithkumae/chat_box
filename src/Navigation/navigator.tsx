import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BeforeLoginNavigator from './beforeLoginNavigator';
import AfterLoginNavigator from './afterLoginNavigator';
import * as storage from '../Service/AsyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import {setUserToken} from '../Redux/Action/LoginAction';
import {login} from '../Service/firebaseService';

const Navigator = () => {
  const dispatch = useDispatch();

  const {userToken} = useSelector(state => state.loginReducer);
  useEffect(() => {
    checkAuth();
  }, [userToken]);

  const checkAuth = async () => {
    try {
      const user: any = await storage.getItem('userToken');
      if (user !== null) {
        login(user);
        dispatch(setUserToken(user));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NavigationContainer>
      {userToken !== null ? <AfterLoginNavigator /> : <BeforeLoginNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
