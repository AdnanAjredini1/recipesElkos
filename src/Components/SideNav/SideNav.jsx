import { Link } from 'react-router-dom';
import './side-nav.css'
import SideNAvButton from './SideNavButton/SideNAvButton';
import { navSideData } from './sideNavData';
import { useSelector } from 'react-redux';

function SideNav() {

    const isLoggedIn =  useSelector(state => state.isLoggedIn.isLoggedIn);
    
    return (
        <div className="sideNavWrapper" >
            <p className='iconBrand' >Chefie</p>
            <div className="sideNavProfileUserWrapper">
                <div className='profilePic'></div>
                <p className='profileName' style={{display:isLoggedIn?'none':'box'}}>Filan Filani</p>
             
            </div>
             <div className='sideNavButtonWrapper'>
             {navSideData.map(button => (
                <Link to={button.to} key={button.name} className='linkSideNavButtons' style={{textDecoration:'none'}} >
                <SideNAvButton key={button.name} icon={button.icon} title={button.name}/>
                </Link>
                 
                
             ) )}
            
             </div>
            
        </div>
    );
}

export default SideNav;