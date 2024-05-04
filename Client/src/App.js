import "./App.css";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js"
import ForgotPassword from "./pages/ForgotPassword.js"
import ResetPassword from "./pages/ResetPassword.js"
import Register from "./pages/Register.js"
import Upload from "./pages/Upload.js"
import CartPage from "./pages/CartPage.js"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/ResetPassword" element={<ResetPassword/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Upload" element={<Upload/>} />
        <Route path="/CartPage" element={<CartPage/>} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
