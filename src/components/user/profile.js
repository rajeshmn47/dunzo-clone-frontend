import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {auth} from '../../firebase'
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export const Profile=()=>{
    return(
        <>
        <div style={{display:'flex',alignItems:'center',padding:'1vw',}}>
        <KeyboardBackspaceIcon/>
        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png' 
        alt='' height='14' width='61'/>
        </div>
        <div className='aadhaar'>
            Verify your age to order paan items
            </div>
            <div className='profilediv'>
    <button className='logoutbtn'>
     <ListOutlinedIcon style={{marginRight:'2vw'}}/>   
        About</button>
<ChevronRightOutlinedIcon/>
    </div>
        <div style={{padding:'1vh 1vw',margin:'1vh 1vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <button onClick={()=>auth.signOut()} className='logoutbtn'>
     <ExitToAppOutlinedIcon style={{marginRight:'2vw'}}/>   
        Logout</button>
<ChevronRightOutlinedIcon/>
    </div>
        </>
    )
}

export default Profile