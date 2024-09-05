import { SHOW_LOADER, HIDE_LOADER, SHOW_TOAST, HIDE_TOAST } from '../action';

const initialState = {
  loading: false,
  toast: {
    visible: false,
    message: '',
  },
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case SHOW_TOAST:
      return {
        ...state,
        toast: {
          visible: true,
          message: action.payload,
        },
      };
    case HIDE_TOAST:
      return {
        ...state,
        toast: {
          visible: false,
          message: '',
        },
      };
    default:
      return state;
  }
};
