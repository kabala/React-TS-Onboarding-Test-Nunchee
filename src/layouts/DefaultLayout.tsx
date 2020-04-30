import React, { useState, FC, PropsWithChildren } from "react";
import Header from "../components/organisms/Header";

const DefaultLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
