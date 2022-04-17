
import { Route, Routes } from 'react-router-dom';
import Header from './componets/SharedCompo/Header/Header';
import './App.css';
import Footer from './componets/SharedCompo/Footer/Footer';
import TopBanner from './componets/SharedCompo/TopBanner/TopBanner';


function App() {
  return (
    <div>
      <TopBanner></TopBanner>
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
