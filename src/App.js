import React , {useEffect} from "react";
import Header from "./Header";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Home from "./Home";
import { auth,onAuthStateChanged } from "./firebaseFile.js";
import './App.css';


function App() {
  const [{}, dispatch] = useStateValue();


useEffect(() => {
  // will only run once when the app component loads...

  onAuthStateChanged(auth,(authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);


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
             <Route exact path="/login" element={ 
             <>
              <Login />
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
