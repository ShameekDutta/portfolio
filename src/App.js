import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import AddProject from "./components/AddProject";
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/write-a-recommendation"
            component={WriteRecommendation}
          />
          <Route exact path="/allprojects" component={AllProjects} />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/project/:id" component={AllProjects} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
