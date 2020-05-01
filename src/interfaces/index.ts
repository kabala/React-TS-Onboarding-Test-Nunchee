import { GET_ITEMS, GET_CONTENT } from "../constantsTypes/appConstantsTypes";

export interface AppState {
  items: Content[];
  content: Content | null;
}

export interface Content {
  id: string;
  title: { original: string };
  createDate: string;
  description: string;
  images: {
    poster: string;
    backdrop: string;
    mediumh: string;
    thumbnails: string[];
  };
}

interface GetItemsAction {
  type: typeof GET_ITEMS;
  payload: Content[];
}

interface GetContentAction {
  type: typeof GET_CONTENT;
  payload: Content;
}

export type FetchDataTypes = GetItemsAction | GetContentAction;
