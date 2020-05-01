import React, { FC, PropsWithChildren } from "react";
import { Header, Footer } from "../components";

type Props = {
  disableHeader?: boolean;
};

const DefaultLayout: FC<PropsWithChildren<Props>> = ({
  disableHeader,
  children,
}) => {
  return (
    <>
      {!disableHeader && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
