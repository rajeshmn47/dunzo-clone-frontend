import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "./storedetails.css";
import addItemsToCart from "../../actions/cartAction";
import { deletecart } from "../../actions/cartAction";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Product from "./product/Product";
import Minicart from "./minicart";
import { getstoredetails } from "../../actions/storeAction";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import qs from "query-string";
import { CircularProgress } from "@material-ui/core";
import { URL } from "../../constants/cartConstants";

export const Storedetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { storedata } = useSelector((state) => state.store);
  const [open, setOpen] = useState(false);
  console.log(storedata);
  const store = storedata;
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);
  const id = useParams();

  console.log(id);
  useEffect(() => {
    dispatch(getstoredetails(id.id));
    console.log(storedata);
  }, [id.id]);
  useEffect(() => {
    if (query.search_text) {
      setCategory("searchresults");
    } else if (storedata?.category && storedata?.category[0]?.name) {
      setCategory(storedata?.category[0]?.name);
    }
  }, [storedata]);
  useEffect(() => {
    async function getproducts() {
      setProducts(false);
      const data = await axios.get(
        `${URL}/store/getproducts/?category=${category}`
      );
      console.log(data?.data);
      setProducts(data?.data.products);
    }
    async function getsearchresults() {
      setProducts(false);
      console.log(query.search_text);
      const data = await axios.get(
        `${URL}/store/getproducts/?search_text=${query.search_text}&lon=12&lat=10`
      );
      console.log(data?.data);
      setProducts(data?.data.products);
    }
    if (category === "searchresults") {
      getsearchresults();
      setCategory("searchresults");
    } else if (category) {
      getproducts();
    }
  }, [category]);

  const addtocart = () => { };
  const toggleDrawer = (open) => (event) => {
    setOpen(false);
  };
  const handleclearcart = () => {
    dispatch(deletecart());
    localStorage.setItem("storeinfo", JSON.stringify(storedata));
    setOpen(false);
    console.log("rskesh");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1vmax",
          justifyContent: "space-between",
          borderBottom: "1px solid #CCCCCC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <KeyboardBackspaceIcon onClick={() => navigate(-1)} />
          <img
            src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png"
            alt=""
            height="14"
            width="61"
          />
        </div>
        <div>{user ? "profile" : "Login"}</div>
      </div>
      <div
        style={{
          padding: "2vw",
          borderBottom: "1px solid #CCCCCC",
          fontFamily: "Gilroy,sans-serif",
        }}
      >
        <h3 style={{ fontFamily: "Gilroy,sans-serif" }}>{store?.title}</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "auto",
            justifyContent: "space-between",
            marginTop: "2vh",
            whiteSpace: "nowrap",
          }}
        >
          <h5
            style={{ color: "rgb(135,140,155)", textTransform: "capitalize" }}
          >
            {store?.location}
          </h5>
          <h5 style={{ color: "rgb(135,140,155)" }}>31 mins</h5>
          <h5 style={{ color: "blue" }}>Free Delivery</h5>
        </div>
      </div>
      <div className="categories">
        {query.search_text && (
          <button
            className={
              category === "searchresults" ? "category selected" : "category"
            }
            onClick={() => setCategory("searchresults")}
          >
            SearchResults
          </button>
        )}
        {store?.category?.map((s) => (
          <>
            <button
              className={category === s.name ? "category selected" : "category"}
              onClick={() => setCategory(s.name)}
            >
              {s.name}
            </button>
          </>
        ))}
      </div>
      <div className="categoryheader">
        <h5>{category && category}</h5>
      </div>
      <div className="products">
        {products ? (
          products?.map((p) => (
            <>
              <Product propss={p} open={open} setOpen={setOpen} />
            </>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "center",
            }}
          >
            <CircularProgress style={{ color: "#00D290" }} />
          </div>
        )}
      </div>
      <Minicart />
      <Drawer
        style={{
          height: "40vh",
          zIndex: "1000000000000000000000000000000000000000000000000",
        }}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <div className="drawerbtns">
          <Button
            style={{
              backgroundColor: "#FFFFFF",
              width: "50vw",
              borderColor: "rgb(0, 192, 139)",
              borderRadius: "20px",
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "rgb(0, 192, 139)",
              width: "50vw",
              color: "#FFFFFF",
            }}
            onClick={() => handleclearcart()}
          >
            Clear cart
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Storedetails;
