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
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import ComingSoon1 from "./pages/ComingSoon/ComingSoon1";
import ComingSoon2 from "./pages/ComingSoon/ComingSoon2";

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
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/comingsoon1" element={<ComingSoon1 />} />
          <Route path="/comingsoon2" element={<ComingSoon2 />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
