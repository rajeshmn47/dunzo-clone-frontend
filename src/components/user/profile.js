import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {auth} from '../../firebase'
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PaymentIcon from '@material-ui/icons/Payment';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

export const Profile=()=>{
    return(
        <>
        <div style={{display:'flex',alignItems:'center',padding:'1vw',boxSizing:'border-box'}}>
        <KeyboardBackspaceIcon style={{marginRight:'2vw'}}/>
        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png' 
        alt='' height='14' width='61'/>
        </div>
    <div className='profiletop'>
       <div>
           <h5 style={{fontSize:'18px',marginBottom:'1vh'}} >Hi, rajesh!</h5>
          <h5 style={{display:'flex',alignItems:'center',marginBottom:'1vh',color:'#6F7588'}}>
          <PhoneIcon size='small' style={{marginRight:'2vw',fontSize:'14px',marginBottom:'1vh'}} />
          +91-7259293140   
              </h5>
              <h5 style={{display:'flex',alignItems:'center',color:'#6F7588'}}>
          <MailIcon size='small' style={{marginRight:'2vw',fontSize:'14px'}} />
        rajeshmn47@gmail.com   
              </h5>
           </div> 
        <div>
            <button className='edit'>edit <ChevronRightOutlinedIcon htmlColor='#00B37A'/></button>
        </div>
        </div>    
        <div className='aadhaar'>
            <h5>Verify your age to order paan items</h5>
            <h6>you can verify your age using government ID to order 
                Paan items from Dunzo
            </h6>
            </div>
            <div className='profiledivgap'></div>
            <div className='profilediv'>
    <button className='logoutbtn'>
     <LocalMallRoundedIcon htmlColor='#6F7588' style={{marginRight:'2vw'}}/>   
        Orders List</button>
<ChevronRightOutlinedIcon/>
    </div>
    <div className='profilediv'>
    <button className='logoutbtn'>
     <MyLocationIcon htmlColor='#6F7588'  style={{marginRight:'2vw'}}/>   
        Addresses</button>
<ChevronRightOutlinedIcon/>
    </div>
  
    <div className='profilediv'>
    <button className='logoutbtn'>
     <AccountCircleIcon htmlColor='#6F7588'  style={{marginRight:'2vw'}}/>   
        Account Settings</button>
<ChevronRightOutlinedIcon/>
    </div>
    <div className='profilediv'>
    <button className='logoutbtn'>
     <PaymentIcon htmlColor='#6F7588'  style={{marginRight:'2vw'}}/>   
        Manage Payments</button>
<ChevronRightOutlinedIcon/>
    </div>
            <div className='profilediv'>
    <button className='logoutbtn'>
     <LocalAtmIcon htmlColor='#6F7588'  style={{marginRight:'2vw'}}/>   
        Dunzo Cash</button>
<ChevronRightOutlinedIcon/>
    </div>
    <div className='profilediv'>
    <button className='logoutbtn'>
     <ContactSupportIcon htmlColor='#6F7588'   style={{marginRight:'2vw'}}/>   
     
        Support</button>
<ChevronRightOutlinedIcon/>
    </div>
            <div className='profilediv'>
    <button className='logoutbtn'>
     <ListOutlinedIcon htmlColor='#6F7588'  style={{marginRight:'2vw'}}/>   
        About</button>
<ChevronRightOutlinedIcon/>
    </div>
        <div className='profilediv'>
    <button onClick={()=>auth.signOut()} className='logoutbtn'>
     <ExitToAppOutlinedIcon htmlColor='#6F7588'  style={{marginRight:'2vw'}}/>   
        Logout</button>
<ChevronRightOutlinedIcon/>
    </div>
   
        </>
    )
}

export default Profile