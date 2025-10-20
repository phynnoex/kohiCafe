
import { BrowserRouter, Outlet, Route,  Routes } from "react-router-dom"
import Home from "./pages/home";
import Menu from "./pages/menu";
import Navbar from "./layout/navbar";
import Contact from "./pages/contact";
import Footer from "./layout/footer";

import { useModal } from "./modalContext";

function App() {

  //context api to store the state of modal
  const { modalOpen } = useModal();

  return (
    <BrowserRouter>
      <main style={modalOpen == true ? {overflow: "hidden"} : {overflow: "auto"}}>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
        <Outlet/>
        <Footer/>
      </main>
    </BrowserRouter>
  );
}

export default App;
