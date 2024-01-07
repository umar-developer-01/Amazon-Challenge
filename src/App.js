import React , {useEffect} from "react";
import Header from "./Header";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Home from "./Home";
import Orders from "./Orders";
import { auth,onAuthStateChanged } from "./firebase.js";
import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{}, dispatch] = useStateValue();


useEffect(() => {
  // will only run once when the app component loads...

  onAuthStateChanged(auth,(authUser) => {
    
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
         <Route exact path="/orders" element={ 
             <>
              <Header />
              <Orders />
            </>
            } 
          />
             <Route exact path="/payment" element={ 
             <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
            } 
          />
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
