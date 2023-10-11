import React from "react";
import ShowContainer from "../Show/ShowContainer";
import { useRecoilValue } from "recoil";
import { showIdAtom } from "../Show/ShowIdAtom";

const ShowPageContainer: React.FC = () => {
  const showId = useRecoilValue(showIdAtom);
  return (
    showId && (
      <React.Suspense fallback={<div>loading...</div>}>
        <ShowContainer />
      </React.Suspense>
    )
  );
};

export default ShowPageContainer;
