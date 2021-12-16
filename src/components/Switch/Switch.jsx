import { useContext } from "react";
import { SwitchContext } from "../../store/SwitchProvider";
import { SwitchBall, SwitchStyled } from "./Switch.elements";

const Switch = () => {
  const [position, setPosition] = useContext(SwitchContext);

  return (
    <SwitchStyled onClick={() => setPosition(!position)}>
      <SwitchBall style={{ left: position ? "21px" : "3px" }} />
    </SwitchStyled>
  );
};

export default Switch;
