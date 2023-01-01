import { ProductCardHOCProps } from '../interfaces/interfaces'
import ProductButtons from './ProductButtons'
import ProductCardHOC from './ProductCard'
import ProductImage from './ProductImage'
import ProductTitle from './ProductTitle'

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export { ProductCard, ProductButtons, ProductImage, ProductTitle }
