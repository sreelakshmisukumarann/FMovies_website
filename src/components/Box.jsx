import React from 'react'
import './Box.css'

function Box() {
  return (
    <div className='container' style={{backgroundColor:'#2f3441',color:'#b9bdc7',borderColor:'#b9bdc7'}}>
        <div className='alert'>
          <div style={{float:'left',marginRight:'10px',fontSize:'2.5rem'}}> 
            <i class="fa fa-rss"></i>
         </div>
           <h1 style={{fontSize:'21px',fontWeight:'400px'}}> FMovies - Watch Movies Online Free</h1>
           <p>Just a faster and better place for watching online movies for free!</p>
        </div>
    </div>
  )
}

export default Box