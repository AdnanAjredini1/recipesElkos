import { useState } from "react";
import "./mainPage.css";
import RecipiesTabs from "./RecipesTabs/RecipesTabs";
import Search from "./Search/Search";

function MainPage() {
  
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="mainPageWrapper">
      <Search setSearchQuery={setSearchQuery} />
      <RecipiesTabs searchQuery={searchQuery} />
    </div>
  );
}

export default MainPage;
