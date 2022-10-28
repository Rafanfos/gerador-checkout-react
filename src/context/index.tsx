import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

export interface IContextData {
  serviceType: string;
  setServiceType: Dispatch<SetStateAction<string>>;
  activity: IServiceData[];
  setActivity: Dispatch<SetStateAction<IServiceData[]>>;
  currentDate: string;
  date: string;
  saveData: (data: IServiceData) => void;
}

interface IContextProps {
  children: ReactNode;
}

export interface IServiceData {
  dev?: string;
  obs?: string;
  service: string;
  id: string;
}

export const Context = createContext<IContextData>({} as IContextData);

const Providers = ({ children }: IContextProps) => {
  const [serviceType, setServiceType] = useState<string>("");
  const [isActivityNull, setIsActivityNull] = useState(true);
  const [activity, setActivity] = useState<IServiceData[]>([]);
  const [currentDate, setCurrentDate] = useState<string>("");

  const current = new Date();

  const date = current.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    setCurrentDate(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const dataCode = currentDate.replaceAll(" ", "").replaceAll("de", "");
    const history = localStorage.getItem(`@${dataCode}`);

    if (history) {
      setActivity(JSON.parse(history));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  useEffect(() => {
    const dataCode = currentDate.replaceAll(" ", "").replaceAll("de", "");

    if (isActivityNull) {
      setIsActivityNull(false);
    } else {
      localStorage.setItem(`@${dataCode}`, JSON.stringify(activity));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

  const saveData = (data: IServiceData) => {
    data.id = uuidv4();
    setActivity((oldActivities) => [...oldActivities, data]);
  };

  return (
    <Context.Provider
      value={{
        serviceType,
        setServiceType,
        activity,
        setActivity,
        currentDate,
        saveData,
        date,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Providers;
