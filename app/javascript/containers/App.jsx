import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/shared/Header'
import Jumbotron from '../components/products/Jumbotron'
import ProductList from './ProductsContainer'
import Footer from '../components/shared/Footer'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Jumbotron />
      <ProductList />
      <Footer />
    </React.Fragment>
  </BrowserRouter>
)

export default App