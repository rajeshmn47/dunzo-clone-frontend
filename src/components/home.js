import homebanner from './images/dunzobanner.jpeg'
import paan from './images/paan.png'
import pets from './images/petsupply.png'
import Topbar from './topbar'
import medicine from './images/medicine.png'
import wellness from './images/wellness.png'
import Footer from './footer/Footer'
import {useState,useEffect} from 'react'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import {useNavigate} from 'react-router-dom'
import { URL } from '../constants/cartConstants'

export const Home=()=>{
    const[stores,setStores]=useState()
    const[on,setOn]=useState(true)
    const navigate=useNavigate()
const handleclick=async(value)=>{
    console.log(value)
    setOn(false)
    const  data=await axios.get(`${URL}/store/getstores/${value}`)
    console.log(data.data.stores)
setStores(data.data.stores)
}
    return(
        <>
        <Topbar/>
        {on?<>
        <div className='imagebanner'>
<img src={homebanner} alt='' width='100%'/>

</div>
<div className='homeimages'>
<img src='https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_pnd_secondary2_1613527381240.png' 
alt='' width='45%' onClick={()=>handleclick('PROVISIONS')}/>
<img src='https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/operator-FFWUCfzmUzhok89HMYt0ON2Gy5oZECO73gRenPw11HxAeCLBtTBOG8FMqMTe92UOnScOPMUnjYDcaPVxx7wSFJwXJ3kSR3YRsPby4EgC4zW2mVYLc99zuvVh7O2Ppmx2QMQd40UiwYLGhy0OjbMayr.png'
alt='' width='45%' onClick={()=>handleclick('FRUITSANDVEGETABLES')}/>
<img src='https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_meat_secondary2_1613527536249.png' 
alt='' width='45%' onClick={()=>handleclick('PROVISIONS')}/>
<img src='https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_fnv_secondary2_1613527515094.png' alt='' 
width='45%' onClick={()=>handleclick('MEATANDFRESH')}/>
</div>
<div className='belowhomeimages'>
<div>
<img src={paan} alt='' width='75%' onClick={()=>handleclick('PAAN')}/>
<h5>Paan Shop</h5>
</div>
<div>
<img src={pets} alt='' width='75%' onClick={()=>handleclick('PETSFOOD')}/>
<h5>Pet Supplies</h5>
</div>
<div>
    
<img src={medicine} alt='' width='75%' onClick={()=>handleclick('MEDICINE')}/>

<h5>Medicines</h5>
</div>

<div>
<img src={wellness} alt='' width='75%' onClick={()=>handleclick('WELLNESS')}/>
<h5>Health And Wellness</h5>
</div>

</div></>:<div>
    {stores?<div className='stardusts'>
    {stores?.map((s)=> <>
        <div className='stardust' onClick={()=>navigate(`/store/${s._id}`)}>
            <div>
<img src={s.img_url} alt='' width='80'/>

</div>
<div>
<h5>{s.title}</h5>
<h5>{s.location}</h5>
<h5>13.1 km <span className='spanish'>34 mins</span></h5>
</div>
        </div>
    </>)
        }
    </div>:<div className='progress'>
    <CircularProgress style={{color:'#00D290'}}/>
    
    </div>}
    </div>}

    <Footer/>
        </>
    )
}

export default Home