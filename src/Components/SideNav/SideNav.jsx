import './side-nav.css'
import SideNAvButton from './SideNavButton/SideNAvButton';
import { navSideData } from './sideNavData';

function SideNav() {
    return (
        <div className="sideNavWrapper" >
            <p className='iconBrand' >Chefie</p>
            <div className="sideNavProfileUserWrapper">
                <div className='profilePic'></div>
                <p className='profileName'>Filan Filani</p>
                <p className='profilePosition'>Positon</p>
            </div>
             <div className='sideNavButtonWrapper'>
             {navSideData.map(button => (
                <SideNAvButton key={button.name} icon={button.icon} title={button.name}/>
                 
                
             ) )}
            
             </div>
            
        </div>
    );
}

export default SideNav;