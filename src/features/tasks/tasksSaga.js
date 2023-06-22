import {
  takeLatest,
  call,
  put,
  takeEvery,
  select,
  delay,
  throttle,
} from "redux-saga/effects";

import {
  fetchExampleTasks,
  selectTasks,
  setTasks,
  toggleFetchStatus,
} from "./tasksSlice";

import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield put(toggleFetchStatus());
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(toggleFetchStatus());
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield throttle(1000, fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
