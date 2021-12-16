import Loader from "react-loader-spinner";
import ResidentCard from "./ResidentCard";
import {
  ImgNoResidents,
  NoResidentText,
  ResidentList,
  ResidentsContainer,
  ShowMore,
  TitleResidents
} from "./Residents.elements";

const Residents = ({ dataLocation, setMoreResidents, moreResidents }) => {
  return (
    <ResidentsContainer>
      <TitleResidents>
        Residents({dataLocation?.residents?.length})
      </TitleResidents>
      {dataLocation ? (
        !dataLocation?.residents?.length <= 0 ? (
          <>
            <ResidentList>
              {dataLocation.residents
                .slice(0, moreResidents)
                .map((residentUrl, i) => (
                  <ResidentCard residentUrl={residentUrl} key={i} />
                ))}
            </ResidentList>
            {moreResidents < dataLocation.residents.length && (
              <ShowMore onClick={() => setMoreResidents(moreResidents + 6)}>
                Show more
              </ShowMore>
            )}
          </>
        ) : (
          <>
            <NoResidentText>No residents...</NoResidentText>
            <ImgNoResidents
              src="https://cdn130.picsart.com/317297058129211.png"
              alt="rick-and-morty-fuck"
            />
          </>
        )
      ) : (
        <Loader type="TailSpin" color="#24282f" />
      )}
    </ResidentsContainer>
  );
};

export default Residents;
