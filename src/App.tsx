import React, { useContext } from 'react'
import { MainLayout } from './layout/MainLayout'
import { ProductContext } from './context/products/ProductContext';
import { ProductList } from './components/products/ProductList';

const App = () => {

  return (
    <>
      <MainLayout>
        { /*Listado de productos */}
        <ProductList/>

        <div>
        </div>
      </MainLayout>
    </>
  )
}

export default App