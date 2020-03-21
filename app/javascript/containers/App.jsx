import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/shared/Header'
import ProductList from './ProductsContainer'
import ProductDetail from './ProductDetailContainer'
// import NewProductForm from '../components/products/NewProductForm'
import Footer from '../components/shared/Footer'
import Signup from './SignupFormContainer'

class App extends Component {

  state = {
    currentUser: null
  }

  fetchCurrentUser = () => {
    axios
      .get('/api/v1/users/get_current_user.json')
      .then( response => {
        let currentUser = response.data.currentUser || null
        this.setCurrentUser( currentUser)
      })
      .catch( error => console.log( error.response.data ))
  }

  setCurrentUser = ( currentUser) => {
    this.setState( { currentUser })
  }


  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={ ProductList }/>
          <Route path='/products/:id' component={ ProductDetail } />
          <Route path='/register' render={() => (
            <Signup onFetchCurrentUser={ this.fetchCurrentUser} />
          )}/>
          <Route render={() => (
            <div className="container">
              <div className="row">
                <div className="card col-md-8 offset-md-2 mt-4 from-header-style">
                  <h1 className="text-center m-4">404: Not Found</h1>
                  <p className="text-center m-4">
                  The resource you are looking for could not be Found
                  </p>
                </div>
              </div>
            </div>
          )}/>
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
    )
  }  
}

export default App