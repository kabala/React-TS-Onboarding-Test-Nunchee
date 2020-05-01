import React, { FC, PropsWithChildren } from "react";
import useHelmet from "../hooks/useHelmet";
import { Helmet } from "react-helmet";

type Props = {
  contentTitle?: string | null;
};

const Meta: FC<PropsWithChildren<Props>> = ({
  children,
  contentTitle = null,
}) => {
  const pageTitle = useHelmet(contentTitle);

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
