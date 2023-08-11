import SearchAppBar from "./components/Appbar";
import Home from "./pages/Home";
import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import Tour from "./pages/Tour";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Imagecollage from "./components/Imagecollage";

const App = () => {
  return (
    // <BrowserRouter>
    // <SearchAppBar/>
    //   <Routes>
    //     <Route path = "/" element = {<Home/>}/>
    //     <Route path = "/:id" element = {<Tour/>}/>
    //   </Routes>
    // </BrowserRouter>

    <>  
      <SearchAppBar/>
        <Outlet/>
    </>
  )}

  export const auth = createBrowserRouter([
    {
      path:"/",
      element : <App/>,
      children : [
        {
          path : "*",
          element : <Home/>
        },
        {
          path : "/home",
          element : <Home/>,
        },
        {
          path : "home/id",
          element : <Imagecollage/>
        }
      ]
    },
    
  ])


export const unAuth = createBrowserRouter([
      {
        path:"/",
        element : <App/>,
        children : [
          {
            path : "*",
            element : <Login/>
          },
          {
            path : "/",
            element : <Login/>
          },
          {
            path : "/login",
            element : <Login/>
          },
          {
            path : "/signup",
            element : <Signup/>
          },
        ]
      },
      
    ])


export default App;
