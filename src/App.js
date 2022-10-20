import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import TopInfo from './components/Nav/02-Top Info';
// import Global from './components/Nav/01-Global';
import About from './components/About';
import NewArrivals from './components/NewArrivals';
import Shop from './components/Shop';
import Videos from './components/Videos';
import AsSeenOn from './components/AsSeenOn';
import Global from './components/Nav/01-Global';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='header-container'>
        <TopInfo />
        <Global />
      </div>
      <div className='main-container'>
        <NewArrivals />
        <About />
        <Shop />
        <Videos />
        <AsSeenOn />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>

      {/* <Slider /> */}
    </>
  );
}

export default App;
