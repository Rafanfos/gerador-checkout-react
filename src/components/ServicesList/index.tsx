import { Context } from "../../context";
import { StyleActivity } from "./styles";
import remove from "../../assets/remove.png";
import { useContext } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const ServicesList = () => {
  const { activity, setActivity } = useContext(Context);

  const removeItem = (itemId: string) => {
    setActivity(activity.filter(({ id }) => id !== itemId));
    toast.warning("Registro apagado!");
  };

  return (
    <StyleActivity>
      <ul>
        <AnimatePresence>
          {activity.map(({ dev, obs, service, id }) => {
            return (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [-500, 0] }}
                transition={{ ease: "easeOut", duration: 1 }}
                exit={{ opacity: 0, x: [0, -500] }}
                id={id}
                key={id}
              >
                <h4>{dev}</h4>
                <span>{obs ? obs : "N/A"}</span>
                <span>{service}</span>
                <img src={remove} alt="remove" onClick={() => removeItem(id)} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </StyleActivity>
  );
};

export default ServicesList;
