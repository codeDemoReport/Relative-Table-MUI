import axios from "axios";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import GlOBALTYPE from "../action/globalType";

const url = "http://localhost:3000";

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
    console.log(error);
  }
}

function* editCarSaga(action) {
  try {
    const { id, product_name, producer, description } = action.payload;

    yield axios.put(`${url}/cars/${id}`, {
      id,
      product_name,
      producer,
      description,
    });
    toast.success("Edit success!");
    yield put({ type: GlOBALTYPE.GETCARS, payload: {} });
  } catch (error) {
    console.log(error);
  }
}

function* editFoodSaga(action) {
  try {
    const { id, product_name, producer, description } = action.payload;
    yield axios.put(`${url}/food/${id}`, {
      id,
      product_name,
      producer,
      description,
    });
    toast.success("Edit success!");
    yield put({ type: GlOBALTYPE.GET_FOOD, payload: {} });
  } catch (error) {
    console.log(error);
  }
}

function* deleteCarSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`${url}/cars/${id}`);

    yield put({ type: GlOBALTYPE.GETCARS, payload: {} });
    toast.success("Delete success!");
  } catch (error) {
    console.log(error);
  }
}

function* deleteFoodSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`${url}/food/${id}`);

    toast.success("Delete success!");
    yield put({ type: GlOBALTYPE.GET_FOOD, payload: {} });
  } catch (error) {
    console.log(error);
  }
}

export default function* dataSaga() {
  yield takeEvery(GlOBALTYPE.GETCARS, getCarsSaga);
  yield takeEvery(GlOBALTYPE.GET_FOOD, getFoodSaga);
  yield takeEvery(GlOBALTYPE.EDIT_CAR, editCarSaga);
  yield takeEvery(GlOBALTYPE.EDIT_FOOD, editFoodSaga);
  yield takeEvery(GlOBALTYPE.DELETE_CAR, deleteCarSaga);
  yield takeEvery(GlOBALTYPE.DELETE_FOOD, deleteFoodSaga);
}
