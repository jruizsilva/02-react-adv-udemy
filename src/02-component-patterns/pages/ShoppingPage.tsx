import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'
import { products } from '../data/products'
import { ChildrenInterface } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const product = products[0]

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark text-white'
        initialValue={{ count: 4, maxCount: 10 }}
      >
        {({
          count,
          increaseBy,
          reset,
          isMaxCountReached
        }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />

            <button onClick={reset}>Reset</button>
            <button
              onClick={() => {
                increaseBy(-2)
              }}
              disabled={isMaxCountReached}
            >
              -2
            </button>
            <button
              onClick={() => {
                increaseBy(+2)
              }}
              disabled={isMaxCountReached}
            >
              +2
            </button>
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  )
}

export default ShoppingPage
