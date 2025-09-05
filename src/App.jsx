import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "/public/stylesheets/bootstrap-icons.css";
import "/public/stylesheets/bootstrap.min.css";
import "/public/stylesheets/tooplate-barista.css";
import "/public/stylesheets/vegas.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';



import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import ReservationPage from './pages/ReservationPage';

function App() {


  return (
  <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/menu' element={<MenuPage />} />
            <Route exact path='/reviews' element={<ReviewsPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/reservation' element={<ReservationPage />} />
            <Route exact path='*' element={<ErrorPage />} />

        </Routes>
  </BrowserRouter>
  )
}

export default App
