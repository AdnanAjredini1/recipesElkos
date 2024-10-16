import './search.css'
import 'hamburgers/dist/hamburgers.css';
import SearchIcon from './search-assets/search-svgrepo-com.svg?react'
import { useDispatch, useSelector } from 'react-redux';
import { hamburgerActions } from '../../../Store/hamburgerButtonSlice';

function Search() {

    const isActiveHamburger = useSelector(state => state.hamburger.isActiveHamburger);
    const dispatch = useDispatch();
    console.log("Hamburger is active", isActiveHamburger);
  
    return (
        <div className='searchLogginWrapper'>
            <p className='iconBrand'>Chefie</p>
            <div className='searchWrapper'>
                <input type='search' className='searchInput' placeholder='Search recipes...'/>
                <SearchIcon className="searchIcon"/>
            </div>

            <div className='logginButtonWrapper'>
                <p>Login</p>
            </div>
            <button
           
          className={`hamburger hamburger--collapse  hamburgerButton ${isActiveHamburger && "is-active"}`}
          type="button"
          onClick={() => dispatch(hamburgerActions.setActiveHamburger())}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        </div>
    );
}

export default Search;