import { useEffect, useState } from "react";
import fetchAPi from "../../helper/fetchApi";

import { Button, Form, FormContainer, Select, Option } from "./Search.elements";

const Search = ({ setValueLocation, setMoreResidents }) => {
  const [inputValue, setInputValue] = useState("");
  const [locations, setLocations] = useState([]);

  const locationsUrl = "https://rickandmortyapi.com/api/location/";

  useEffect(() => {
    fetchAPi(locationsUrl).then(setLocations);
  }, [locationsUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 0) {
      return null;
    }
    setValueLocation(inputValue);
    setMoreResidents(6);
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Select defaultValue="" onChange={(e) => setInputValue(e.target.value)}>
          <Option value="" hidden>
            Choose location
          </Option>
          {locations &&
            locations?.results?.map((location) => (
              <Option value={location.id} key={location.id}>
                {location.name}
              </Option>
            ))}
        </Select>
        <Button type="submit">Go</Button>
      </Form>
    </FormContainer>
  );
};

export default Search;
