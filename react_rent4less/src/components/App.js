import React from "react";
import Router from './Router'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Router} />
    </BrowserRouter>
  )
}
export default App;
