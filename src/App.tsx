import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import Button from "./core/commons/Button";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Button>Teste</Button>
    </ThemeProvider>
  );
};

export default App;
