import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowSchool from './ShowSchool'
import AddSchool from './AddSchool'

const AllRoutes = () => {
  return (
     <Routes>
        <Route  path='/' element={<ShowSchool />} />
        <Route  path='/addschool' element={<AddSchool />} />
     </Routes>
  )
}

export default AllRoutes