import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/shared/Header'
import ProductList from './ProductsContainer'
import ProductDetail from './ProductDetailContainer'
import Footer from '../components/shared/Footer'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={ ProductList }/>
        <Route path='/products/:id' component={ ProductDetail } />

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

export default App