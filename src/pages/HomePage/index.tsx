import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ChangeEvent, useContext } from "react";
import { StyledPage } from "./style";
import { motion, AnimatePresence } from "framer-motion";
import CurrentDate from "../../components/CurrentDate";
import ServicesList from "../../components/ServicesList";
import { Context, IServiceData } from "../../context";

const HomePage = () => {
  const { serviceType, setServiceType, saveData } = useContext(Context);

  const formSchema =
    serviceType !== "Contato com Dev"
      ? yup.object().shape({
          obs: yup.string().required("Detalhe a pendência/atividade*"),
        })
      : yup.object().shape({
          dev: yup
            .string()
            .required("Insira o dev atendido*")
            .matches(/^['@']/, "Deve começar com @")
            .trim(),
        });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IServiceData>({
    resolver: yupResolver(formSchema),
  });

  const changeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setServiceType(e?.target.value);
  };

  return (
    <StyledPage>
      <CurrentDate />
      <motion.div
        className="effect-div"
        animate={{ y: [-400, 0] }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <form onSubmit={handleSubmit(saveData)}>
          <h1>Gerador de checkout</h1>
          <div className="label-input">
            <label htmlFor="service">Atendimento</label>
            <select
              id="service"
              {...register("service")}
              onChange={(e) => changeType(e)}
            >
              <option></option>
              <option>Contato com Dev</option>
              <option>Outras atividades</option>
              <option>Pendências</option>
            </select>
          </div>
          <AnimatePresence>
            {serviceType && (
              <motion.div
                className="inputs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [-30, 0] }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                exit={{ opacity: 0, y: [0, -30] }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [-30, 0] }}
                  transition={{ ease: "easeOut", duration: 1.5 }}
                  exit={{ opacity: 0, y: [0, -30] }}
                  className="label-input"
                >
                  <label htmlFor="dev">Dev atendido</label>
                  <input
                    id="dev"
                    placeholder={"Digite o @ do dev"}
                    {...register("dev")}
                  />
                  <p className="alert">{errors.dev?.message}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [-30, 0] }}
                  transition={{ ease: "easeOut", duration: 1.5 }}
                  exit={{ opacity: 0, y: [0, -30] }}
                  className="label-input"
                >
                  <label htmlFor="obs">Obs.</label>
                  <input
                    id="obs"
                    placeholder="Observação(caso exista)"
                    {...register("obs")}
                  />
                  <p className="alert">{errors.obs?.message}</p>
                </motion.div>
                <button type="submit">Registrar</button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
      <>
        <ServicesList />
      </>
    </StyledPage>
  );
};

export default HomePage;
