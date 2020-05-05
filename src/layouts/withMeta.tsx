import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import Meta from "./Meta";
import { PageProps } from "../interfaces";

// import { RootState } from "../store/appReducer";

/**
 * Adds custom html tags inside <head> like "title" and "description"
 * using data from react-router-dom. It also connects to redux.
 *
 * @param PageComponent Page Component
 */
const withMeta = (PageComponent: FunctionComponent<PageProps>) => () => {
  const dispatch = useDispatch();

  return (
    <React.StrictMode>
      <Meta>
        <PageComponent dispatch={dispatch} />
      </Meta>
    </React.StrictMode>
  );
};

export default withMeta;
