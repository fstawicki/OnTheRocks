import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import DrinksContext from "./context/drinks-context";
import { useState } from "react";
import Search from "./components/Search";

function App() {

  const [ctx, setCtx] = useState([]);
  
  return (
    <DrinksContext.Provider value={[ctx,setCtx]}>
    <div className="App">
      <Navbar />
      

      <Switch>
        <Route path={'/'}exact>
          <MainPage /> 
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
