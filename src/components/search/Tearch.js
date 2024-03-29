import { TextField, CircularProgress } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Minicart from "./minicart";
import "./storedetails.css";
import { URL } from "../../constants/cartConstants";
import Topbar from "../topbar";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

export const Searc = () => {
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchvalue, setSearchvalue] = useState();
  const navigate = useNavigate();
  const [storey, setStorey] = useState([]);
  const [stores, setStores] = useState();
  const coOrdinates = JSON.parse(localStorage.getItem("Coordinates"));

  useEffect(() => {
    async function getstores() {
      const data = await axios.get(`${URL}/store/getallstores`);
      console.log(data);
      setStores(data.data.stores);
    }
    getstores();
  }, []);

  const handlechange = async (value) => {
    console.log(value, coOrdinates);
    setChange(true);
    if (!(value === "")) {
      console.log(value, coOrdinates?.lat, coOrdinates?.long);
      setSearchvalue(value);
      if (coOrdinates?.lat && coOrdinates?.long) {
        const data = await axios.get(`${URL}/store/search/?q=${value}&lat=${coOrdinates?.lat}&long=${coOrdinates?.long}`);
        console.log(data.data.storez);
        setStorey(data.data);
      }
      else {
        const data = await axios.get(`${URL}/store/search/?q=${value}`);
        console.log(data.data.storez);
        setStorey(data.data);
      }
    }
  };
  return (
    <>
      <div className="search">
        {!loading ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <KeyboardBackspace onClick={() => navigate(-1)} />
            <div style={{ position: "relative", width: "95%", height: "10vh" }}>
              <TextField
                style={{ width: "95%", height: "5vh", padding: "1vmax" }}
                variant="outlined"
                placeholder="search for item or a store"
                onChange={(e) => handlechange(e.target.value)}
              />
              <Search style={{ position: "absolute", top: "45%", right: "9%" }} />
            </div>
          </div>
        ) : (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress style={{ color: "#00D290" }} />
          </div>
        )}
      </div>
      <div className="searched">
        {searchvalue ? <p style={{ fontSize: "14px", marginBottom: "10px",fontWeight:"600",textTransform:"capitalize" }}>search results for "{searchvalue}"</p> : null}
      </div>
      <div className="searchedproducts">
        {storey
          ? storey?.stars?.map((k) => (
            <>
              <div
                className="storesearch"
                onClick={() =>
                  navigate(`/store/${k._id}?search_text=${searchvalue}`)
                }
              >
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                  <img src={k.img_url} alt="" width="40" />
                  <div style={{ marginLeft: "10px" }}>
                    <h5 style={{ marginBottom: '5px' }}>{k.title}</h5>
                    <p style={{ fontWeight: "200", fontSize: "12px" }}>{parseFloat(k?.dis / 1000).toFixed(2)}{" "}KM</p>
                  </div>
                </div>
                <div className="storeys">
                  {storey
                    ? storey?.products?.map((p) => (
                      <>
                        {k?.category?.some((x) => x.name === p?.subcat) && (
                          <div className="singleproduct">
                            <img src={p.image} alt="" width="40" />
                            <h5>{p.name}</h5>
                            <h5>1KG</h5>
                            <div className="pricebtn">
                              <h5>{p.price}</h5>

                              <button className="smallcad">+ ADD</button>
                            </div>
                          </div>
                        )}
                      </>
                    ))
                    : null}
                </div>
              </div>
            </>
          ))
          : null}
      </div>
      <Minicart />
    </>
  );
};
export default Searc;
