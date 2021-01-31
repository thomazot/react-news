import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import Home from "pages/Home";

const App = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  );
};

export default App;
