import { Route } from "react-router-dom";
import Home from "./views/home";
import Projects from "./views/Projects";
import Roadmap from "./views/roadmap";
import MainLayout from "./layouts/main";
import Categories from "./views/Categories";
import "./index.css";

function App() {
  return (
    <MainLayout>
      <Route path="/" exact component={Home} />
      <Route path="/Gallery" exact component={Projects} /> 
      <Route path="/categories" exact component={Categories} />
     <Route path="/Roadmap" exact component={Roadmap} />
    </MainLayout>
  );
}

export default App;