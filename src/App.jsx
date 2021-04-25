import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import PageNotFound404 from "./components/PageNotFound404";
import Form from "./components/common/Form";
import Signup from "./components/signup";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="container-fluid flex-fill">
        <Switch>
          <Route path="/PageNotFound404" component={PageNotFound404} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Redirect to="/PageNotFound404" />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
