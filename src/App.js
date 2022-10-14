import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import TopInfo from './components/Nav/02-Top Info';
// import Global from './components/Nav/01-Global';
import About from './components/About';
import NewArrivals from './components/NewArrivals';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <TopInfo />
      {/* <Global /> */}
      <div className='main-container'>
        <NewArrivals />
        <About />
        <Shop />
      </div>

      {/* <Slider /> */}
      {/* <Slider /> */}
      {/* <Slider /> */}
    </>
  );
}

export default App;
