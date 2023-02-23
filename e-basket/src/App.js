
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from '../src/Homepage/Footer'
function App() {
  return (
    <div >
      <Navbar/>
      <AllRoutes/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
