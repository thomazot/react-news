import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import Button from "./core/commons/Button";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Button>teste</Button>
    </ThemeProvider>
  );
}

export default App;
