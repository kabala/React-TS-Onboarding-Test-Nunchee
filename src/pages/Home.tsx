import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPlaylist } from "../store/actions";
import api from "../api/apiService";
import withMeta from "../layouts/withMeta";
import { PageProps } from "../interfaces";

const HomePage: FC<PageProps> = ({ dispatch }) => {
  useEffect(() => {
    api.call("ott/contents/details/5b8455468f05ba000f2665e0");
  }, [dispatch]);

  return <main>super home</main>;
};

export default withMeta(HomePage);
