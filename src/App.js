import SearchAppBar from "./components/Appbar";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import { useEffect, useState } from "react";
import { createContext } from 'react';

export const MyContext = createContext("");

const App = () => {

  const [auth , setAuth] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      setAuth(true)
    }
  },[])

  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value = {{auth , setAuth}}>
      <SearchAppBar />
      <Routes>
        {
          auth ? 
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </>
            
             : 
            <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            </>
        }
               
      </Routes>
      </MyContext.Provider>
    </BrowserRouter>
      </>
  )}

//   export const auth = createBrowserRouter([
//     {
//       path:"/",
//       element : <App/>,
//       children : [
//         {
//           path : "/home",
//           element : <Home/>,
//         },
//         // {
//         //   path : "home/id",
//         //   element : <Imagecollage/>
//         // }
//       ]
//     },
    
//   ])


// export const unAuth = createBrowserRouter([
//       {
//         path:"/",
//         element : <App/>,
//         children : [
//           // {
//           //   path : "*",
//           //   element : <Login/>
//           // },
//           {
//             path : "/login",
//             element : <Login/>
//           },
//           {
//             path : "/signup",
//             element : <Signup/>
//           },
//         ]
//       },
      
//     ])


export default App;
