import { useState } from "react";
import { ThemeContext } from "./contexts";
import { QuoteBlock } from "./components/QuoteBlock/QuoteBlock";
import dummy from "./stories/dummy";
import "./App.css";

type theme = "A" | "B";

function App() {
  const [theme, setTheme] = useState<theme>("A");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <QuoteBlock brand={theme} data={dummy} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
