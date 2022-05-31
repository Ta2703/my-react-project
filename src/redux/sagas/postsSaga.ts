import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  loadData,
  setPosts,
  setPost,
  loadPost,
} from "../reducers/postsReducer";
import { getPosts, getSinglePost } from "../api";

function* getPostsSaga() {
  const { data, status } = yield call(getPosts);
  if (status === 200) {
    yield put(setPosts(data.results));
  }
}

function* getSinglePostSaga(action: PayloadAction<string>) {
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) {
    yield put(setPost(data.results));
  }
}

export default function* postWatcher() {
  yield all([
    takeLatest(loadData, getPostsSaga),
    takeLatest(loadPost, getSinglePostSaga),
  ]);
}