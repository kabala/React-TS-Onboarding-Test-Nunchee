import React, { FC, PropsWithChildren } from "react";
import useHelmet from "../hooks/useHelmet";
import { Helmet } from "react-helmet";

const Meta: FC<PropsWithChildren<{}>> = ({ children }) => {
  const pageTitle = useHelmet("Super Peli");

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Meta;
