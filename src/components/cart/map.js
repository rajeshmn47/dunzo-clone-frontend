import React, { useState, useEffect } from 'react';
import ReactMapGL, {
    Marker,
    GeolocateControl,
    NavigationControl,
} from 'react-map-gl';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {Room} from '@material-ui/icons'



const MAPBOX_TOKEN =
    'pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg';
console.log(MAPBOX_TOKEN)
const Tap = () => {
    const [customerCoords, setCustomerCoords] = useState({});
    const [placeName, setPlaceName] = useState('');
    const data = JSON.parse(localStorage.getItem('Coordinates')); // Area Search Coordinates

    const [viewPort, setViewPort] = useState({
        width: 'inherit',
        height: 'inherit',
        latitude: data.lat, // 18.634363666666665  initially showing  Area Search Coordinates
        longitude: data.long, // 73.78761533333333
        zoom: 10,
    });

    const geolocateStyle = {
        position: 'absolute',
        right: 30,
        bottom: 100,
        margin: 10,
    };

    const navStyle = {
        position: 'absolute',
        right: 60,
        bottom: 70,
        margin: 10,
    };
    // console.log(customerCoords);

    useEffect(() => {
        Geolocation(customerCoords);
    }, [customerCoords]);

    const Geolocation = (data) => {
        var config = {
            method: 'get',
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.long},${data.lat}.json?country=IN&access_token=${MAPBOX_TOKEN}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                console.log('Geolocation', response.data);
                getLocation(response.data.features);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getLocation = (data) => {
        data.map((item, i) => {
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
                console.log('getLocation', Coordinates);
                localStorage.setItem(
                    'CustomerCurrentLoc',
                    JSON.stringify(Coordinates),
                );
            }
        });
    };

    return (
        <>
        <div style={{height:'100vh',width:'100vw'}}>
            <ReactMapGL
                {...viewPort}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(viewport) => {
                    setViewPort(viewport);
                }}
                // mapStyle='mapbox://styles/fahdshaikh/ckhed9kw802un1arxojsobt0m'
                mapStyle='mapbox://styles/mapbox/light-v10'
            >
        
                <Marker
              latitude={data.lat}
              longitude={data.long}
              offsetLeft={-3.5 * viewPort.zoom}
              offsetTop={-7 * viewPort.zoom}
            >
              <Room
                style={{
                  fontSize: 7 * viewPort.zoom,
                  color: "tomato",
                  cursor: "pointer",
                }}
              
              />
                {data.area}
            </Marker>
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    showUserLocation={true}
                    onGeolocate={(e) => {
                        console.log('onGeolocate', e);
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
                className='col mb-5'
                style={{
                    padding: '0px',
                }}
            >
                <TextField
                    label='Address'
                    placeholder=''
                    fullWidth
                    variant='outlined'
                    style={{
                        marginLeft: '0px',
                        marginTop: '5px',
                        borderRadius: '0px',
                    }}
                    value={placeName}
                />
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