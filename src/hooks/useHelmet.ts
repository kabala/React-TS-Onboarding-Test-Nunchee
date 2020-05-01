import { useRouteMatch } from "react-router-dom";
import { isEmpty } from "lodash-es";
import { Paths } from "../interfaces/enums";
import { NUNCHEE } from "../constantsTypes/appConstantsTypes";

export default function useHelmet(addToTitle: string | null) {
  const { path, params } = useRouteMatch();

  //  only add dynamic title if Content Page is detected
  if (isEmpty(params)) {
    const pageTitle = Object.entries(Paths).find(
      (enumPath) => enumPath[1] === path
    );
    return pageTitle ? pageTitle[0] : NUNCHEE;
  }

  return `${addToTitle} | ${NUNCHEE}`;
}
