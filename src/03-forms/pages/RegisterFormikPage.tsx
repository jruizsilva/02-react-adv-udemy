import { Formik, Form } from 'formik'

import * as Yup from 'yup'

import { MyTextInput } from '../components'
import '../styles/styles.css'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Debe tener 2 caracteres minimo')
    .max(15, 'Debe tener menos de 15 caracteres')
    .required('El nombre es requerido'),
  email: Yup.string()
    .email('El correo debe ser valido')
    .required('El email es requerido'),
  password1: Yup.string()
    .min(6, 'Debe tener 6 caracteres minimo')
    .required('La contraseña es requerida'),
  password2: Yup.string()
    .min(6, 'Debe tener 6 caracteres minimo')
    .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
    .required('La contraseña2 es requerida')
})

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>RegisterFormikPage</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput name='name' label='Nombre' placeholder='Nombre' />
            <MyTextInput
              type='email'
              name='email'
              label='Email'
              placeholder='Email'
            />
            <MyTextInput
              type='password'
              name='password1'
              label='Contraseña'
              placeholder='Contraseña'
            />
            <MyTextInput
              type='password'
              name='password2'
              label='Confirma la contraseña'
              placeholder='Contraseña 2'
            />
            <button type='submit'>Create</button>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
