import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../components/shared/Header'
import Jumbotron from '../components/products/Jumbotron'
import ProductList from './ProductsContainer'
import Footer from '../components/shared/Footer'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Jumbotron />
      <Route exact path='/' component={ ProductList }/>
      <Route path='/jumbo' component={ Jumbotron }/>
      <Route path='/jumbo/tron' component={ Jumbotron }/>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
)

export default App