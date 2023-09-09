
import "./styles/_reset.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

import Homepage from "./components/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





const App = () => {

  return (
    <>
      <Router>
        <AppHeader/>

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <AppFooter />
      </Router>

    </>
  );
};

export default App;
