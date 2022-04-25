import homebanner from './images/dunzobanner.jpeg'
import paan from './images/paan.png'
import fruitsy from './images/fruitsy.png'
import pets from './images/petsupply.png'
import lastpic from './images/lastpic.png'
import pickup from './images/pickup.png'
import anystore from './images/anystore.png'
import vegy from './images/vegy.png'
import Topbar from './topbar'
import medicine from './images/medicine.png'
import wellness from './images/wellness.png'

export const Home=()=>{
    return(
        <>
        <Topbar/>
        <div className='imagebanner'>
<img src={homebanner} alt='' width='100%'/>

</div>
<div className='homeimages'>
<img src={fruitsy} alt='' width='50%'/>
<img src={vegy} alt='' width='50%'/>
<img src='https://ik.imagekit.io/dunzo/home/tr:w-332,h-244_home_icon/dunzo/icons/newHome/promoBanner/kitImageUrl/largeIcons/default_meat_secondary2_1613527536249.png' 
alt='' width='50%'/>
<img src={pickup} alt='' width='50%'/>
</div>
<div className='belowhomeimages'>
<div>
<img src={paan} alt='' width='75%'/>
<h5>Paan Shop</h5>
</div>
<div>
<img src={pets} alt='' width='75%'/>
<h5>Pet Supplies</h5>
</div>
<div>
    
<img src={medicine} alt='' width='75%'/>

<h5>Medicines</h5>
</div>

<div>
<img src={wellness} alt='' width='75%'/>
<h5>Health And Wellness</h5>
</div>

</div>
        </>
    )
}

export default Home