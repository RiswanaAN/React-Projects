import React from 'react'
import EmployeeForm from './components/EmployeeForm'
import App from './App'
import {Routes, Route} from 'react-router-dom'
function Router() {
  return (
    <div>
      <Routes>
        <Route path= "/" element= {<App />} />
        <Route path= "/addEmployee" element= {<EmployeeForm />} />
      </Routes>  
    </div>
  )
}

export default Router