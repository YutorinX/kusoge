import React from "react";
import "./App.scss";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PenFactory from "./components/PenFactory";

import theme from "./components/theme";

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <p></p>
      <div className="App">
        <header className="App-header"></header>
        <PenFactory />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
