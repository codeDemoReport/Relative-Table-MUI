import { fork, all } from "redux-saga/effects";
import dataSaga from "./homeSaga";

export default function* mySaga() {
  yield all([fork(dataSaga)]);
}
