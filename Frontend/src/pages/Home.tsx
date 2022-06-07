import React from 'react';
import { Link } from 'react-router-dom';
import DatabaseView from '../components/DatabaseView';

import '../assets/css/pages.css'

function Home  () {
 
    return (
        <div className='container-fluid '>
        <div className='container-fluid home-content '>
            <div className='container text-center'>
            <h1>Team<span className='text-primary'> G</span> Project</h1>
           <h4 className='lead mb-3 p-2'>
              Upload Images, mint NFTs and
              much more !
          </h4>
          <Link to="/images/upload" className='btn btn-lg home-btns p-2 m-2 btn-secondary'>
             Get Started 
          </Link>
          <Link to="/wallet" className='btn btn-lg p-2 home-btns m-2 btn-light'>
              TG Wallet
          </Link>
         </div>
        </div>
         <DatabaseView />
        </div>
    )
}

export default Home;