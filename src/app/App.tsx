import { useTheme } from "app/provider/ThemeProvider";

import "./styles/index.scss";
import { classNames } from "shared/lib";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>TOGGLE</button>
      <AppRouter /> 
    </div>  
  );
};

export default App;
