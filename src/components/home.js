import homebanner from "./images/dunzobanner.jpeg";
import paan from "./images/paan.png";
import pets from "./images/petsupply.png";
import Topbar from "./topbar";
import medicine from "./images/medicine.png";
import wellness from "./images/wellness.png";
import Footer from "./footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useNavigate } from "react-router-dom";
import { URL } from "../constants/cartConstants";
import Setlocation from "./location/Setlocation";
import { Grid } from "@material-ui/core";

export const Home = () => {
  const [stores, setStores] = useState();
  const [on, setOn] = useState(true);
  const [location, setLocation] = useState(false);
  const coOrdinates = JSON.parse(localStorage.getItem("Coordinates"));
  const navigate = useNavigate();
  const handleclick = async (value) => {
    console.log(value);
    setOn(false);
    if (coOrdinates?.lat && coOrdinates?.long) {
      const data = await axios.get(`${URL}/store/getstores/${value}?lat=${coOrdinates?.lat}&long=${coOrdinates?.long}`);
      console.log(data.data.stores);
      setStores(data.data.stores);
    }
    else {
      const data = await axios.get(`${URL}/store/getstores/${value}`);
      console.log(data.data.stores);
      setStores(data.data.stores);
    }
  };
  return (<>
    {!location ? <>
      <Topbar setLocation={setLocation} />
      {on ? (
        <div className="screenbody">
          <div className="imagebanner">
            <img src={homebanner} alt="" width="100%" />
          </div>
          <div className="homeimages">
            <Grid container spacing={2}>
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <img
                  src="https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1613527381240.png"
                  alt=""
                  width="100%"
                  onClick={() => handleclick("PROVISIONS")}
                />
              </Grid>
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <img
                  src="https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/operator-FFWUCfzmUzhok89HMYt0ON2Gy5oZECO73gRenPw11HxAeCLBtTBOG8FMqMTe92UOnScOPMUnjYDcaPVxx7wSFJwXJ3kSR3YRsPby4EgC4zW2mVYLc99zuvVh7O2Ppmx2QMQd40UiwYLGhy0OjbMayr.png"
                  alt=""
                  width="100%"
                  onClick={() => handleclick("FRUITSANDVEGETABLES")}
                />
              </Grid>
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <img
                  src="https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_meat_secondary2_1613527536249.png"
                  alt=""
                  width="100%"
                  onClick={() => handleclick("PROVISIONS")}
                />
              </Grid>
              <Grid item md={3} lg={3} sm={6} xs={6}>
                <img
                  src="https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1613527515094.png"
                  alt=""
                  width="100%"
                  onClick={() => handleclick("MEATANDFRESH")}
                />
              </Grid>
            </Grid>
          </div>

          <div className="belowhomeimages">
            <div>
              <img
                src={paan}
                alt=""
                width="50%"
                onClick={() => handleclick("PAAN")}
              />
              <h5>Paan Shop</h5>
            </div>
            <div>
              <img
                src={pets}
                alt=""
                width="50%"
                onClick={() => handleclick("PETSFOOD")}
              />
              <h5>Pet Supplies</h5>
            </div>
            <div>
              <img
                src={medicine}
                alt=""
                width="50%"
                onClick={() => handleclick("MEDICINE")}
              />

              <h5>Medicines</h5>
            </div>

            <div>
              <img
                src={wellness}
                alt=""
                width="50%"
                onClick={() => handleclick("WELLNESS")}
              />
              <h5>Health And Wellness</h5>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {stores ? (
            <div className="stardusts">
              {stores?.map((s) => (
                <>
                  <div
                    className="stardust"
                    onClick={() => navigate(`/store/${s._id}`)}
                  >
                    <div>
                      <img src={s.img_url} alt="" width="80" />
                    </div>
                    <div>
                      <h5>{s.title}</h5>
                      <h5>{s.location}</h5>
                      <h5>{parseFloat(s?.dis / 1000).toFixed(2)} kM <span className="spanish">34 mins</span></h5>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="progress">
              <CircularProgress style={{ color: "#00D290" }} />
            </div>
          )}
        </div>
      )}

      <Footer />
    </> : <Setlocation setLocation={setLocation} />
    }</>
  );
};

export default Home;
