import {useState} from 'react';

import Modal from './Modal';

function Todo(props){

const [modalIsOpen, setModalIsClose] = useState(false);

function deleteHandler()
{
//    setModalIsClose(true);
//    document.getElementById('exampleModalCenter').modal('show');
      
}

return (

    <div className='container'> 
        <div className="card p-4">
            <h2>{props.text}</h2>
            <div className='actions'>
            <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">Delete</button>
            </div>
        </div>
       <Modal/>
    </div>
    );
}

export default Todo;