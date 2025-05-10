import { Route, Routes, useLocation } from "react-router-dom";
import Adminlogin from "./Admin/Adminlogin"
import Userlogin from "./User/Userlogin"
import Landingpage from "./Tour/Landingpage";
import Newregister from "./User/Newregister";
import Routing from "./Tour/Routing";
import Userlanding from "./User/Userlanding";
import Book from "./User/Book";
import Mybook from "./User/Mybook";
import Bookplace from "./User/Bookplace";

function App() {

  const location = useLocation()
  console.log(location.pathname);
  const route = [
    {
      path:'/',
      Component:Landingpage
    },
    {
      path:'/adminlogin',
      Component:Adminlogin
    },
    {
      path:'/userlogin',
      Component:Userlogin
    },
    {
      path:'/register',
      Component:Newregister
    },
    {
      path:'/userpanel',
      Component:Userlanding
    },
    {
      path:'/homepage',
      Component:Userlanding
    },
    {
      path:'/bookpack',
      Component:Book
    },
    {
      path:'/mybooking',
      Component:Mybook
    },
    {
      path:'/twodetail',
      Component:Bookplace
    }
   
  ]


  const routePaths = route.map((r) => r.path);
  console.log(!routePaths.includes(location.pathname));
  return (
    <>
    
      <Routes>
        {
          route.map((data,index)=>(
            <Route key={index} path={data.path} element={<data.Component/>}/>
          ))
        }
        </Routes>

    {routePaths.includes(location.pathname) ? null : <Routing />}
    </>
  
      )
}

export default App
