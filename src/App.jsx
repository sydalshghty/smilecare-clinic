import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contactus";
import OrderNow from "./pages/ordernow";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="about" element={<Home/>}></Route>
      <Route path="contactus" element={<ContactUs/>}></Route>
      <Route path="ordernow" element={<OrderNow/>}></Route>
    </Routes>
  )
}

export default App;
