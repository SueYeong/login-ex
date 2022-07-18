import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
