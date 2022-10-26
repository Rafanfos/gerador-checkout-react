import { IServiceData } from "../../context";
import { StyleActivity } from "./styles";
import remove from "../../assets/remove.png";

export interface IServiceListProps {
  activity: IServiceData[];
}

const ServicesList = ({ activity }: IServiceListProps) => {
  return (
    <StyleActivity>
      {activity.map(({ dev, obs, service }: IServiceData) => {
        return (
          <li>
            <h4>{dev}</h4>
            <span>{obs ? obs : "N/A"}</span>
            <span>{service}</span>
            <img src={remove} alt="remove" />
          </li>
        );
      })}
    </StyleActivity>
  );
};

export default ServicesList;
