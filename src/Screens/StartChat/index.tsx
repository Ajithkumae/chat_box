import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {createDocUrl} from '../../Redux/Action/LoginAction';
import {loader} from '../../Redux/Action/Loader';
import Loader from '../../Components/Loader';

const StartChat = (props: any) => {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();

  var db = firestore();

  useEffect(() => {
    dispatch(loader(true));

    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        const result: any = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserList(result);
        dispatch(loader(false));
      })
      .catch(err => console.log('Oops ', err));
  }, [db]);
  const {userData, userToken} = useSelector(state => state.loginReducer);
  const {loaderState} = useSelector(state => state.loaderReducer);

  const setChatRoom = (receiver: any) => {
    db.collection('users')
      .doc(userData?.name)
      .collection('conversations')
      .doc(receiver.id)
      .get()
      .then(querySnapshot => {
        const receiverMessageFields = querySnapshot.data();
        if (querySnapshot.exists && receiverMessageFields?.reference) {
          dispatch(
            createDocUrl({
              path: receiverMessageFields.url,
            }),
          );
          props.navigation.navigate('chatList', {receiver: receiver.id});
        } else {
          const docURL =
            '/users/' +
            userData?.name +
            '/conversations/' +
            receiver.id +
            '/messages';
          db.collection('users')
            .doc(receiver.id)
            .collection('conversations')
            .doc(userData?.name)
            .set({
              reference: true,
              url: docURL,
            });
          dispatch(
            createDocUrl({
              path: docURL,
            }),
          );
          props.navigation.navigate('chatList', {receiver: receiver.id});
        }
      })
      .catch(err => console.log('err ', err));
    dispatch(
      createDocUrl({
        name: receiver.name,
        userName: receiver.name,
        userID: receiver.id,
      }),
    );
    props.navigation.navigate('chatList', {receiver: receiver.id});
  };

  const Header = ({title}: any) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    );
  };
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.contactView}
        onPress={() => setChatRoom(item)}>
        <View style={styles.headerImg}>
          <Text style={styles.imgTxt}>{item.name.slice(0, 1)}</Text>
        </View>
        <Text style={styles.contactTxt}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Contacts" />
      <Loader show={loaderState} />
      <ImageBackground
        source={require('../../Assets/Images/bkImage.jpg')}
        style={styles.bkImg}>
        <FlatList
          style={styles.contactContainer}
          data={userList.filter((el: any) => el.id !== userToken)}
          renderItem={renderItem}
        />
      </ImageBackground>
    </View>
  );
};

export default StartChat;
