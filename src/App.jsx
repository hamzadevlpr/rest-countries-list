import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryDetail from './Components/CountriesList/CountryDetail'
import CountryList from './Components/CountriesList/CountryList'
import Portfolio from './Components/CountriesList/Portfolio'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/country' element={<CountryList />} />
        <Route path="/country/:CountryName" element={<CountryDetail />} />
      </Routes>
    </>
  )
}

export default App
