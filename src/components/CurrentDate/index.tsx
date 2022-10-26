interface ICurrentDateProps {
  currentDate: string;
}

const CurrentDate = ({ currentDate }: ICurrentDateProps) => {
  return <span className="date">Hoje: {currentDate}</span>;
};

export default CurrentDate;
