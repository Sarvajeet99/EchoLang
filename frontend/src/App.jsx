import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Translator from "./pages/Translator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/translator" element={<Translator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;