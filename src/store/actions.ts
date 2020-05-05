import { Content, FetchDataTypes } from "../interfaces";
import { GET_ITEMS, GET_CONTENT } from "../constantsTypes/appConstantsTypes";
import api from "../api/apiService";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

export function getItems(items: Content[]): FetchDataTypes {
  return {
    type: GET_ITEMS,
    payload: items,
  };
}

export function getContent(content: Content): FetchDataTypes {
  return {
    type: GET_CONTENT,
    payload: content,
  };
}

export function getPlaylist() {
  const request = api.call("ott/contents/details/5b8455468f05ba000f2665e0");

  return request;
}
