import { Link } from "react-router-dom";

import { useTheme } from "app/provider/ThemeProvider";

import "./styles/index.scss";
import { classNames } from "shared/lib";
import { AppRouter } from "./provider/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>AboutPage</Link>
      <AppRouter /> 
    </div>  
  );
};

export default App;
