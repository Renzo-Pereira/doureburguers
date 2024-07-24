import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/mian";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./components/productos/productos";
import Promos from "./components/promos/promos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/promos" element={<Promos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
