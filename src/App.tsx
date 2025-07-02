import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QRCodeGenerator as HomePage } from "./components/QRCodeGenerator"
import { NavBar } from "./components/NavBar"
import DocsPage from "./components/DocsPage";
import { NotFoundPage } from "./components/NotFoundPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
