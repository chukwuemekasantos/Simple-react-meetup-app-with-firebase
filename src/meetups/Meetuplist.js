import Meetupitem from "./Meetupitem";

function Meetuplist(props){

    return (
         <div>
                <div class="row">  
                    {/* <div class="row"> */}
                        {props.meetups.map(meetup => <Meetupitem key={meetup.id} 
                            id={meetup.id}
                            image={meetup.image}
                            title={meetup.title}
                            address={meetup.address}
                        />)}
                    {/* </div> */}
                </div>
                
        </div>
        
    );
}


export default Meetuplist;