import "./App.css";

import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React Context API Example</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
