import React, { Children, FC } from 'react'
import { Header } from '../components'
// const edad: number = 12;
// console.log(edad);

interface Props{
  children: JSX.Element|JSX.Element[],
}

export const MainLayout:FC<Props> = ({ children }) => {
  return (
    <>
        {/*Header */}
        <Header/>

        { /*CONTENIDO PRINCIPAL*/}
        <main className=' px-10 py-10'>
            { children }
        </main>

        {/*pRODUCTOS FAVORITOS*/}
    
    </>
  )
}
