import { useEffect, useState } from "react";
import fetchAPi from "../../helper/fetchApi";
import {
  CardResident,
  ResidentImg,
  ResidentInfo,
  ResidentName,
  Status,
  StatusContainer
} from "./ResidentCards.elements";

const ResidentCard = ({ residentUrl }) => {
  const [dataResident, setDataResident] = useState({});

  useEffect(() => {
    fetchAPi(residentUrl).then(setDataResident);
  }, [residentUrl]);

  return (
    <CardResident>
      <ResidentImg src={dataResident.image} alt={dataResident.name} />
      <ResidentInfo>
        <ResidentName>{dataResident.name}</ResidentName>
        <StatusContainer>
          <Status
            alive={dataResident.status === "Alive" && true}
            unknown={dataResident.status === "unknown" && true}
          />
          {dataResident.status} - {dataResident.species}
        </StatusContainer>
        <p>Gender: {dataResident.gender}</p>
        <p>Episodes:{dataResident.episode?.length}</p>
      </ResidentInfo>
    </CardResident>
  );
};

export default ResidentCard;
