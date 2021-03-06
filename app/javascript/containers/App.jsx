import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/shared/Header'
import ProductList from './ProductsContainer'
import ProductDetail from './ProductDetailContainer'
// import NewProductForm from '../components/products/NewProductForm'
import Footer from '../components/shared/Footer'
import Signup from './SignupFormContainer'
import Signin from './SigninFormContainer'

class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount = () => {
    this.fetchCurrentUser()
  }

  fetchCurrentUser = () => {
    axios
      .get('/api/v1/users/get_current_user')
      .then( response => {
        console.log( response )
        let currentUser = response.data || null
        this.setCurrentUser( currentUser)
      })
      .catch( error => console.log( error.response.data ))
  }

  setCurrentUser = ( currentUser) => {
    this.setState( { currentUser })
  }

  handleSignout = (event) => {
    event.preventDefault()
    axios
      .delete('/api/v1/signout.json')
      .then(response => {
        this.setState({ currentUser: null})
      })
      .catch(error => console.log(error.response))
  }


  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Header 
          currentUser={ this.state.currentUser }
          onFetchCurrentUser={ this.fetchCurrentUser} 
          onSignout={this.handleSignOut}
        />
        <Switch>
          <Route exact path='/' component={ ProductList }/>
          <Route path='/products/:id' render={ (props) => (
            <ProductDetail 
              {...props}
              currentUser={ this.state.currentUser }
            />
          )} />
          <Route path='/register' render={() => (
            <Signup onFetchCurrentUser={ this.fetchCurrentUser} 
             currentUser={ this.state.currentUser }
            />
          )}/>
          <Route path= '/login' render={() => (
            <Signin onFetchCurrentUser={ this.fetchCurrentUser} 
             
            />
          )} />
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