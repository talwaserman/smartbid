import UserStatusReducer from './reducer';
import * as actions from './actions';
import * as types from './consts';
describe('appWrapper', () => {
  it('USER_SIGN_IN-reducer', () => {
    expect(UserStatusReducer([], {
        type: types.USER_SIGN_IN,
        payload: {email: 'talwaserman@gmail.com'}
    })).toEqual({"userData": "talwaserman@gmail.com"})
  })
})