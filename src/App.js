import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Details from "./pages/Details"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path={'/'}exact>
          <MainPage /> 
        </Route>
        <Route path={'/details'} exact>
          <Details />
        </Route>
        <Route path={'/*'}>
          <div>404</div>
        </Route>
      </Switch>


    </div>
  );
}

export default App;
