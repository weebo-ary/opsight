import './input.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/nav/nav"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet /> 
    </div>
  );
}

export default App;
