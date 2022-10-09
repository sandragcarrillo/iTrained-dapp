import { Route } from "react-router-dom";
import Home from "./views/home";
import Projects from "./views/Projects";
import MainLayout from "./layouts/main";
import Categories from "./views/Categories";
import "./index.css";

function App() {
  return (
    <MainLayout>
      <Route path="/" exact component={Home} />
      <Route path="/Projects" exact component={Projects} /> 
      <Route path="/categories" exact component={Categories} />
    </MainLayout>
  );
}

export default App;