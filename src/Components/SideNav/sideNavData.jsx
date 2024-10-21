import RacipesIcon from './sideNav-assets/chef-restaurant-man-svgrepo-com.svg?react';
import FavoritesIcon from './sideNav-assets/heart-alt-svgrepo-com.svg?react';
import ComunityIcon from './sideNav-assets/center-813-svgrepo-com.svg?react'
import MyRecipesIcon from './sideNav-assets/recipes-svgrepo-com.svg?react'

export const navSideData = [
    {
        name: "Recipes",
        icon: RacipesIcon, 
        to:'/'
      },
      {
        name: "Favorites",
        icon: FavoritesIcon, 
        to:'/favorites'
      },
      {
        name: "My recipes",
        icon: MyRecipesIcon,
        to:'/my-recipes' 
      },
      {
        name: "Community",
        icon: ComunityIcon, 
      },
]