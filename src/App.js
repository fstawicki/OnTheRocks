import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import DrinksContext from "./context/drinks-context";
import { useState } from "react";
import Search from "./components/Search";

function App() {

  const [ctx, setCtx] = useState([]);
  
  return (
    <DrinksContext.Provider value={[ctx,setCtx]}>
    <div className="App">
      <Navbar />
      <Search />
      <MainPage /> 
    </div>
    </DrinksContext.Provider>
  );
}

export default App;
