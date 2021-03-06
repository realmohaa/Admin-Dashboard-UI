import Navbar from "./components/Navbar";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import User from "./pages/User";
import AddUser from "./pages/AddUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";

const Container = styled.div`
  display: flex;
  margin-top: 20px
`

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UsersList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/addUser" element={<AddUser />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/addProduct" element={<AddProduct />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
