import { ProductElement, ProductResponse } from '@/interfaces/Product'
import { GetServerSideProps } from 'next'
import React, { FC } from 'react'

interface Props {
  products: ProductElement
}

export const ProductList:FC<Props> = ({products}) => {
  return (
    <div>ProductList</div>
  )
}


export const getServerSideProps : GetServerSideProps = async ({params}) => {
  try {
    const resp = await fetch(`${process.env.API_URL}/products`)
    const data : ProductResponse = await resp.json()

    return {
      props: {
        products: data
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        products: []
      }
    }
  }

  
  


}
