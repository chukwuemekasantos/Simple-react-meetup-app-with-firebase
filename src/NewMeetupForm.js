import {useRef} from 'react';

function NewMeetupForm(props){

    const title = useRef();
    const image = useRef();
    const address = useRef();
    const description  = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = title.current.value;
        const enteredImage = image.current.value;
        const enteredAddress = address.current.value;
        const enteredDescription = description.current.value;

        const meetUpData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        }

        props.onAddMeetup(meetUpData)
    }
    return (
          
       <div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <div class="card p-4">
           <form onSubmit={submitHandler}>
                <h2 class="mb-4">Add New Meetup</h2>
                <div class="row">
                    <div class="col">
                        <input type="text" ref={title} class="form-control" placeholder="Meetup Title" required/>
                    </div>
                    <div class="col">
                        <input type="url" ref={image} class="form-control" placeholder="Meetup Image URL" required/>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col">
                        <input type="text" ref={address} class="form-control" placeholder="Meetup Address" required/>
                    </div>
                    <div class="col">
                        <textarea type="text" ref={description} class="form-control" placeholder="description" required>
                        
                        </textarea>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col">
                    <button className="btn-block btn btn-dark">Add Meetup</button>
                    </div>
                </div>
                </form>
           </div>
       </div>
              
               
    );
}


export default NewMeetupForm;