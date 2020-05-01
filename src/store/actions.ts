import { Content, FetchDataTypes } from "../interfaces";
import { GET_ITEMS, GET_CONTENT } from "../constantsTypes/appConstantsTypes";

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
