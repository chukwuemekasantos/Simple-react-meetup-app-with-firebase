import { createContext, useState } from "react";


const FavoriteContext = createContext({
    favorites : [],
    totalFovorites : 0,
    addFavorite : (favoriteMeetup) => {},
    removeFavorite : (meetupId) => {},
    itemIsFavorite : (meetupId) => {}
});


export function FavoriteContextProvider(props){

    const [userFavorite, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorite.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorite,
        totalFovorites:  0,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler
    };

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;