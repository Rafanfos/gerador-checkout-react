import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
