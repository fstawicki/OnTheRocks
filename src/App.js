import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Details from "./pages/Details"
import Footer from "./components/Footer";
import DrinksContext from "./context/drinks-context";
import { useState } from "react";
import Search from "./components/Search";

function App() {

  const [drinksArray, setDrinksArray] = useState([]);

  return (
    <DrinksContext.Provider value={[drinksArray,setDrinksArray]}>
    <div className="App">
      <Navbar />
      <Search />

      <Switch>
        <Route path={'/'}exact>
          <MainPage /> 
        </Route>
        <Route path={'/details/:drinkID'}>
          <Details />
        </Route>
        <Route path={'/*'}>
          <div>404</div>
        </Route>
      </Switch>
      <Footer/>


    </div>
    </DrinksContext.Provider>
  );
}

export default App;
