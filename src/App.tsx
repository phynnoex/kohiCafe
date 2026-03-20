import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Navbar from "./layout/navbar";
import Contact from "./pages/contact";
import Footer from "./layout/footer";

import { useModal } from "./modalContext";

function App() {
  const { modalOpen } = useModal();

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: modalOpen ? "hidden" : "auto",
        }}
      >
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/menu" Component={Menu} />
            <Route path="/contact" Component={Contact} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
