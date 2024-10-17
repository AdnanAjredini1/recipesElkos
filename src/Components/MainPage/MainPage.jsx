import './mainPage.css'
import RecipiesTabs from './RecipesTabs/RecipesTabs';
import Search from "./Search/Search";

function MainPage() {
    return (
        <div className="mainPageWrapper">
            <Search />
            <RecipiesTabs />
          
        </div>
    );
}

export default MainPage;