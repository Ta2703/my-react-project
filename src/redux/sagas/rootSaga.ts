import { all } from 'redux-saga/effects';
import authWatcher from "./authSaga";

function* postsWatcher() {
    
}

export default function* rootSaga() {
    yield all([authWatcher(), postsWatcher()]);
};