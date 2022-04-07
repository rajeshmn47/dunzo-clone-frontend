import { TextField,CircularProgress } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import { useState,useEffect } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const Searc=()=>{
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
const[stores,setStores]=useState()
useEffect(()=>{
    async function getstores(){
    const data=await axios.get('http://localhost:9000/store/getallstores')
    console.log(data)
    setStores(data.data.stores)
    }
    getstores()
},[])
    return(
        <>
        <div className='search'>
        {!loading?<>
        <TextField style={{width:'100%',height:'5vh',padding:'1vmax'}} variant='outlined' placeholder='search for item or a store'/>
<Search style={{position:'absolute',top:'50%',right:'10%'}}/></>:
<div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
<CircularProgress style={{color:'#00D290'}}/>
</div>}
</div>
<div className="stores">
{stores?.map((s)=><>
<div className='store' onClick={()=>navigate(`/store/${s._id}`)}>
<img src={s.img_url} alt='' width='40'/>
<h5>{s.title}</h5>
</div>
</>
)}
</div>

        </>
    )
}
export default Searc