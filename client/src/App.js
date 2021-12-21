import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import InformationPage from "./components/InformationPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/info/:wallet" element={<InformationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
