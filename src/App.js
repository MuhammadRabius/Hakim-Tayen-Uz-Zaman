
import { Route, Routes } from 'react-router-dom';
import Header from './componets/SharedCompo/Header/Header';
import './App.css';
import Footer from './componets/SharedCompo/Footer/Footer';
import TopBanner from './componets/SharedCompo/TopBanner/TopBanner';
import Home from './componets/Home/Home';
import Services from './componets/Services/Services';
import NotFoundPage from './componets/NotFoundPage/NFP';
import Blog from './componets/Blog/Blog';
import Login from './componets/Login/Login'
import AboutMe from './componets/AboutMe/AboutMe';
import Appointment from './componets/Appointment/Appointment';


function App() {
  return (
    <div>
      <TopBanner></TopBanner>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/aboutme' element={<AboutMe/>}></Route>
        <Route path='/*' element={<NotFoundPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
