
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from "./Mycompanent/Header";
import Footer from "./Mycompanent/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";


function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>

     
    </>

  );
}

export default App;
