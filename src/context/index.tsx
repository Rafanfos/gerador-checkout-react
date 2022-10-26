import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export interface IContextData {
  serviceType: string;
  setServiceType: Dispatch<SetStateAction<string>>;
  activity: IServiceData[];
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
}

export const Context = createContext<IContextData>({} as IContextData);

const Providers = ({ children }: IContextProps) => {
  const [serviceType, setServiceType] = useState<string>("");
  const [activity, setActivity] = useState<IServiceData[]>([]);
  const [currentDate, setCurrentDate] = useState<string>("");

  const current = new Date();

  const date = current.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    const dataCode = currentDate.split(" ").join("");
    setActivity(JSON.parse(localStorage.getItem(`@${dataCode}`) || ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  useEffect(() => {
    const dataCode = currentDate.split(" ").join("");
    if (activity.length > 0) {
      localStorage.setItem(`@${dataCode}`, JSON.stringify(activity));
    }
  }, [activity, currentDate]);

  useEffect(() => {
    setCurrentDate(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveData = (data: IServiceData) => {
    setActivity((oldActivities) => [...oldActivities, data]);
  };

  return (
    <Context.Provider
      value={{
        serviceType,
        setServiceType,
        activity,
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
