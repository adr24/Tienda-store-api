import React, { FC, useContext } from 'react'
import { ProductContext } from '../../context/products/ProductContext';
import { ProductCard } from './';

export const ProductList: FC = () => {
    
    
    const { products, isLoading } = useContext( ProductContext );

    if ( isLoading ){
    return (
      <h1>Cargando...</h1>
    )
  }


    console.log({products});
    return (
      <>
        <h2>Todos los productos</h2>
        <div className='grid grid-cols-4 gap-10'>
          {
            products.map( (product) =>
              <ProductCard product={ product } key={ product.id }/>
        
            
            )
          }
        </div>
      </> 
  )
}
