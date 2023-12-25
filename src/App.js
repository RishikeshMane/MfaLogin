import "./App.css";
import LoginView from "./components/view/LoginView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaceRecognation from "./components/view/FaceRecognation";
import LoginSuccess from "./components/view/LoginSuccess";
import Loginfail from "./components/view/Loginfail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginView />} />
        <Route path="/face" element={<FaceRecognation />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/loginfail" element={<Loginfail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
