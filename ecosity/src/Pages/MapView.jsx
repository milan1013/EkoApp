import React, {Modal, Button}from "react";

import { FaMapPin } from "react-icons/fa";
import Map, { Marker } from "react-map-gl";
import env from "react-dotenv";
import { useEffect, useState } from "react";

export default function MapView() {
  const [latitude, setLatitude] = useState(43.32095563210615);
  const [longitude, setLongitude] = useState(21.89569488512675);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const onClickMarker = (eventId) => {

    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>

  };

  const events = [
    {
      id: 1,
      name: "Čišćenje reke",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit eu, sed do eiusmod tempor incididunt ut labore et dolore",
      photoUri: "Assets/Images/recycling.png",
      location: {
        latitude: 43.31817965676414,
        longitude: 21.890938695680486,
      },
    },
    {
      id: 2,
      name: "Čišćenje parka",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit eu, sed do eiusmod tempor incididunt ut labore et dolore",
      photoUri: "Assets/Images/recycling.png",
      location: {
        latitude: 43.32408,
        longitude: 21.895139,
      },
    },
    {
      id: 3,
      name: "Čišćenje spomenika",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit eu, sed do eiusmod tempor incididunt ut labore et dolore",
      photoUri: "Assets/Images/recycling.png",
      location: {
        latitude: 43.31817965676414,
        longitude: 21.890938695680486,
      },
    },
  ];

  return (
    <>
      <Map
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoibWlsYW5yYWRvbWlyb3ZpYyIsImEiOiJja21vMnBtZTAwMzZ3MnVxcHNmOXBxMm5wIn0.k6-NEmxck_q11eLQ6YxofA"
      >
        {events.map((event, index) => {
          return (
            <Marker
              key={index}
              longitude={event.location.longitude}
              latitude={event.location.latitude}
              onClick={onClickMarker(event.id)}
            >
              <FaMapPin size={25} color={"red"} anchor="bottom" />
            </Marker>
          );
        })}
      </Map>
    </>
  );
}
