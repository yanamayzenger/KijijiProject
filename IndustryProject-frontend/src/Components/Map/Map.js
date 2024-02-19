import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";

const mapContainerStyle = {
  width: "800px",
  height: "600px",
};

const torontoCenter = { lat: 43.65107, lng: -79.347015 };

function Map() {
  const [safePlaces, setSafePlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8080/api/safeplaces");
        console.log("Received safe places data:", result.data);

        setSafePlaces(result.data.safePlaces || []);
      } catch (error) {
        console.error("Error fetching safe places:", error);

        setSafePlaces([]);
      }
    };

    fetchData();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={torontoCenter}
        zoom={10}
      >
        {safePlaces.map((place) => (
          <Marker
            key={place.id}
            position={place.coordinates}
            onClick={() => setSelectedPlace(place)}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={selectedPlace.coordinates}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.address}</p>
              <p>Rating: {selectedPlace.safetyRating}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
