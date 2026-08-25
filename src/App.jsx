import { Routes,Route } from "react-router-dom";
import Header from "./components/header";
import MenuMobileBottom from "./components/menu-mobile-bottom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contactus";
import OrderNow from "./pages/ordernow";
function App() {
  return (
    <>
      <Header/>
      <MenuMobileBottom/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<ContactUs/>}></Route>
        <Route path="ordernow" element={<OrderNow/>}></Route>
      </Routes>
    </>
  )
}

export default App;
