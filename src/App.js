import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Topbar></Topbar>
      <div className="container">        
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductList />} />
          <Route path="/newproduct" element={<ProductList />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
