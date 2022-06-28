import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  loadData,
  setPosts,
  setPost,
  loadPost,
  setAllPostsLoading,
  setSinglePostLoading,
  setTotalAllPostsCount,
  addPost,
  setMyPosts,
  loadMyPosts,
  setTotalMyPostsCount,
} from "../reducers/postsReducer";
import { getPosts, getSinglePost, addPostApi, getMyPostsApi } from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { callCheckingAuth } from "./callCheckingAuth";

function* getPostsSaga(action: any) {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield call(getPosts, action.payload);

  if (status === 200) {
    yield put(setPosts(data.results));
    yield put(setTotalAllPostsCount(data.count));
  }
  yield put(setAllPostsLoading(false));
}

function* getSinglePostSaga(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status } = yield call(getSinglePost, action.payload);
  if (status === 200) {
    yield put(setPost(data));
  }
  yield put(setSinglePostLoading(false));
}

function* addPostSaga(action: any) {
  const { data, status } = yield callCheckingAuth({ api: addPostApi, rest: [action.payload] });
}

function* getMyPostsSaga(action: any) {
  yield put(setAllPostsLoading(true));
  const { data, status } = yield callCheckingAuth(
      { api: getMyPostsApi, rest: [action.payload] }  );
  if (status === 200) {
    yield put(setMyPosts(data));
    yield put(setTotalMyPostsCount(data.count));
  }
  yield put(setAllPostsLoading(false));
}
export default function* postsWatcher() {
  yield all([
    takeLatest(loadData, getPostsSaga),
    takeLatest(loadPost, getSinglePostSaga),
    takeLatest(addPost, addPostSaga),
    takeLatest(loadMyPosts, getMyPostsSaga),
  ]);
};


// import { all, takeLatest, put, call } from "redux-saga/effects";
// import { PayloadAction } from "@reduxjs/toolkit";

// import {
//   loadData,
//   setPosts,
//   setPost,
//   loadPost,
// } from "../reducers/postsReducer";
// import { getPosts, getSinglePost } from "../api";

// function* getPostsSaga() {
//   const { data, status } = yield call(getPosts);
//   if (status === 200) {
//     yield put(setPosts(data.results));
//   }
// }

// function* getSinglePostSaga(action: PayloadAction<string>) {
//   const { data, status } = yield call(getSinglePost, action.payload);
//   if (status === 200) {
//     yield put(setPost(data.results));
//   }
// }

// export default function* postWatcher() {
//   yield all([
//     takeLatest(loadData, getPostsSaga),
//     takeLatest(loadPost, getSinglePostSaga),
//   ]);
// }