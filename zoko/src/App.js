import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom"
import Leftbar from "./Components/Leftbar/Leftbar";
import Navbar from "./Components/Navbar/Navbar";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {

  const Layout =()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
        </div>
      </div>
    )
  }

  const router=createBrowserRouter([
    {
    path:"/login",
    element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
