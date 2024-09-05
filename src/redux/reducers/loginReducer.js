import { FETCH_LOGIN_DETAILS, FETCH_LOGIN_DETAILS_SUCCESS, FETCH_LOGIN_DETAILS_FAILURE } from '../action';

const initialState = {
  loading: false,
  loginResponse: {},
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOGIN_DETAILS_SUCCESS:
      console.log(action);
      return {
        ...state,
        loading: false,
        loginResponse: action.payload,
      };
    case FETCH_LOGIN_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default loginReducer;
