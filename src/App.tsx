import "./App.css";
import Home from "./pages/Home";
import CalculateBudget from "./pages/CalculateBudget";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App(): JSX.Element {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculate-budget' element={<CalculateBudget />} />
      </Routes>
    </div>
  );
}
