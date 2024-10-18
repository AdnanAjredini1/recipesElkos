import { useState } from "react"
import MainPage from "./Components/MainPage/MainPage"
import MobileSideNav from "./Components/MobileSideNav/MobileSideNav"
import SideNav from "./Components/SideNav/SideNav"


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div >
    <SideNav />
    <MobileSideNav setSearchQuery={setSearchQuery} />
    <MainPage searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
    </div>
  )
}

export default App
