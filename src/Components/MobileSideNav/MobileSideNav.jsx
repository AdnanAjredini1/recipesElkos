import "./mobile-sideNav.css";
import SideNAvButton from "../SideNav/SideNavButton/SideNAvButton";
import { navSideData } from "../SideNav/sideNavData";
import { useSelector } from "react-redux";

function MobileSideNav() {
    const isMobile = useSelector(state => state.hamburger.isActiveHamburger);
  return (
    <div className={`mobileSideNavWrapper ${isMobile ? 'isMobileClass':''}`}>
      <p className="iconBrand">Chefie</p>
      <div className="sideNavProfileUserWrapper">
        <div className="profilePic"></div>
        <p className="profileName">Filan Filani</p>
        <p className="profilePosition">Positon</p>
      </div>
      <div className="sideNavButtonWrapper">
        {navSideData.map((button) => (
          <SideNAvButton
            key={button.name}
            icon={button.icon}
            title={button.name}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileSideNav;
