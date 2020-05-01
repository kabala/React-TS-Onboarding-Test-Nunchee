import { AppState, FetchDataTypes } from "../interfaces";
import { GET_ITEMS, GET_CONTENT } from "../constantsTypes/appConstantsTypes";

const initialState: AppState = {
  items: [],
  content: null,
};

export default function rootReducer(
  state = initialState,
  action: FetchDataTypes
): AppState {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof rootReducer>;
