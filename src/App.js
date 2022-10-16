import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import UserSearch from './components/users/UserSearch';




const App= ()=> {





  return (

    <GithubProvider> 

      <AlertProvider>

{/*REACT ROUTER */}
   
    <Router>

    <div className="flex flex-col w-screen h-screen overflow-x-hidden bg-gray-900 ">

        <Navbar/> {/* always present */}

        {/* ROUTES */}
          <Alert />
          <Routes>

            <Route path='/' element= {<Home/>}   />
            <Route path='/about' element= {<About/>}   />
            <Route path='/user/:login' element= {<User/>}   />
            <Route path='/contact' element= {<Contact/>}   />
            <Route path='/notfound' element= {<NotFound/>}   />
            <Route path='/*' element= {<NotFound/>}   />

          </Routes>
         {/* ROUTES */}


        <Footer/>  {/* always present */}

    </div>

</Router>

{/*REACT ROUTER */}




</AlertProvider>




</GithubProvider>



  )









}

export default App;
