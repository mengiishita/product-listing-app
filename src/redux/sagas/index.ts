import { spawn } from "redux-saga/effects";
import productsSaga from "./products-saga";

// exporting the root-saga
export default function* rootSaga() {
  yield spawn(productsSaga);
}
