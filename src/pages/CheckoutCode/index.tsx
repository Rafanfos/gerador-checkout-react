import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import { StyledCheckout } from "./style";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";

export const CheckoutCode = () => {
  const { activity } = useContext(Context);

  const devContact = activity.filter(
    ({ service }) => service === "Contato com Dev"
  );

  const othersActivties = activity.filter(
    ({ service }) => service === "Outras atividades"
  );

  const pendencies = activity.filter(({ service }) => service === "Pendências");

  const text1 = `1 - ${
    devContact.length > 0
      ? devContact.map(({ dev, obs }) => `${obs} ${dev}`)
      : `Null`
  };`;

  const text2 = `2 - ${
    othersActivties.length > 0
      ? othersActivties.map(({ dev, obs }) => `${dev} ${obs}`)
      : `Null`
  };`;

  const text3 = `3 - ${
    pendencies.length > 0
      ? pendencies.map(({ dev, obs }) => `${dev} ${obs}`)
      : `Null`
  };`;

  const copyCode = () => {
    const code = `${text1}\n${text2}\n${text3}`;
    navigator.clipboard.writeText(code);
    toast.success("Copiado para a área de transferência");
  };

  return (
    <StyledCheckout>
      <AnimatePresence>
        <motion.div
          className="animation-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [-100, 0] }}
          exit={{ opacity: 0, y: [0, -100] }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1>Código de checkout</h1>
          <div className="codeList">
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
          </div>
        </motion.div>
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <button className="button" onClick={copyCode}>
            Copiar
          </button>
          <Link to={"/"} className="button">
            Voltar
          </Link>
          
        </motion.div>
      </AnimatePresence>
    </StyledCheckout>
  );
};
