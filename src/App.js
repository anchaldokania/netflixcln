// src/App.js
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/settings" Component={Settings} />
      </Routes>
    </Router>
  );
}

export default App;
