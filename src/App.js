import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Details from "./pages/Details"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path={'/'}exact>
          <MainPage /> 
        </Route>
        <Route path={'/details/:drinkName'}>
          <Details />
        </Route>
        <Route path={'/*'}>
          <div>404</div>
        </Route>
      </Switch>
      <Footer/>


    </div>
  );
}

export default App;
