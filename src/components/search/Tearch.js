import { TextField,CircularProgress } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import { useState } from "react"

export const Searc=()=>{
    const [loading,setLoading]=useState(false)
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
        </>
    )
}
export default Searc