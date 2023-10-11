import React from "react";
import "./App.css";

import { RecoilRoot } from "recoil";
import CssVariables from "./CssVariables";
import SearchInputContainer from "./components/SearchInput/SearchInputContainer";
import { Header } from "./ui/organisms/Header";
import { RecoilURLSyncJSON } from "recoil-sync";
import SearchPageContainer from "./components/SearchPage/SearchPageContainer";
import ShowPageContainer from "./components/ShowPage/ShowPageContainer";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <RecoilURLSyncJSON location={{ part: "queryParams" }}>
        <CssVariables>
          <div className="root">
            <Header>
              <SearchInputContainer />
            </Header>
            <div className="container">
              <SearchPageContainer />
              <ShowPageContainer />
            </div>
          </div>
        </CssVariables>
      </RecoilURLSyncJSON>
    </RecoilRoot>
  );
};

export default App;
