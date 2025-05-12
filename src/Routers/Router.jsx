import Home from '../Pages/Home'
import BollyWood_Song from '../Pages/BollyWood_Song'
import Youtubers_Song from '../Pages/Youtubers_Song'
import ErrorPage from '../Pages/ErrorPage'
import { Routes, Route } from 'react-router-dom'

const pageRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bollyWood_songs' element={<BollyWood_Song />} />
        <Route path='/youtubers_songs' element={<Youtubers_Song />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default pageRouter