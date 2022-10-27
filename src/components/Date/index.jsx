import { useEffect, useState } from "react";

const CurrentDate = () => {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const [currentDate, setCurrentDate] = useState();

  const current = new Date();
  const date = `${current.getDate()} de ${
    months[current.getMonth() - 1]
  } de ${current.getFullYear()}`;

  useEffect(() => {
    setCurrentDate(date);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="date">Hoje: {currentDate}</span>;
};

export default CurrentDate;
