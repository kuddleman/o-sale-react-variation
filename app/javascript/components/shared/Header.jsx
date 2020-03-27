import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'





const Header = (props) => {
   const {
      currentUser,
      onSignout,
      onFetchCurrentUser,
      history
   } = props;

   const handleSignOut = () => {

      axios
     .delete('/api/v1/signout')
     .then( response => {
      //  this.setState({ toHomePage: true })
         onFetchCurrentUser()
         history.push(`/`)
      
     })
     .catch(error => {
       console.log( error.response )
     })
   }

   return (
      <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to='/' className='navbar-brand goog'>Donny-Sale</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
               <li className="nav-item">
               <Link to='/' className='nav-link'>
               Home <span className="sr-only">(current)</span>
               </Link>
               
               </li>
               <li className="nav-item">
                  <Link to='/' className='nav-link'>New Product</Link>
               </li>
               <li className="nav-item">
                  <Link to='/login' className='nav-link'>Sign In</Link>
               </li>
               <li className="nav-item">
                  <Link to='/register' className='nav-link'>Sign Up</Link>
               </li>
               <li className="nav-item">
                  
                  <Link to='/' className='nav-link' onClick={ handleSignOut} >
                     Sign Out
                  </Link>
                  {/* <a href="" onClick={onSignout} className='nav-link'>Sign Out</a> */}
               </li>
               {
                  currentUser ?
                  <li className="nav-item mt-1">
                  <p className="navbar-text">Signed in as { currentUser.email }</p>
               </li> : null
               }
               {/* <li className="nav-item mt-1">
                  <p className="navbar-text">Signed in as { currentUser.email }</p>
               </li> */}
               
            </ul>
            </div>
         </nav>

   )
}

export default Header