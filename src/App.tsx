import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Account } from "./pages/Account";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
