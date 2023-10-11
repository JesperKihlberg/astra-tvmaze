import React from "react";
import { useRecoilValue } from "recoil";
import { showResultQuery } from "./ShowResultQuery";

import ShowPage from "../../ui/pages/ShowPage";

const ShowContainer: React.FC = () => {
  const show = useRecoilValue(showResultQuery);

  return <ShowPage show={show} />;
};

export default ShowContainer;
