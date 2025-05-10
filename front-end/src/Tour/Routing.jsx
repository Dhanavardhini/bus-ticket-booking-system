import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./routing.css"
import Dashboard from '../Admin/Dashboard'
import Drawer from '../Admin/Drawer'
import Addpackage from '../Admin/Addpackage'
import Editpackage from '../Admin/Editpackage'
import Userslist from '../Admin/Userslist'
import Managebook from '../Admin/Managebook'
import Logout from '../Admin/Logout'
import Bookplace from '../User/Bookplace'
function Routing() {
  return (
   <>
   <div className="mainroute">
   <Drawer/>
   <Routes>
        <Route path='/dashboard' element={ <Dashboard/>}/>
        <Route path='/addpackage' element={ <Addpackage/>}/>
        <Route path='/editpackage' element={ <Editpackage/>}/>
        <Route path='/userlist' element={ <Userslist/>}/>
        <Route path='/managebook' element={ <Managebook/>}/>
        <Route path={"/twodeatail/:id"} element={<Bookplace />} />
        <Route path='/logout' element={ <Logout/>}/>
    </Routes>
   </div>
    
   </>
  )
}

export default Routing