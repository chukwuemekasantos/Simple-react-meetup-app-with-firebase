import logo from '../logo.svg';
import { useState, useEffect } from "react";
import Meetuplist from "../meetups/Meetuplist";



// const dummy_data = [{
//     "id": 1,
//     "title": "Konklux",
//     "image": "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg",
//     "address": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
//     "description": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
//   }, {
//     "id": 2,
//     "title": "Toughjoyfax",
//     "image": "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg",
//     "address": "Phasellus sit amet erat. Nulla tempus.",
//     "description": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim."
//   }, {
//     "id": 3,
//     "title": "Prodder",
//     "image": "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg",
//     "address": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
//     "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
//   }, {
//     "id": 4,
//     "title": "Namfix",
//     "image": "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_960_720.jpg",
//     "address": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
//     "description": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo."
//   }, {
//     "id": 5,
//     "title": "Zaam-Dox",
//     "image": "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_960_720.jpg",
//     "address": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
//     "description": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
//   }, {
//     "id": 6,
//     "title": "Lotstring",
//     "image": "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_960_720.jpg",
//     "address": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
//     "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
//   }];


function AllMeetups(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(myGreeting, 2000);

       function myGreeting(){
            fetch('https://reactfirebase-6568c-default-rtdb.firebaseio.com/meetups.json',
            ).then( response => {
                return response.json();
            }).then(data => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id:key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
        }
        
    },[]);
    
    if(isLoading){
        return (

            <div>
                <div class="album py-5 mt-5">
                    <div class="container">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>

        );
    }

    if(loadedMeetups.length){
        return ( 
            <div>
                {/* All Meetups Page */}
                <div class="album py-5 mt-5">
                    <div class="container">
                        <Meetuplist meetups={loadedMeetups}/>
                    </div>
                </div>

            </div>
        );
    }else{
        return ( 
            <div>
                {/* All Meetups Page */}
                <div class="album py-5 mt-5">
                    <div class="container">
                        <h3>No Events Yet.</h3>
                    </div>
                </div>

            </div>
        );
    }


}


export default AllMeetups;