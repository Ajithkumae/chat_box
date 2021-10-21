import {login} from '../src/Service/firebaseService';
import {userName} from '../__mocks__/firebaseMock';

describe('Check Firebase Services', () => {
  it('check login', async () => {
    expect(login(userName));
  });
});
