import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.scss";

function Search({ onSearch }) {
  const [postcode, setPostcode] = useState("");
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/safeplaces"
        );
        setLocationData(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocationData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(locationData);
  };

  return (
    <form onSubmit={handleSubmit} className="wrapper__form">
      <input
        type="text"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        placeholder="Enter postcode"
        className="form--input"
      />
      <button type="submit" className="form--btn">
        Search
      </button>
    </form>
  );
}

export default Search;
