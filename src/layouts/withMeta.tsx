import React from "react";
import { FunctionComponent } from "react";
import Meta from "./Meta";

/**
 * Adds custom html tags inside <head> like "title" and "description"
 * using data from react-router-dom.
 *
 * @param PageComponent Page Component
 */
const withMeta = (PageComponent: FunctionComponent) => () => (
  <Meta>
    <PageComponent />
  </Meta>
);

export default withMeta;
