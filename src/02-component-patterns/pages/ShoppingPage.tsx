import React from 'react'
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image
            className='custom-image'
            style={{ boxShadow: '0 0 10px lightblue' }}
          />
          <ProductCard.Title className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          <ProductImage style={{ boxShadow: '0 0 10px lightblue' }} />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
