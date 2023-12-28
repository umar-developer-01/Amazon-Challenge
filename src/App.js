import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Home from "./Home";
import './App.css';


function App() {
  return (
    <>
    <div className="app">
     <Router>
       <Routes>
         <Route exact path="/checkout" element={ 
             <>
              <Header/>
              <Checkout />
            </>
            } 
          />
         <Route exact path="/" element={ 
             <>
              <Header/>
              <Home />
             </>
            } 
          />
      </Routes>
    </Router>
    </div>
    </>
  
  );
}

export default App;
