import React from "react";
import { createSession } from "./Backend/API";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Results from "./Components/Results";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Search />
        <Routes>
          <Route path="/search/:searchresult" element={Search} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
