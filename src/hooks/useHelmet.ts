import { useRouteMatch } from "react-router-dom";
import { isEmpty } from "lodash-es";
import { Paths } from "../interfaces/enums";
import appConstants from "../constants/appConstants";

export default function useHelmet(addToTitle: string) {
  const { path, params } = useRouteMatch();

  // if only add dynamic title if Content Page is detected
  if (isEmpty(params)) {
    const pageTitle = Object.entries(Paths).find(
      (enumPath) => enumPath[1] === path
    );
    return pageTitle ? pageTitle[0] : appConstants.NUNCHEE;
  }

  return `${addToTitle} | ${appConstants.NUNCHEE}`;
}
