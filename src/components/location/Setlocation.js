import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./setlocation.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

class Setlocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
    };
  }
  handleInputChange = (e) => {
    // const history = useHistory();
    console.log(e.target.value);
    axios({
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?country=IN`,
      params: {
        access_token:
          "pk.eyJ1IjoicmFqZXNobW40NyIsImEiOiJjbDF4OXByczYwMHFqM2NtbTNkZG9rOGUyIn0.Sa9ZnUH-YOdekFPU80Cuqg",
      },
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data.features,
        });
        // console.log(res);

        this.getLocation(res.data.features);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getLocation = (data) => {
    data.map((item, i) => {
      if (i === 0) {
        var long = item.center[0];
        var lat = item.center[1];
        var temp = item.place_name.split(", ");
        var area = temp[0];
        temp.shift();
        var place_name = temp.join(", ");

        const Coordinates = {
          lat,
          long,
          area,
          place_name,
        };
        // console.log(Coordinates);
        localStorage.setItem("Coordinates", JSON.stringify(Coordinates));
      }
    });
  };

  render() {
    const {setLocation}=this.props;
    return (
      <>
        {" "}
        <div className="setlocation">
          <h5
            style={{
              marginBottom: "1vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <KeyboardBackspaceIcon onClick={()=>setLocation(false)}/>
            Add your Location
          </h5>
          <Autocomplete
            className="col-lg-9 col-md-8 col-sm-8 mr-0  text-left form-control-plaintext form-control-lg ml-2  text-muted font-weight-bold"
            freeSolo
            id="free-solo-2-demo"
            options={this.state.data.map((place) => place.place_name)}
            renderInput={(params) => (
              <TextField
                className="text-left form-control-plaintext form-control-lg text-muted font-weight-bold"
                id="outlined-helperText"
                placeholder="Enter Your delivery location"
                onChange={this.handleInputChange}
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                // variant='outlined'
                fullWidth
                variant="outlined"
              />
            )}
          />
        </div>
      </>
    );
  }
}

export default Setlocation;
