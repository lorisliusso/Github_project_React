import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App= ()=> {


  return (

    <GithubProvider> 


{/*REACT ROUTER */}
   
    <Router>

    <div className="flex flex-col w-screen h-screen overflow-x-hidden bg-gray-800 text-gray-300 ">

        <Navbar/> {/* always present */}

        {/* ROUTES */}
          <Routes>

            <Route path='/' element= {<Home/>}   />
            <Route path='/about' element= {<About/>}   />
            <Route path='/user/:login' element= {<User/>}   />
            <Route path='/contact' element= {<Contact/>}   />
            <Route path='/*' element= {<NotFound/>}   />

          </Routes>
         {/* ROUTES */}


        <Footer/>  {/* always present */}

    </div>

</Router>

{/*REACT ROUTER */}

<ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />



</GithubProvider>

  )


}

export default App;
