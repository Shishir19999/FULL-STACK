import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomeComponent from './component/Pages/HomeComponent'
import AboutComponent from './component/Pages/AboutComponent'
import ContactComponent from './component/Pages/ContactComponent'
import PageNotFound from './component/Pages/PageNotFound'

function RouterComponent() {
  return (
    <div>
        <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='/about' element={<AboutComponent/>}/>
      <Route path='/contact' element={<ContactComponent/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </div>
  )
}

export default RouterComponent
