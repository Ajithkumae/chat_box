import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {loader} from '../../../Redux/Action/Loader';
import Loader from '../../../Components/Loader';

const ChatList = (props: any) => {
  const [padding, setPadding] = useState(0);
  const [messageList, setMessageList] = useState([]);
  const [messageText, setMessageText] = useState('');
  var db = firestore();
  const receiver = props.route.params.receiver;
  const dispatch = useDispatch();
  const {docUrl, userToken} = useSelector(state => state.loginReducer);
  const {loaderState} = useSelector(state => state.loaderReducer);

  useEffect(() => {
    const kwsl = Keyboard.addListener('keyboardWillShow', e =>
      setPadding(e.endCoordinates.height),
    );
    const kwhl = Keyboard.addListener('keyboardWillHide', () => setPadding(0));
    return () => {
      kwsl.remove();
      kwhl.remove();
    };
  }, [padding]);

  useEffect(() => {
    if (docUrl.path) {
      dispatch(loader(true));
      const collectionPath = docUrl.path.replace('/', '');
      db.collection(collectionPath)
        .orderBy('time', 'asc')
        .onSnapshot(doc => {
          const result: any = doc.docs.map(doc => doc.data());
          setMessageList(result);
          dispatch(loader(false));
        });
    }
  }, [db, docUrl.path]);
  const sendMessage = (msg: any) => {
    if (!msg) return;
    const collectionPath = docUrl.path.replace('/', '');
    db.collection(collectionPath)
      .add({
        message: msg,
        time: new Date(),
        user: userToken,
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
        setMessageText('');
      })
      .catch(error => {
        console.error('Error adding document: ', error);
        setMessageText('');
      });
  };
  const Header = ({title}: any) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.backBtn}>Back</Text>
        </TouchableOpacity>
        <View style={styles.headerImg}>
          <Text style={styles.imgTxt}>{receiver.slice(0, 1)}</Text>
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    );
  };
  const renderItem = ({item}: any) => {
    return (
      <View
        style={[styles.msgView, userToken === item.user && styles.userMsgView]}>
        <Text
          style={[styles.txtMsg, userToken === item.user && styles.userTxtMsf]}>
          {item.message}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.flex1}>
      <Header title={receiver} />
      <Loader show={loaderState} />
      <ImageBackground
        source={require('../../../Assets/Images/bkImage.jpg')}
        style={styles.bkImg}>
        <FlatList
          data={messageList}
          renderItem={renderItem}
          invertStickyHeaders
        />
        <View style={styles.fotter}>
          <TextInput
            style={styles.sendMsgView}
            onChangeText={val => setMessageText(val)}
            value={messageText}
          />
          <TouchableOpacity onPress={() => sendMessage(messageText)}>
            <Text style={styles.sendMsg}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: padding}} />
      </ImageBackground>
    </View>
  );
};

export default ChatList;
