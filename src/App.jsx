import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import PageNotfound from './pages/PageNotfound'
import Pricing from './pages/Pricing'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'

const BASE_URL = 'http://localhost:5000'

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch {
        alert('Error fetching data...')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='app' element={<AppLayout />}>
            /
            <Route index element={<Navigate replace to='cities' />} />
            <Route
              path='cities'
              element={<CityList isLoading={isLoading} cities={cities} />}
            />
            <Route path='cities/:id' element={<City />} />
            <Route
              path='country'
              element={<CountryList isLoading={isLoading} cities={cities} />}
            />
            <Route path='form' element={<Form />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
