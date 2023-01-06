import { useEffect, useRef, useState } from 'react'
import {
  InitialValue,
  onChangeArgs,
  Product
} from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  value?: number
  initialValue?: InitialValue
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({
  product,
  value = 0,
  initialValue,
  onChange
}: useProductArgs) => {
  const [counter, setCounter] = useState(
    initialValue?.count || value
  )

  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)
    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue.maxCount)
    }
    setCounter(newValue)

    onChange && onChange({ count: newValue, product })
  }
  const reset = () => {
    setCounter(initialValue?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    increaseBy,
    reset,
    maxCount: initialValue && initialValue.maxCount,
    isMaxCountReached:
      !!initialValue &&
      !!initialValue.maxCount &&
      counter === initialValue.maxCount
  }
}
