import {firestore} from '../__mocks__/firebaseMock';

jest.mock('@react-native-firebase/firestore', () => {
  const firestore = 'hello';
  return {
    firestore: jest.fn(() => firestore),
  };
});
jest.mock('@react-native-async-storage/async-storage', () => 'storage');
