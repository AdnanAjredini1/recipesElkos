import "./mobile-sideNav.css";
import SideNAvButton from "../SideNav/SideNavButton/SideNAvButton";
import { navSideData } from "../SideNav/sideNavData";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../MainPage/Search/search-assets/search-svgrepo-com.svg?react";
import CloseIcon from "./mobile-sidenav-assets/close-svgrepo-com.svg?react";
import { hamburgerActions } from "../../Store/hamburgerButtonSlice";

function MobileSideNav({ setSearchQuery }) {
  const isMobile = useSelector((state) => state.hamburger.isActiveHamburger);
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`mobileSideNavWrapper ${isMobile ? "isMobileClass" : ""}`}>
      <CloseIcon
        className="closeIcon"
        onClick={() => dispatch(hamburgerActions.setActiveHamburger())}
      />
      <p className="iconBrand">Chefie</p>
      <div className="sideNavProfileUserWrapper">
        <div className="profilePic"></div>
        <p className="profileName">Filan Filani</p>
        <p className="profilePosition">Position</p>
      </div>
      <div className="sideNavButtonWrapper">
        <div className="searchWrapper">
          <input
            type="search"
            className="searchInput"
            placeholder="Search recipes..."
            onChange={handleSearchChange}
          />
          <SearchIcon className="searchIcon" />
        </div>
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
