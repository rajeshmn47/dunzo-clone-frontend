import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './storedetails.css'
import addItemsToCart from '../../actions/cartAction'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Product from'./product/Product'
import Minicart from './minicart'

export const Storedetails=()=>{
    const [store,setStore]=useState()
    const [category,setCategory]=useState()
    const[products,setProducts]=useState()
    const id=useParams()
    console.log(id)
    useEffect(()=>{
       async function getstoredetails(){
        const data=await axios.get(`http://localhost:9000/store/getstoredetails/${id.id}`)
        console.log(data?.data.stores)
        setStore(data?.data.stores)
       }
       getstoredetails() 
    },[id.id])
    useEffect(()=>{
async function getproducts(){
    const data=await axios.get(`http://localhost:9000/store/getproducts/?category=${category}`)
    console.log(data?.data)
    setProducts(data?.data.products)
}
if(category){
getproducts()
}
    },[category])
const addtocart=()=>{

}
    return(
        <>
  <div style={{display:'flex',alignItems:'center',padding:'2vw',borderBottom:'1px solid #CCCCCC'}}>
        <KeyboardBackspaceIcon/>
        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png' 
        alt='' height='14' width='61'/>
        </div>
        <div style={{padding:'2vw',borderBottom:'1px solid #CCCCCC',fontFamily:'Gilroy,sans-serif'}}>
<h3 style={{fontFamily:'Gilroy,sans-serif'}}>{store?.title}</h3>
<div style={{display:'flex',alignItems:'center',width:'50%',justifyContent:'space-between',marginTop:'2vh'}}>
<h5 style={{ color: 'rgb(135,140,155)',textTransform:'capitalize'}}>{store?.location}</h5>
<h5 style={{ color: 'rgb(135,140,155)'}}>31 mins</h5>
<h5 style={{ color: 'blue'}}>Free Delivery</h5>
</div>
</div>
<div className='categories'>
{store?.category.map((s)=><>
<button className={category===s.name?'category selected':'category'} onClick={()=>setCategory(s.name)}>{s.name}</button></>)}
</div>
<div className='categoryheader'>
    <h5>{category&&category}</h5>
</div>
<div className='products'>
    {products?products?.map((p)=>
<Product propss={p}/>):null}
    </div>
<Minicart/>
        </>
    )
}

export default Storedetails