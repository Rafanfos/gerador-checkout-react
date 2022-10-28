import { useContext } from "react";
import { StyledPage } from "./style";
import { motion } from "framer-motion";
import CurrentDate from "../../components/CurrentDate";
import ServicesList from "../../components/ServicesList";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import { toast } from "react-toastify";

const HomePage = () => {
  const { activity, setActivity } = useContext(Context);

  const clean = () => {
    setActivity([]);
    toast.success("Registros limpos!");
  };

  return (
    <StyledPage>
      <CurrentDate />
      <Form />
      <ServicesList />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        exit={{ opacity: 0 }}
      >
        <div className="buttons">
          <Link className="button" to={"/checkout"}>
            Gerar código
          </Link>
          <button
            type="button"
            className={activity.length > 0 ? "button" : "hidden"}
            onClick={clean}
          >
            Limpar
          </button>
        </div>
      </motion.div>
    </StyledPage>
  );
};

export default HomePage;
