import React, { Children, FC } from 'react'

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
        <main>
            { children }
        </main>

        {/*pRODUCTOS FAVORITOS*/}
    
    </>
  )
}
