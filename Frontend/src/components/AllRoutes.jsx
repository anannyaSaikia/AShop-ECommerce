import Home from "../pages/Home"
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Login from "../pages/Login";

const AllRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
)

export default AllRoutes