import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { CheckoutCode } from "../pages/CheckoutCode";
const RoutesMain = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/checkout"} element={<CheckoutCode />} />
    </Routes>
  );
};

export default RoutesMain;
