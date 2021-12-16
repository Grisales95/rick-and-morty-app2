import Switch from "../Switch/Switch";
import { HeaderBg, HeaderContainer, Image } from "./Header.elements";

const Header = () => {
  return (
    <HeaderBg>
      <HeaderContainer>
        <Switch />
        <Image
          src="https://tgneast.blob.core.windows.net/content/wp-content/uploads/2017/02/Rick-and-Morty.png"
          alt="rick-and-morty"
        />
      </HeaderContainer>
    </HeaderBg>
  );
};

export default Header;
