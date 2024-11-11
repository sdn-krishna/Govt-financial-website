
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Budget from "./components/Budget";
import Expenditure from "./components/Expenditure";
import Tax from "./components/Tax";
import Gfr from "./components/Gfr";

function App() {
  return (
    <div  >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/budget" element={<Budget/>} />
        <Route path="/expenditure" element={<Expenditure/>} />
        <Route path="/tax" element={<Tax/>} />
        <Route path="/gfr" element={<Gfr/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
