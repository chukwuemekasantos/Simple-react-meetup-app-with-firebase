import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import {Routes,Route} from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Newmeetup from './pages/Newmeetup';
import Favorite from './pages/Favourite';
import MainNavigation from './layouts/MainNavigation';

function App() {
  return (
    <div className="App">
        
        <MainNavigation/>
        <Routes>

            <Route path="/" element={<AllMeetups/>}/>
            <Route path="new-meetup" element={<Newmeetup/>} />
            <Route path="favorite" element={<Favorite/>} />
       
        </Routes>
      
        {/* <h1  class="mt-5">
            My Todos
        </h1> */}
{/* 
        <Todo text="Learn React"/>
        <Todo text="Learn Vue js"/>
        <Todo text="Learn Angular"/> */}

       
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
