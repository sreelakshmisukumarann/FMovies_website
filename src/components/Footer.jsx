import React from 'react'
import './Footer.css'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <div style={{backgroundColor:'#13151a',color:'#a1a1a1',fontSize:'1rem',padding:' 40px 0 40px',fontFamily: 'Roboto, sans-serif',fontWeight:' 300PX'}}>
        <div className="container">
          <div className="row mt-2">
  
            <div className="col-md-6">
              <div className='logo'><img src="https://bestforandroid.com/wp-content/uploads/2021/03/Fmovies.png" alt="no image" width={'150px'} />
              </div>
  
              <p className='desc' style={{margin: '0 0 9px',fontSize:'16px'}}>
                <b style={{fontWeight:'500px'}}>FMovies.TO</b>
                 _ 
                <strong>Free movies online</strong>
                , here you can 
                <em>watch movies online</em>
                in hign quality for free without annoying of advertising, just come and enjoy your 
                <em>movies online</em>
                . 
                <b>FMovies.TO</b>
              </p>
              <p className='small'>
              Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.
              </p>
            </div>
  
            <div className="col-md-6">
              <div className='row'>
                <div className="col-md-3">
                  <div className='heading'>MOVIES</div>
                  <ul className='links'>
                    <li><a href="">Action</a></li>
                    <li><a href="">Adventure</a></li>
                    <li><a href="">Kungfu</a></li>
                    <li><a href="">Sci-fi</a></li>
                    <li><a href="">Thriller</a></li>
                  </ul>
                </div>
  
                <div className="col-md-3">
                  <div className='heading'>COUNTRY</div>
                  <ul className='links'>
                    <li><a href="">United States</a></li>
                    <li><a href="" className='links'>United</a></li>
                    <li><a href="">Kingdom</a></li>
                    <li><a href="">Taiwan</a></li>
                    <li><a href="">Korea</a></li>
                    <li><a href="">China</a></li>
                  </ul>
                </div>
  
                <div className="col-md-3">
                  <div className="heading">FREE MOVIES</div>
                  <ul className='links'>
                    <li><a href="">Movies</a></li>
                    <li><a href="">TV-Series</a></li>
                    <li><a href="">Top IMDB</a></li>
                    <li><a href="">A-Z List</a></li>
                  </ul>
                </div>
  
                <div className="col-md-3">
                  <div className="heading">HELP</div>
                  <ul className='links'>
                    <li><a href="">Blog</a></li>
                    <li><a href="">DMCA</a></li>
                    <li><a href="">FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div id="copyright">Copyright © 2023 FMovies.to All Rights Reserved</div>
    </>
  )
}

export default Footer