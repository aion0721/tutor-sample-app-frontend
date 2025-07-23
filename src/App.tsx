import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Account } from "./pages/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
