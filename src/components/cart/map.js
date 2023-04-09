import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Room } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import { useNavigate } from "react-router-dom";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg";
console.log(MAPBOX_TOKEN);
const Tap = () => {
  const navigate = useNavigate();
  const [customerCoords, setCustomerCoords] = useState({});
  const [placeName, setPlaceName] = useState("");
  const [data, setData] = useState();
  const dat = localStorage.getItem("Coordinates")
    ? JSON.parse(localStorage.getItem("Coordinates"))
    : false; // Area Search Coordinates

  const [viewPort, setViewPort] = useState({
    width: "inherit",
    height: "inherit",
    latitude: dat.lat, // 18.634363666666665  initially showing  Area Search Coordinates
    longitude: dat.long, // 73.78761533333333
    zoom: 10,
  });

  const geolocateStyle = {
    position: "absolute",
    right: 10,
    bottom: 200,
    margin: 10,
  };

  const navStyle = {
    position: "absolute",
    right: 25,
    bottom: 140,
    margin: 10,
  };
  // console.log(customerCoords);

  useEffect(() => {
    Geolocation(customerCoords);
    console.log(customerCoords);
  }, [customerCoords]);
  useEffect(() => {
    setData(dat);
    console.log(data);
  }, []);
  const Geolocation = (da) => {
    var config = {
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${da.long},${da.lat}.json?country=IN&access_token=${MAPBOX_TOKEN}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("Geolocation", response.data);
        getLocation(response.data.features);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getLocation = (da) => {
    da.map((item, i) => {
      if (i === 0) {
        var long = item.center[0];
        var lat = item.center[1];
        var place_name = item.place_name;
        setPlaceName(place_name);

        const Coordinates = {
          lat,
          long,
          place_name,
        };
        console.log("getLocation", Coordinates);
        localStorage.setItem("CustomerCurrentLoc", JSON.stringify(Coordinates));
        localStorage.setItem("Coordinates", JSON.stringify(Coordinates));
      }
    });
  };

  const handleaddlocation = (viewport) => {
    setViewPort(viewport);
    console.log(viewport);
    setData({ lat: viewport.latitude, long: viewport.longitude });
    setCustomerCoords({
      lat: viewport.latitude,
      long: viewport.longitude,
    });
  };

  return (
    <>
      <div style={{ height: "80vh", width: "100vw" }}>
        <ReactMapGL
          {...viewPort}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={(viewport) => handleaddlocation(viewport)}
          // mapStyle='mapbox://styles/fahdshaikh/ckhed9kw802un1arxojsobt0m'
          mapStyle="mapbox://styles/mapbox/light-v10"
        >
          {data && (
            <Marker
              latitude={data.lat}
              longitude={data.long}
              offsetLeft={-3.5 * viewPort.zoom}
              offsetTop={-7 * viewPort.zoom}
            >
              <Room
                style={{
                  fontSize: 3 * viewPort.zoom,
                  color: "tomato",
                  cursor: "pointer",
                }}
              />
              {data?.area}
            </Marker>
          )}
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showUserLocation={true}
            onGeolocate={(e) => {
              console.log("onGeolocate", e);
              setCustomerCoords({
                lat: e.coords.latitude,
                long: e.coords.longitude,
              });
            }}
          />

          <div style={navStyle}>
            <NavigationControl />
          </div>
        </ReactMapGL>
      </div>
      <div
        style={{
          padding: "0px",
          width: "100vw",
          position: "fixed",
          bottom: "10%",
          backgroundColor: "#FFFFFF",
          height: "10vh",
        }}
      >
        <div
          style={{
            marginLeft: "0px",

            borderRadius: "0px",
            backgroundColor: "#F5FBFF",
            display: "flex",
            padding: "2vh 1vw",
            boxSizing: "border-box",
            borderBottom: "1px solid #CCCCCC",
          }}
        >
          <HomeIcon htmlColor="#00B37A" />
          <h5 style={{ display: "inline-block", marginLeft: "2vw" }}>
            {placeName}
          </h5>
        </div>
        <div style={{ padding: "1vh 1vw", boxSizing: "border-box" }}>
          <button className="paybtn" onClick={() => navigate("/adddetails")}>
            Proceed to AddDetails
          </button>
        </div>
      </div>
    </>
  );
};

export default Tap;

// https://api.mapbox.com/directions/v5/mapbox/driving/73.787679,18.633725;77.620895,12.946148?alternatives=false&geometries=geojson&steps=false&access_token=pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg

// long:73.787679,18.633725;77.620895,12.946148
// lat:18.633725

// 0:77.620895
// 1:12.946148

// https://api.mapbox.com/directions/v5/mapbox/driving/73.787679,18.633725;77.620895,12.946148?alternatives=false&geometries=geojson&steps=false&access_token=pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg

// long:73.787679,18.633725;77.620895,12.946148
