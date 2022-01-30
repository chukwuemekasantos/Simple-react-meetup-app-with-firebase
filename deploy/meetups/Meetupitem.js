import {useContext} from 'react';
import  FavoriteContext  from  '../store/favorites-context';
function Meetupitem(props){
    const favouriteCtx = useContext(FavoriteContext);

    const itemIsF = favouriteCtx.itemIsFavorite(props.id);


    function toggleFavoriteStatusHandler(){
        if(itemIsF){
            favouriteCtx.removeFavorite(props.id)
        }else{
            favouriteCtx.addFavorite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            });
        }
    }

    return (
           
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src={props.image} alt="Card image cap"/>
                    <div class="card-body">
                    <p><i className=''></i>{props.title}</p>
                    <p class="card-text"><i class="fas fa-map-marker-alt"></i> {props.address}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button onClick={toggleFavoriteStatusHandler} type="button" class="btn btn-sm btn-dark">
                                {(itemIsF ? 'Remove from Favorites' : 'Add to Favorite')}</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
            </div>
              
               
    );
}


export default Meetupitem;