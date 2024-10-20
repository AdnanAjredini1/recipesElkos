import { useEffect, useState } from "react";
import MainPage from "./Components/MainPage/MainPage";
import MobileSideNav from "./Components/MobileSideNav/MobileSideNav";
import SideNav from "./Components/SideNav/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerActions } from "./Store/hamburgerButtonSlice";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useSelector((state) => state.hamburger.isActiveHamburger);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  return (
    <div>
      <div
        className={`${isMobile ? "backdrop" : ""}`}
        onClick={() => dispatch(hamburgerActions.setActiveHamburger())}
      ></div>
      <SideNav />
      <MobileSideNav setSearchQuery={setSearchQuery} />
      <MainPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default App;
