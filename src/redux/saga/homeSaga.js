import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import GlOBALTYPE from "../action/globalType";

const url = "http://localhost:3001";

function* getCarsSaga(action) {
  const res = yield axios.get(`${url}/cars`);

  yield put({
    type: GlOBALTYPE.GET_CARS_SUCCESS,
    payload: res.data,
  });
}

function* getFoodSaga(action) {
  try {
    const res = yield axios.get(`${url}/food`);
  
  yield put({
    type: GlOBALTYPE.GET_FOOD_SUCCESS,
    payload: res.data,
  });
  } catch (error) {
    console.log(error)
  }
  
}

export default function* dataSaga() {
  yield takeEvery(GlOBALTYPE.GETCARS, getCarsSaga);
  yield takeEvery(GlOBALTYPE.GET_FOOD, getFoodSaga)
}
