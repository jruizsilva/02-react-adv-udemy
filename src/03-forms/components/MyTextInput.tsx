import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [x: string]: any
  id?: string
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  console.log(field)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type='text' {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}
