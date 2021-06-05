import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import PageNotFound404 from "./components/PageNotFound404";
import Signup from "./components/signup";
import Signin from "./components/Singin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
//import userService from "./services/userService";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import AddProduct from "./components/AddProduct";
import ProductPage from "./components/ProductPage";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  useEffect(() => {
    //const user = userService.getCurrentUser();
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="container-fluid flex-fill">
        <Switch>
          <Route path="/PageNotFound404" component={PageNotFound404} />
          <Route path="/shoppingCart" exact component={ShoppingCart} />
          <Route path="/addproduct" exact component={AddProduct} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/about" exact component={About} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/item" component={ProductPage} />
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
