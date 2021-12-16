import { useContext, useEffect, useState } from "react";
import { SwitchContext } from "./store/SwitchProvider";
import Loader from "react-loader-spinner";
import Location from "./components/Location/Location";
import Residents from "./components/Residents/Residents";
import styled, { ThemeProvider } from "styled-components";
import fetchAPi from "./helper/fetchApi";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Themes from "./components/Theme/Themes";
import "./styles.css";

export default function App() {
  const randomNumber = Math.round(Math.random() * 126);
  const [dataLocation, setDataLocation] = useState(null);
  const [valueLocation, setValueLocation] = useState(randomNumber);
  const [moreResidents, setMoreResidents] = useState(6);
  const [position] = useContext(SwitchContext);

  const url = `https://rickandmortyapi.com/api/location/${valueLocation}`;
  useEffect(() => {
    fetchAPi(url).then(setDataLocation);
    localStorage.setItem("position", JSON.stringify(position));
  }, [url, position]);

  return (
    <ThemeProvider theme={Themes[position ? "dark" : "ligth"]}>
      <BackGround>
        <Header />
        <Container>
          <Search
            setValueLocation={setValueLocation}
            setMoreResidents={setMoreResidents}
          />
          {dataLocation ? (
            <>
              <Residents
                dataLocation={dataLocation}
                moreResidents={moreResidents}
                setMoreResidents={setMoreResidents}
              />
              <Location dataLocation={dataLocation} />
            </>
          ) : (
            <Loader type="TailSpin" color={position ? "#fff" : "#24282f"} />
          )}
        </Container>
      </BackGround>
    </ThemeProvider>
  );
}

///-------------------Styled---------------//

const BackGround = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  min-height: 100vh;
  height: 100%;
  transition: background-color 0.5s;
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 85%;

  @media (max-width: 425px) {
    width: 90%;
  }
`;
