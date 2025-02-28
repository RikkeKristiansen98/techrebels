import FormService from "../services/FormService";

const FormContext = createContext();

export const useHome = () => useContext(FormContext);