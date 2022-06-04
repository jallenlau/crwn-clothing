import Home from '../src/routes/home/home.component'
import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import Authentication from '../src/routes/Authentication/Authentication.component'

const Shop = () => {
  return (
    <p>Shop page.</p>
  )
};

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
   </Routes>
  )
}

export default App;
