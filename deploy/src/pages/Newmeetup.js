import {useNavigate} from 'react-router-dom';

import NewMeetupForm from "../NewMeetupForm";

function Newmeetup(){
    
    const history = useNavigate();

    function addMeetupHanderler(meetupdata)
    {
        
        fetch(
            'https://reactfirebase-6568c-default-rtdb.firebaseio.com/meetups.json',
            {
                method : 'POST',
                body: JSON.stringify(meetupdata),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then( ()=> {
            history('/');
        });
    }

    return (
         <div className="">
           <div className="container mt-5">
                <NewMeetupForm onAddMeetup={addMeetupHanderler}/>
           </div>
        </div>
    );
}


export default Newmeetup;