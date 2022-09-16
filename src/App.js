import { Routes, Route} from "react-router-dom";
import 'normalize.css';
import './assets/css/App.css';
import Home from "./components/pages/Home";
import Records from "./components/pages/Records";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
        
    </div>
  );
}

export default App;
