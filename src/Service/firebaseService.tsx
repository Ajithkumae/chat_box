import firestore from '@react-native-firebase/firestore';
import {loader} from '../Redux/Action/Loader';
import {loginResponse, setUserToken} from '../Redux/Action/LoginAction';
import {store} from '../Redux/store';
import * as storage from '../Service/AsyncStorage';

export const addUser = (userName: string, password: string) => {
  store.dispatch(loader(true));
  if (userName && password) {
    firestore()
      .collection('users')
      .doc(userName)
      .set({
        name: userName,
        password: password,
      })
      .then(() => {
        let loginData = login(userName, password);
        console.log('Document written with ID: ', loginData);
        store.dispatch(loader(true));
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  } else {
    setTimeout(() => {
      store.dispatch(loader(false));
    }, 5000);
  }
};

export const login = async (userName: string, password: string) => {
  store.dispatch(loader(true));
  let data;
  firestore()
    .collection('users')
    .doc(userName)
    .get()
    .then(async querySnapshot => {
      const result: any = querySnapshot.data();
      data = result;
      console.log('result', result);
      if (userName === result.name && password === result.password) {
        console.log('enter');

        await storage.setItem('userToken', userName);
        store.dispatch(
          loginResponse({
            name: result.name,
            loggedInTime: new Date(),
            userStatus: 'Online',
            loginStatus: 'Logged in',
            userName,
          }),
        );
        store.dispatch(setUserToken(result.name));
        store.dispatch(loader(false));
      } else {
        setTimeout(() => {
          store.dispatch(loader(false));
        }, 5000);
      }

      return result;
    })
    .catch(err => console.log('Oops ', err));

  return data;
};
