import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { showLoader, hideLoader, showToast, FETCH_LOGIN_DETAILS, fetchLoginDetailsSuccess } from './action';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from './action';


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 2000000,
  headers: {
    "Content-Type": "application/json",
  },
});


// Saga to handle the API call
function* fetchLoginDetailsSaga(action) {
  try {
    // Start the loader
    yield put(showLoader());

    // console.log(process.env.REACT_APP_API_URL);
    // https://dummyjson.com/users
    //   Call above api to see user id and password for multiple users
    // Call the API using axios
    const response = yield call(apiClient.post, "/auth/login",
            action.payload);

    // Dispatch success action with the data
    yield put(fetchLoginDetailsSuccess(response.data));

    // Show success toast
    yield put(showToast('Data fetched successfully!'));
  } catch (error) {
    // Dispatch failure action
    yield put(fetchDataFailure(error.message));

    // Show error toast
    yield put(showToast('Failed to fetch data.'));
  } finally {
    // Hide the loader after API call completes
    yield put(hideLoader());
  }
}

// Watcher saga to listen for the action
// function* watchFetchData() {
//   yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
// }

export default function* rootSaga() {
  yield takeLatest(FETCH_LOGIN_DETAILS, fetchLoginDetailsSaga);
  // yield all([
  //   watchFetchData(),
  // ]);
}
