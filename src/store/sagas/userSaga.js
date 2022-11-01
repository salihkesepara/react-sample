import { takeEvery, put, fork } from 'redux-saga/effects'
import * as userActions from 'src/store/actions/userActions'
// import { showSnackMessage } from 'src/store/actions/layoutActions'
import { toast } from 'react-toastify'
// import * as api from '../../api/userApi'

function* getUserInfo(action) {
  const user = {
    token: '1234',
    user: {
      id: '123',
      name: 'salih',
      roles: [2001, 5150]
    }
  }

  try {
    // const { data } = yield call(api.getUserInformation)
    // yield put(userActions.getUserInfoSuccess(data || undefined))
    localStorage.setItem('auth', JSON.stringify(user))
    action.navigate()
  } catch (error) {
    yield put(userActions.getUserInfoFailure())
    // yield put(showSnackMessage({ message: error.message, variant: 'error' }))
    toast(error.message, { type: toast.TYPE.ERROR })
  }
}

function* watchUserInfo() {
  yield takeEvery(userActions.Types.GET_USER_INFO_REQUEST, getUserInfo)
}

const userSagas = [fork(watchUserInfo)]

export default userSagas
