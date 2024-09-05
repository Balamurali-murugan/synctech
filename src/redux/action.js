export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';
export const FETCH_LOGIN_DETAILS = 'FETCH_LOGIN_DETAILS';
export const FETCH_LOGIN_DETAILS_SUCCESS = 'FETCH_LOGIN_DETAILS_SUCCESS';
export const FETCH_LOGIN_DETAILS_FAILURE = 'FETCH_LOGIN_DETAILS_FAILURE';
export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const showToast = (message) => ({
  type: SHOW_TOAST,
  payload: message,
});

export const hideToast = () => ({
  type: HIDE_TOAST,
});

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
export const fetchLoginDetails = (data) =>({
  type: FETCH_LOGIN_DETAILS,
  payload: data,
});

export const fetchLoginDetailsSuccess = (data)=>({
  type: FETCH_LOGIN_DETAILS_SUCCESS,
  payload: data,
});
export const fetchLoginDetailsFailure = (error) => ({
  type: FETCH_LOGIN_DETAILS_FAILURE,
  payload: error,
});
