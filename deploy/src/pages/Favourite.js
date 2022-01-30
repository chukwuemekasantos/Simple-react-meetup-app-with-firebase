import { useContext } from 'react';

import FavoriteContext  from '../store/favorites-context';

import Meetuplist from '../meetups/Meetuplist';

function Favourite(){

    const favoriteCtx = useContext(FavoriteContext); 
    let context;
    if(favoriteCtx.favorites.length === 0){
        context = 
            <div>
                   
                <div class="album py-5 mt-5">
                    <div class="container">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        You don't have favorite meetup yet.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    </div>
                </div>
    
            </div>
    }else{
        context =   <div>
                            {/* All Meetups Page */}
                        <div class="album py-5 mt-5">
                            <div class="container">
                                <Meetuplist meetups={favoriteCtx.favorites}/>
                            </div>
                        </div>

                    </div>
    }
    

    return (
       context
    );
}


export default Favourite;