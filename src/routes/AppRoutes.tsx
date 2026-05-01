import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import Vault from "../pages/Vault";
import WriteRoom from "../pages/WriteRoom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="/vault" element={<Vault />} />
      <Route path="/write" element={<WriteRoom />} />
    </Routes>
  );
};

export default AppRoutes;