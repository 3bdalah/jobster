import { DashBoard, Landing, Register, Error } from "./Pages/index.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo } from "./components/logo.tsx";
function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="" element={<DashBoard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
