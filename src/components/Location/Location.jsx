import {
  LocationContainer,
  LocationInfo,
  TitleLocation
} from "./Location.elements";

const Location = ({ dataLocation }) => {
  return (
    <LocationContainer>
      <TitleLocation>Location info</TitleLocation>
      <LocationInfo>Name: {dataLocation.name}</LocationInfo>
      <LocationInfo>Type: {dataLocation.type}</LocationInfo>
      <LocationInfo>Dimension: {dataLocation.dimension}</LocationInfo>
    </LocationContainer>
  );
};

export default Location;
