import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container">        
        <Sidebar></Sidebar>
        <Home />
      </div>
    </div>
  );
}

export default App;
