import './input.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/nav/nav"
import Footer from "./components/footer"

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen transition duration-500">
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
}

export default App;
