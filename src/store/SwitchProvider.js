import { createContext, useState } from "react";

const SwitchContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("position"));
};

const SwitchProvider = ({ children }) => {
  const [position, setPosition] = useState(init);
  return (
    <SwitchContext.Provider value={[position, setPosition]}>
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
export { SwitchContext };
