import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryDetail from './Components/CountriesList/CountryDetail'
import CountryList from './Components/CountriesList/CountryList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/country' element={<CountryList />} />
        <Route path="/country/:CountryName" element={<CountryDetail />} />
      </Routes>
    </>
  )
}

export default App
