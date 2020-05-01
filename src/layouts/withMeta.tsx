import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Meta from "./Meta";
import { RootState } from "../store/appReducer";

/**
 * Adds custom html tags inside <head> like "title" and "description"
 * using data from react-router-dom. It also connects to redux.
 *
 * @param PageComponent Page Component
 */
const withMeta = (PageComponent: FunctionComponent) => () => {
  const content = useSelector((state: RootState) => state.content);

  console.log("content", content);

  return (
    <React.StrictMode>
      <Meta>
        <PageComponent />
      </Meta>
    </React.StrictMode>
  );
};

export default withMeta;
