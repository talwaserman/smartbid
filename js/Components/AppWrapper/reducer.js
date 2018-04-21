import * as CONST from './consts';

// const DEFAULT_STATE = {
//   userData: localStorage.getItem("seed_app_user")
// };

const DEFAULT_STATE = {
  userData: {}
};

const UserStatusReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CONST.USER_SIGN_IN:
      window.location = '/';
      return Object.assign({}, state, { userData: action.payload.email });
    case CONST.USER_REGISTRATION:
      localStorage.setItem("seed_app_user", action.payload.email);
      window.location = '/';
      return Object.assign({}, state, { userData: action.payload.email });
    case CONST.USER_SIGN_OUT:
      localStorage.setItem("seed_app_user", "");
      return Object.assign({}, state, { userData:'' });
    default:
      return state;
  }
};

export default UserStatusReducer;
