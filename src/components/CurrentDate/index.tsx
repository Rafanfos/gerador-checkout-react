import { useContext } from "react";
import { Context } from "../../context";

const CurrentDate = () => {
  const { currentDate } = useContext(Context);

  return <span className="date">Hoje: {currentDate}</span>;
};

export default CurrentDate;
