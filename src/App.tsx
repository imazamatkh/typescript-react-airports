import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { AirportDetailPage } from './pages/AirportDetailPage/AirportDetailPage'
import { Navigation } from './components/Navigation/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'/auth'} element={<AuthPage />}></Route>
        <Route path={'/airport/:id'} element={<AirportDetailPage />}></Route>
      </Routes>
    </>
  )
}

export default App
