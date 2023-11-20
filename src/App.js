import './App.css';
import Box from './components/Box';
import Footer from './components/Footer';
import Header from './components/Header';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Header/>
      <Box/>
      <div className='widget-title mt-3'>
        <a href='' className='more mt-3'>View All
        <i class="fa fa-caret-right"></i>
        </a>
        <h1 className='ms-5' style={{color:'#01aac1',fontSize:'20px'}}>SUGGESTIONS</h1>
      </div>
     <div className='row mv'>
        <Row isPoster={true} fetchURL={requests.fetchTopRated}/>
        <Row isPoster={true} title="" fetchURL={requests.fetchRomanceMovies}/>
     </div>
     
     <div className='widget-title'>
        <a href='' className='more mt-3'>View All
        <i class="fa fa-caret-right"></i>
        </a>
        <h1 className='ms-5' style={{color:'#01aac1',fontSize:'20px'}}>LATEST MOVIES</h1>
      </div>
     <div className='row'>
        <Row isPoster={true} title="" fetchURL={requests.fetchDocumentaries}/>
        <Row isPoster={true} title="" fetchURL={requests.fetchTrending}/>
     </div>
      
      <div className='widget-title'>
        <a href='' className='more mt-3'>View All
        <i class="fa fa-caret-right"></i>
        </a>
        <h1 className='ms-5' style={{color:'#01aac1',fontSize:'20px'}}>LATEST TV-SERIES</h1>
      </div>
     <div className='row'>
        <Row isPoster={true} title="" fetchURL={requests.fetchComedyMovies}/>
        <Row isPoster={true} title="" fetchURL={requests.fetchActionMovies}/>
     </div>

      <div className='d-flex align-items-center justify-content-center mt-5'>
      <p style={{color:'#929ca5'}}>A wide selection of free online movies are available on <span style={{color:'#05a9be'}}>FMovies</span>. You can watch movies online for free without Registration.</p>
      </div>

      <Footer/>
      
    </div>
  );
}

export default App;
