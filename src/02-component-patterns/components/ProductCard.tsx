import { createContext, CSSProperties } from 'react'
import { useProduct } from '../hooks/useProduct'
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValue,
  ChildrenInterface
} from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext(
  {} as ProductContextProps
)
const { Provider } = ProductContext

export interface Props {
  // children?: ReactElement | ReactElement[]
  children: (args: ChildrenInterface) => JSX.Element
  product: Product
  className?: string
  style?: CSSProperties
  value?: number
  initialValue: InitialValue
  onChange?: (args: onChangeArgs) => void
}

const ProductCard = ({
  product,
  children,
  className,
  style,
  value,
  onChange,
  initialValue
}: Props) => {
  const {
    counter,
    increaseBy,
    reset,
    isMaxCountReached,
    maxCount
  } = useProduct({
    onChange,
    product,
    value,
    initialValue
  })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
        isMaxCountReached
      }}
    >
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count: counter,
          product,
          increaseBy,
          isMaxCountReached,
          maxCount,
          reset
        })}
      </div>
    </Provider>
  )
}

export default ProductCard
