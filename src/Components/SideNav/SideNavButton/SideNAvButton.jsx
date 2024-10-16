import './side-nav-button.css'

function SideNAvButton({icon:Icon, title}) {
    return (
        <div className='sideNavButton'>
           <Icon className="sideNavButtonIcon"/>
           <p>{title}</p>
        </div>
    );
}

export default SideNAvButton;