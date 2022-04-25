import { TextField,CircularProgress } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import { useState,useEffect } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Minicart from './minicart'

export const Searc=()=>{
    const[change,setChange]=useState(false)
    const [loading,setLoading]=useState(false)
    const[searchvalue,setSearchvalue]=useState()
    const navigate=useNavigate()
    const[storey,setStorey]=useState([])
const[stores,setStores]=useState()
useEffect(()=>{
    async function getstores(){
    const data=await axios.get('https://dunzobackend.herokuapp.com/store/getallstores')
    console.log(data)
    setStores(data.data.stores)
    }
    getstores()
},[])

const handlechange=async (value)=>{
    console.log(value)
    setChange(true)
    if(!(value==='')){
    console.log(value)
    setSearchvalue(value)
const data=await axios.get(`https://dunzobackend.herokuapp.com/store/search/?q=${value}`)
console.log(data.data)
setStorey(data.data)
    }
}
    return(
        <>
        <div className='search'>
        {!loading?<>
        <TextField style={{width:'100%',height:'5vh',padding:'1vmax'}} variant='outlined' 
        placeholder='search for item or a store' onChange={(e)=>handlechange(e.target.value)}/>
<Search style={{position:'absolute',top:'55%',right:'5%'}}/></>:
<div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
<CircularProgress style={{color:'#00D290'}}/>
</div>}
</div>
<div className='searched'>
    {searchvalue?<h5>search results for {searchvalue}</h5>:null}
</div>
<div className="searchedproducts">
{storey?storey?.stars?.map((k)=><>
<div className="storesearch">
<h5>{k.title}</h5>
<div className="storeys">
{storey?storey?.products?.map((p)=><>
        {k?.category?.some((x)=>x.name===p?.subcat)&&<div className='singleproduct'>
            
            <img src={p.image} alt='' width='40'/>
<h5>{p.name}</h5>
<h5>1KG</h5>
<div className='pricebtn'>
    <h5>{p.price}</h5>
  
<button className="smalladd">+ ADD</button>
</div>
</div>}</>):null}
  </div></div></>):null}
</div>
{!change&&
<div className="stores">
{stores?.map((s)=><>
<div className='store' onClick={()=>navigate(`/store/${s._id}`)}>
<img src={s.img_url} alt='' width='40'/>
<h5>{s.title}</h5>
</div>
</>
)}
</div>}
<Minicart/>
        </>
    )
}
export default Searc