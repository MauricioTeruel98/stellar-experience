import { useContext } from "react";
import StellarContext from "../context/StellarProvider";

const useStellar = () => {
    return useContext(StellarContext);
}

export default useStellar;