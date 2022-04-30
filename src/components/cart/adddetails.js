import {TextField,Button} from '@material-ui/core'
import {useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'

export const AddDetails=()=>{

const navigate=useNavigate()

const[addressone,setAddressone]=useState()
const[howtoreach,setHowtoreach]=useState()
const[contactname,setContactname]=useState()
const[contactnumber,setContactnumber]=useState()

const handlesubmit=(e)=>{
e.preventDefault()
localStorage.setItem(
    'Address',
    JSON.stringify({addressone:addressone,howtoreach:howtoreach,contactname:contactname,
        contactnumber:contactnumber}),
);
navigate('/cart')
}
    return(

        <>
        
        <div style={{display:'flex',height:'100vh',justifyContent:'center'}}>
 <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
 
<form onSubmit={(e)=>handlesubmit(e)}>
   <div style={{display:'flex',flexDirection:'column',height:'70vh',justifyContent:'space-between'}}>
<TextField placeholder='flat floor building name' variant='outlined' value={addressone} onChange={(e)=>setAddressone(e.target.value)} />
<TextField placeholder='how to reach' variant='outlined' value={howtoreach} onChange={(e)=>setHowtoreach(e.target.value)} />
<TextField placeholder='person to contact' variant='outlined' value={contactname} onChange={(e)=>setContactname(e.target.value)} />
<TextField placeholder='contactnumber' variant='outlined' value={contactnumber} onChange={(e)=>setContactnumber(e.target.value)} />
</div>
<div style={{display:'flex',alignItems:'center',width:'60vw',marginTop:'9vh'}}>

<Button type='submit' 
style={{width:'65vw',borderRadius:'20px',height:'8vh', backgroundColor:'green',color:'white'}}>
    Register</Button>
</div>
</form>
 </div>
 </div>      
        
        </>

    )
}

export default AddDetails